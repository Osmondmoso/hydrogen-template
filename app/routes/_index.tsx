import {type MetaFunction} from '@remix-run/react';
import {useEffect} from 'react';

export const meta: MetaFunction = () => {
  return [{title: 'KASI FIRST — Job Hunters'}];
};

const pageStyles = `
  :root {
    --gold: #f5a623;
    --gold-light: #ffd166;
    --dark: #0d0d0d;
    --dark2: #161616;
    --dark3: #1e1e1e;
    --card: #1a1a1a;
    --blue: #3d7cc6;
    --blue-light: #6ea2df;
    --red: #f05b4f;
    --green: #22c55e;
    --white: #f9f5ee;
    --muted: #999;
    --radius: 20px;
  }

  .kasi-page {
    background: var(--dark);
    color: var(--white);
    font-family: 'Outfit', sans-serif;
    overflow-x: hidden;
    margin: 0 -1rem -1rem;
    width: calc(100% + 2rem);
  }

  .kasi-page::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
    opacity: 0.5;
  }

  .kasi-page * { box-sizing: border-box; }

  .kasi-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 40px;
    background: rgba(6, 10, 17, 0.88);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(61, 124, 198, 0.35);
  }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 20px;
    letter-spacing: 2px;
    color: var(--blue-light);
    font-weight: 700;
  }

  .nav-logo img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(61, 124, 198, 0.45);
  }

  .hero-logo {
    width: min(360px, 78vw);
    margin-top: 36px;
    margin-bottom: 22px;
    filter: drop-shadow(0 18px 35px rgba(0, 0, 0, 0.45));
  }

  .nav-cta, .btn-primary, .plan-btn { text-decoration: none; }

  .nav-cta {
    background: linear-gradient(135deg, var(--blue), #315f97);
    color: var(--dark);
    font-weight: 700;
    font-size: 14px;
    padding: 10px 24px;
    border-radius: 50px;
  }

  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 120px 24px 80px;
    z-index: 1;
  }

  .hero-glow {
    position: absolute;
    top: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(61, 124, 198, 0.25) 0%, transparent 70%);
    pointer-events: none;
  }

  .badge {
    display: inline-flex;
    gap: 8px;
    background: rgba(245, 166, 35, 0.12);
    border: 1px solid rgba(245, 166, 35, 0.3);
    color: var(--blue-light);
    font-size: 13px;
    font-weight: 600;
    padding: 8px 18px;
    border-radius: 50px;
    margin-bottom: 28px;
  }

  .hero h1 {
    font-size: clamp(64px, 12vw, 140px);
    line-height: 0.9;
    letter-spacing: 4px;
  }

  .hero h1 span { color: var(--blue-light); display: block; }

  .hero-sub {
    max-width: 600px;
    font-size: clamp(16px, 2.5vw, 20px);
    color: #bbb;
    line-height: 1.7;
    margin: 28px auto 44px;
  }

  .hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, var(--blue), #315f97);
    color: var(--dark);
    font-weight: 800;
    font-size: 16px;
    padding: 16px 36px;
    border-radius: 50px;
  }

  .btn-ghost {
    display: inline-flex;
    align-items: center;
    color: var(--white);
    font-weight: 600;
    font-size: 16px;
    padding: 16px 32px;
    border-radius: 50px;
    border: 1.5px solid rgba(61, 124, 198, 0.45);
    text-decoration: none;
  }

  .stats-bar, .section { z-index: 1; position: relative; }
  .stats-bar {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    gap: 16px;
    padding: 16px 24px 80px;
    max-width: 900px;
    margin: 0 auto;
  }

  .stat-item {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(61, 124, 198, 0.18);
    border-radius: 14px;
    text-align: center;
    padding: 28px 18px;
    min-height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .stat-number { font-size: 52px; color: var(--blue-light); }
  .stat-label { font-size: 13px; color: var(--muted); text-transform: uppercase; }

  .divider { height: 1px; background: rgba(255, 255, 255, 0.05); max-width: 1200px; margin: 0 auto; }
  .section { padding: 80px 24px; max-width: 1200px; margin: 0 auto; }
  .section-title { font-size: clamp(40px, 6vw, 72px); }
  .section-desc { color: #aaa; max-width: 500px; margin-bottom: 32px; }

  .steps, .plans-grid, .sub-grid { display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
  .plans-grid { align-items: stretch; }
  .step-card, .plan-card, .sub-card, .testi-card {
    background: var(--card);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: var(--radius);
    padding: 28px;
  }

  .proof-section { background: var(--dark2); border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); }
  .testimonials { display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }

  .plan-card.featured { border: 2px solid var(--blue); background: linear-gradient(145deg, #10192b, #171717); }
  .plan-card {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  .plan-badge, .discount-tag {
    display: inline-block;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 12px;
    margin-bottom: 12px;
  }
  .plan-badge { background: var(--blue); color: #fff; }
  .discount-tag { color: var(--red); border: 1px solid rgba(240, 91, 79, 0.45); }

  .plan-name { font-size: 28px; margin-bottom: 6px; }
  .plan-price { margin: 12px 0; font-size: 20px; color: var(--blue-light); }
  .amount { font-size: 56px; }
  .plan-tagline { color: var(--muted); }
  .plan-features { margin: 20px 0; padding-left: 18px; color: #ccc; }

  .plan-btn {
    display: block;
    text-align: center;
    padding: 14px;
    border-radius: 50px;
    font-weight: 700;
    margin-top: auto;
  }
  .plan-btn.primary { background: linear-gradient(135deg, var(--blue), #315f97); color: #fff; }
  .plan-btn.outline { border: 1px solid rgba(61, 124, 198, 0.4); color: var(--white); }

  .payment-box {
    background: var(--dark2);
    border: 1px solid rgba(61, 124, 198, 0.25);
    border-radius: var(--radius);
    padding: 42px 32px;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }

  .footer-cta {
    background: linear-gradient(135deg, #1a1300, #0d0d0d);
    border-top: 1px solid rgba(61, 124, 198, 0.35);
    text-align: center;
    padding: 100px 24px;
  }

  .footer-cta h2 { font-size: clamp(48px, 8vw, 96px); }

  .tech-strip {
    border-top: 1px solid rgba(61, 124, 198, 0.3);
    border-bottom: 1px solid rgba(61, 124, 198, 0.3);
    padding: 14px 20px;
    text-align: center;
    color: #9fc0e7;
    letter-spacing: 1px;
    font-size: 13px;
    background: rgba(9, 14, 24, 0.9);
  }

  .sub-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .kasi-footer {
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 32px 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 13px;
    color: var(--muted);
  }

  .wa-float {
    position: fixed;
    right: 22px;
    bottom: 22px;
    z-index: 999;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background: linear-gradient(145deg, #4ea1ff, #2b74d8);
    border: 1px solid rgba(255, 255, 255, 0.35);
    box-shadow: 0 10px 22px rgba(25, 85, 170, 0.45);
    display: grid;
    place-items: center;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 26px;
  }

  .fade-up { opacity: 0; transform: translateY(30px); transition: opacity .7s ease, transform .7s ease; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }

  @media (max-width: 600px) {
    .kasi-nav { padding: 14px 20px; }
    .hero { padding: 100px 20px 60px; }
    .stats-bar { grid-template-columns: repeat(2, minmax(120px, 1fr)); padding: 16px 16px 60px; }
    .stat-item { min-height: 160px; }
    .section { padding: 60px 20px; }
    .kasi-footer { flex-direction: column; text-align: center; }
  }
`;

export default function Homepage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold: 0.12},
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <main className="kasi-page">
      <style>{pageStyles}</style>
      <nav className="kasi-nav">
        <div className="nav-logo">
          <img src="/kasi-first-logo.svg" alt="KASI FIRST logo" />
          <span>KASI FIRST</span>
        </div>
        <a
          className="nav-cta"
          href="https://wa.me/27849640891?text=Hi%20KASI%20FIRST,%20I%20need%20help%20finding%20a%20job!"
          target="_blank"
          rel="noreferrer"
        >
          Chat Now
        </a>
      </nav>

      <section className="hero">
        <div className="hero-glow" />
        <img
          className="hero-logo"
          src="/kasi-first-logo.svg"
          alt="KASI FIRST"
        />
        <div className="badge">East Rand&apos;s #1 Job Hunting Service</div>
        <h1>
          WE HUNT<span>JOBS FOR YOU.</span>
        </h1>
        <p className="hero-sub">
          Stop scrolling. Stop printing. Stop waiting in queues. We use the
          latest AI technology to find the best jobs in Benoni &amp; Joburg and
          get your profile in front of the right people, within a day.
        </p>
        <div className="hero-buttons">
          <a
            className="btn-primary"
            href="https://wa.me/27849640891?text=Hi%20KASI%20FIRST,%20I%20need%20help%20finding%20a%20job!"
            target="_blank"
            rel="noreferrer"
          >
            Start Now on WhatsApp
          </a>
          <a className="btn-ghost" href="#plans">
            See Packages ↓
          </a>
        </div>
      </section>

      <div className="tech-strip">
        AI-Powered CV Builder • ATS Keyword Optimized • WhatsApp Updates •
        Screenshot Proof Sent • Pay with 1Voucher
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-number">1 DAY</div>
          <div className="stat-label">Turnaround Time</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">R0</div>
          <div className="stat-label">Data Spent by You</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Proof of Every App</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1K+</div>
          <div className="stat-label">Jobs Hunted</div>
        </div>
      </div>

      <div className="divider" />

      <section className="section fade-up">
        <h2 className="section-title">HOW IT WORKS</h2>
        <p className="section-desc">
          Four easy steps. We handle everything. You just wait for the call.
        </p>
        <div className="steps">
          <article className="step-card">
            <h3>01 WhatsApp Us</h3>
            <p>Send us a quick message. No forms, no data, no printing.</p>
          </article>
          <article className="step-card">
            <h3>02 AI Builds Your CV</h3>
            <p>Professional recruiter-ready CV optimized to get noticed.</p>
          </article>
          <article className="step-card">
            <h3>03 We Hunt Jobs</h3>
            <p>We search and apply to the best matching jobs in your area.</p>
          </article>
          <article className="step-card">
            <h3>04 Proof Delivered</h3>
            <p>Screenshot proof of every single application submitted.</p>
          </article>
        </div>
      </section>

      <div className="divider" />

      <section className="proof-section">
        <div className="section fade-up">
          <h2 className="section-title">HAPPY CLIENTS</h2>
          <div className="testimonials">
            <article className="testi-card">
              “My CV looks amazing and I got a call the next day.” — Thandi M.
            </article>
            <article className="testi-card">
              “No stress, no data wasted. Worth every cent.” — Sipho K.
            </article>
            <article className="testi-card">
              “Sorted me out in one day with proof of each application.” —
              Nosipho D.
            </article>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section id="plans" className="section fade-up">
        <h2 className="section-title">PACKAGES</h2>
        <div className="plans-grid">
          <article className="plan-card">
            <div className="discount-tag">40% OFF</div>
            <div className="plan-name">The Starter</div>
            <div className="plan-price">
              R <span className="amount">35</span> <s>R59</s>
            </div>
            <ul className="plan-features">
              <li>AI-Optimised CV</li>
              <li>3 Job Links Today</li>
              <li>Within 24 Hours</li>
            </ul>
            <a
              className="plan-btn outline"
              href="https://wa.me/27849640891?text=Hi%20KASI%20FIRST,%20I%20want%20the%20Starter%20Pack%20at%20R35."
              target="_blank"
              rel="noreferrer"
            >
              Get Started — R35
            </a>
          </article>
          <article className="plan-card featured">
            <div className="plan-badge">Most Popular</div>
            <div className="discount-tag">40% OFF</div>
            <div className="plan-name">The Pro</div>
            <div className="plan-price">
              R <span className="amount">59</span> <s>R99</s>
            </div>
            <ul className="plan-features">
              <li>AI-Optimised CV</li>
              <li>5 Job Links Today</li>
              <li>Priority 4-Hour Processing</li>
            </ul>
            <a
              className="plan-btn primary"
              href="https://wa.me/27849640891?text=Hi%20KASI%20FIRST,%20I%20want%20the%20Pro%20Pack%20at%20R59."
              target="_blank"
              rel="noreferrer"
            >
              Upgrade to Pro — R59
            </a>
          </article>
          <article className="plan-card">
            <div className="plan-name">The Full Deal</div>
            <div className="plan-price">
              R <span className="amount">149</span>
            </div>
            <ul className="plan-features">
              <li>Everything in Pro Pack</li>
              <li>We apply for you directly</li>
              <li>Delivered in 1 day</li>
            </ul>
            <a
              className="plan-btn outline"
              href="https://wa.me/27849640891?text=Hi%20KASI%20FIRST,%20I%20want%20the%20Full%20Deal%20at%20R149."
              target="_blank"
              rel="noreferrer"
            >
              Claim Full Deal — R149
            </a>
          </article>
        </div>
      </section>

      <section className="section fade-up">
        <h2 className="section-title">STAY IN THE GAME</h2>
        <p className="section-desc">
          Keep your momentum going with weekly or monthly support while we keep
          hunting for opportunities.
        </p>
        <div className="sub-grid">
          <article className="sub-card">
            <div className="plan-name">Monthly Hunter</div>
            <div className="plan-price">
              R <span className="amount">199</span> /month
            </div>
            <ul className="plan-features">
              <li>20 applications submitted every month</li>
              <li>Proof sent directly to WhatsApp</li>
              <li>AI CV updated continuously</li>
            </ul>
            <a
              className="plan-btn primary"
              href="https://wa.me/27849640891?text=Hi%20KASI%20FIRST,%20I%20want%20the%20Monthly%20Hunter."
              target="_blank"
              rel="noreferrer"
            >
              Subscribe Monthly
            </a>
          </article>
          <article className="sub-card">
            <div className="plan-name">Weekly Leads</div>
            <div className="plan-price">
              R <span className="amount">49</span> /week
            </div>
            <ul className="plan-features">
              <li>10 fresh East Rand leads every week</li>
              <li>Curated roles sent to WhatsApp</li>
              <li>Perfect for active job seekers</li>
            </ul>
            <a
              className="plan-btn outline"
              href="https://wa.me/27849640891?text=Hi%20KASI%20FIRST,%20I%20want%20Weekly%20Lead%20Alerts."
              target="_blank"
              rel="noreferrer"
            >
              Get Weekly Leads
            </a>
          </article>
        </div>
      </section>

      <section className="section fade-up">
        <div className="payment-box">
          <h3>PAY WITH 1VOUCHER</h3>
          <p>
            Buy a 1Voucher at any local shop and pay instantly. Fast, safe, and
            simple.
          </p>
        </div>
      </section>

      <section className="footer-cta">
        <h2>
          READY TO GET <span style={{color: 'var(--blue-light)'}}>HIRED?</span>
        </h2>
        <a
          className="btn-primary"
          href="https://wa.me/27849640891?text=Hi%20KASI%20FIRST,%20I%20need%20help%20finding%20a%20job!"
          target="_blank"
          rel="noreferrer"
        >
          Start on WhatsApp Now
        </a>
      </section>

      <footer className="kasi-footer">
        <div>KASI FIRST</div>
        <div>© 2025 KASI FIRST Job Solutions · East Rand, Johannesburg</div>
      </footer>
      <a
        className="wa-float"
        href="https://wa.me/27849640891?text=Hi%20KASI%20FIRST,%20I%20need%20help%20finding%20a%20job!"
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat"
      >
        W
      </a>
    </main>
  );
}
