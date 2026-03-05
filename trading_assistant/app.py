from __future__ import annotations

import io
import uuid
from dataclasses import dataclass, asdict
from typing import Dict, Tuple

import numpy as np
from PIL import Image
from flask import Flask, render_template, request


app = Flask(__name__)


@dataclass
class Signal:
    pair: str
    direction: str
    entry_zone: str
    stop_loss: str
    take_profit: str
    reason: str
    status: str


analysis_store: Dict[str, Dict] = {}


def _load_image(file_storage) -> np.ndarray:
    image_bytes = file_storage.read()
    file_storage.stream.seek(0)
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    return np.array(image)


def _analyze_chart(image: np.ndarray) -> Dict[str, float | str]:
    """Lightweight heuristic chart interpretation from screenshot color/shape patterns."""
    h, w, _ = image.shape
    gray = image.mean(axis=2)

    # Trend proxy: compare average brightness left vs right side.
    left_mean = float(gray[:, : w // 2].mean())
    right_mean = float(gray[:, w // 2 :].mean())
    trend_strength = right_mean - left_mean
    trend_direction = "BUY" if trend_strength >= 0 else "SELL"

    # Momentum proxy: larger std means more volatile candles/body activity.
    momentum = float(gray.std())

    # Wick/rejection proxy from vertical edges.
    vertical_change = np.abs(np.diff(gray, axis=0)).mean()
    horizontal_change = np.abs(np.diff(gray, axis=1)).mean()
    rejection_wick_bias = float(vertical_change - horizontal_change)

    # Support/resistance proxy from dense horizontal bands.
    row_density = gray.mean(axis=1)
    support_level = int(np.argmin(row_density))
    resistance_level = int(np.argmax(row_density))

    # Liquidity sweep proxy: spikes near top/bottom quarters.
    top_quarter = gray[: h // 4, :]
    bottom_quarter = gray[3 * h // 4 :, :]
    top_spike = float(top_quarter.std())
    bottom_spike = float(bottom_quarter.std())

    return {
        "trend_direction": trend_direction,
        "trend_strength": trend_strength,
        "momentum": momentum,
        "wick_bias": rejection_wick_bias,
        "support_level": support_level,
        "resistance_level": resistance_level,
        "top_spike": top_spike,
        "bottom_spike": bottom_spike,
    }


def _build_pre_trade_signal(pair: str, analysis: Dict[str, float | str]) -> Signal:
    direction = str(analysis["trend_direction"])
    momentum = float(analysis["momentum"])
    wick_bias = float(analysis["wick_bias"])

    entry_anchor = "recent breakout retest" if momentum > 30 else "nearest support/resistance zone"
    sl_padding = "below sweep low" if direction == "BUY" else "above sweep high"
    tp_target = "next resistance" if direction == "BUY" else "next support"

    reason = (
        f"Structure bias is {direction} with momentum score {momentum:.1f}. "
        f"Wick/rejection bias {wick_bias:.2f} suggests liquidity behavior; "
        f"wait for a strong close through the {entry_anchor}."
    )

    return Signal(
        pair=pair.upper() or "UNKNOWN",
        direction=direction,
        entry_zone=entry_anchor,
        stop_loss=sl_padding,
        take_profit=tp_target,
        reason=reason,
        status="WAIT FOR CANDLE CLOSE CONFIRMATION",
    )


def _evaluate_confirmation(previous: Dict, current: Dict[str, float | str]) -> Tuple[str, Dict[str, str]]:
    prev_direction = previous["signal"]["direction"]
    current_direction = str(current["trend_direction"])
    momentum_improved = float(current["momentum"]) >= float(previous["analysis"]["momentum"]) * 0.95
    strong_body = abs(float(current["trend_strength"])) > abs(float(previous["analysis"]["trend_strength"])) * 0.8
    rejection_risk = float(current["wick_bias"]) > 6.5

    confirmed = prev_direction == current_direction and momentum_improved and strong_body and not rejection_risk

    if confirmed:
        decision = "CONFIRMED ENTRY"
        reasoning = (
            "Strong candle close aligns with prior directional bias, body strength remained firm, "
            "and rejection-wick risk stayed controlled."
        )
    else:
        decision = "CANCEL TRADE"
        reasoning = (
            "No clean candle-close confirmation: direction weakened or wick/rejection behavior suggests "
            "possible fake breakout/liquidity trap."
        )

    update = {
        "final_decision": decision,
        "updated_entry": "market on close confirmation" if confirmed else "do not enter",
        "stop_loss": previous["signal"]["stop_loss"],
        "take_profit": previous["signal"]["take_profit"],
        "reasoning": reasoning,
    }
    return decision, update


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")


@app.route("/analyze", methods=["POST"])
def analyze():
    screenshot = request.files.get("screenshot")
    pair = request.form.get("pair", "UNKNOWN")

    if not screenshot:
        return render_template("index.html", error="Please upload a screenshot to analyze.")

    image = _load_image(screenshot)
    analysis = _analyze_chart(image)
    signal = _build_pre_trade_signal(pair, analysis)

    analysis_id = str(uuid.uuid4())
    analysis_store[analysis_id] = {
        "analysis": analysis,
        "signal": asdict(signal),
    }

    return render_template(
        "index.html",
        signal=asdict(signal),
        analysis_id=analysis_id,
        analysis_metrics=analysis,
    )


@app.route("/update", methods=["POST"])
def update_analysis():
    screenshot = request.files.get("update_screenshot")
    analysis_id = request.form.get("analysis_id")

    if not screenshot or not analysis_id or analysis_id not in analysis_store:
        return render_template(
            "index.html",
            error="Missing first analysis context. Upload an initial screenshot first.",
        )

    image = _load_image(screenshot)
    new_analysis = _analyze_chart(image)
    _, final_update = _evaluate_confirmation(analysis_store[analysis_id], new_analysis)

    return render_template(
        "index.html",
        signal=analysis_store[analysis_id]["signal"],
        analysis_id=analysis_id,
        analysis_metrics=analysis_store[analysis_id]["analysis"],
        final_update=final_update,
    )


if __name__ == "__main__":
    app.run(debug=True, port=8000)
