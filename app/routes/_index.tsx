import {type MetaFunction} from '@remix-run/react';
import {useEffect, useRef, useState} from 'react';

export const meta: MetaFunction = () => {
  return [
    {title: 'Slug Frontline | Browser Arcade'},
    {
      name: 'description',
      content:
        'A fully playable Metal Slug-inspired browser arcade game with weapons, trucks, enemies, health, and destructible battlefield energy.',
    },
  ];
};

type GameStatus = 'ready' | 'playing' | 'won' | 'lost';

const weaponNames = ['Rifle', 'Spread', 'Rocket'] as const;
type WeaponName = (typeof weaponNames)[number];

type InputState = {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
  fire: boolean;
  switchWeapon: boolean;
};

type Actor = {
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
  vy: number;
  health: number;
  maxHealth: number;
  facing: 1 | -1;
};

type Enemy = Actor & {
  id: number;
  kind: 'grunt' | 'shield' | 'drone';
  fireCooldown: number;
  alive: boolean;
};

type Truck = Actor & {
  id: number;
  fireCooldown: number;
  alive: boolean;
};

type Bullet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  damage: number;
  from: 'player' | 'enemy';
  color: string;
  ttl: number;
};

type Pickup = {
  x: number;
  y: number;
  type: 'health' | 'ammo' | 'rocket';
  label: string;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  ttl: number;
  color: string;
};

type GameState = {
  status: GameStatus;
  player: Actor;
  weapon: WeaponName;
  ammo: Record<WeaponName, number>;
  enemies: Enemy[];
  trucks: Truck[];
  bullets: Bullet[];
  pickups: Pickup[];
  particles: Particle[];
  score: number;
  wave: number;
  camera: number;
  spawnTimer: number;
  missionTime: number;
};

const width = 960;
const height = 540;
const groundY = 432;
const worldWidth = 3300;

function createGame(): GameState {
  return {
    status: 'ready',
    player: {
      x: 80,
      y: groundY - 58,
      w: 38,
      h: 58,
      vx: 0,
      vy: 0,
      health: 100,
      maxHealth: 100,
      facing: 1,
    },
    weapon: 'Rifle',
    ammo: {Rifle: Infinity, Spread: 52, Rocket: 10},
    enemies: [
      makeEnemy(460, 'grunt'),
      makeEnemy(720, 'shield'),
      makeEnemy(1060, 'grunt'),
      makeEnemy(1370, 'drone'),
    ],
    trucks: [makeTruck(1540), makeTruck(2460)],
    bullets: [],
    pickups: [
      {x: 640, y: groundY - 26, type: 'health', label: '+'},
      {x: 1180, y: groundY - 26, type: 'ammo', label: 'S'},
      {x: 2140, y: groundY - 26, type: 'rocket', label: 'R'},
    ],
    particles: [],
    score: 0,
    wave: 1,
    camera: 0,
    spawnTimer: 0,
    missionTime: 0,
  };
}

function makeEnemy(x: number, kind: Enemy['kind']): Enemy {
  const isDrone = kind === 'drone';
  const maxHealth = kind === 'shield' ? 70 : isDrone ? 35 : 45;
  return {
    id: Math.random(),
    kind,
    x,
    y: isDrone ? groundY - 150 : groundY - 50,
    w: isDrone ? 44 : 34,
    h: isDrone ? 28 : 50,
    vx: 0,
    vy: 0,
    health: maxHealth,
    maxHealth,
    facing: -1,
    fireCooldown: 80 + Math.random() * 80,
    alive: true,
  };
}

function makeTruck(x: number): Truck {
  return {
    id: Math.random(),
    x,
    y: groundY - 74,
    w: 132,
    h: 74,
    vx: -0.35,
    vy: 0,
    health: 190,
    maxHealth: 190,
    facing: -1,
    fireCooldown: 120,
    alive: true,
  };
}

export default function Homepage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gameRef = useRef<GameState>(createGame());
  const inputRef = useRef<InputState>({
    left: false,
    right: false,
    up: false,
    down: false,
    fire: false,
    switchWeapon: false,
  });
  const lastShotRef = useRef(0);
  const [hud, setHud] = useState(gameRef.current);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const keyMap: Record<string, keyof InputState> = {
      ArrowLeft: 'left',
      a: 'left',
      A: 'left',
      ArrowRight: 'right',
      d: 'right',
      D: 'right',
      ArrowUp: 'up',
      w: 'up',
      W: 'up',
      ArrowDown: 'down',
      s: 'down',
      S: 'down',
      ' ': 'fire',
      z: 'fire',
      Z: 'fire',
      x: 'switchWeapon',
      X: 'switchWeapon',
    };

    const onKey = (event: KeyboardEvent, isDown: boolean) => {
      const key = keyMap[event.key];
      if (!key) return;
      event.preventDefault();
      inputRef.current[key] = isDown;
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && gameRef.current.status !== 'playing') {
        gameRef.current = createGame();
        gameRef.current.status = 'playing';
      }
      onKey(event, true);
    };
    const onKeyUp = (event: KeyboardEvent) => onKey(event, false);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    let animation = 0;
    const loop = () => {
      updateGame(gameRef.current, inputRef.current, lastShotRef);
      drawGame(ctx, gameRef.current);
      setHud({...gameRef.current});
      animation = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  const startGame = () => {
    gameRef.current = createGame();
    gameRef.current.status = 'playing';
    setHud({...gameRef.current});
  };

  const activeHostiles =
    hud.enemies.filter((enemy) => enemy.alive).length +
    hud.trucks.filter((truck) => truck.alive).length;

  return (
    <main className="slug-game-page">
      <section className="slug-hero">
        <div>
          <p className="slug-kicker">Operation Pixel Thunder</p>
          <h1>Slug Frontline</h1>
          <p>
            Run, jump, swap weapons, collect supplies, destroy armored trucks,
            and survive waves of infantry and drones in this arcade battlefield.
          </p>
        </div>
        <button className="slug-start" onClick={startGame} type="button">
          {hud.status === 'playing' ? 'Restart mission' : 'Start mission'}
        </button>
      </section>

      <section className="slug-cabinet" aria-label="Playable arcade game">
        <canvas
          aria-label="Slug Frontline game canvas"
          className="slug-canvas"
          height={height}
          ref={canvasRef}
          width={width}
        />
        <div className="slug-hud" aria-live="polite">
          <span>Health {Math.max(0, Math.round(hud.player.health))}</span>
          <span>Weapon {hud.weapon}</span>
          <span>
            Ammo{' '}
            {hud.ammo[hud.weapon] === Infinity ? '∞' : hud.ammo[hud.weapon]}
          </span>
          <span>Score {hud.score}</span>
          <span>Hostiles {activeHostiles}</span>
        </div>
      </section>

      <section className="slug-controls">
        <h2>Controls</h2>
        <ul>
          <li>Move with WASD or arrow keys.</li>
          <li>Jump with W / Up. Fire with Space or Z.</li>
          <li>Switch weapons with X between Rifle, Spread, and Rocket.</li>
          <li>Collect red medkits and yellow ammo crates to stay alive.</li>
        </ul>
      </section>
    </main>
  );
}

function updateGame(
  game: GameState,
  input: InputState,
  lastShotRef: React.MutableRefObject<number>,
) {
  if (game.status !== 'playing') return;

  game.missionTime += 1;
  const player = game.player;

  if (input.switchWeapon) {
    const currentIndex = weaponNames.indexOf(game.weapon);
    game.weapon = weaponNames[(currentIndex + 1) % weaponNames.length];
    input.switchWeapon = false;
  }

  player.vx = 0;
  if (input.left) {
    player.vx = -4.2;
    player.facing = -1;
  }
  if (input.right) {
    player.vx = 4.2;
    player.facing = 1;
  }
  if (input.up && player.y >= groundY - player.h - 1) player.vy = -12;
  player.vy += 0.55;
  player.x = clamp(player.x + player.vx, 24, worldWidth - player.w - 30);
  player.y += player.vy;
  if (player.y > groundY - player.h) {
    player.y = groundY - player.h;
    player.vy = 0;
  }

  if (input.fire) shootPlayer(game, lastShotRef);

  game.camera = clamp(player.x - width * 0.34, 0, worldWidth - width);
  game.spawnTimer -= 1;
  if (game.spawnTimer <= 0 && game.wave < 5) {
    game.wave += 1;
    game.spawnTimer = 520;
    game.enemies.push(
      makeEnemy(player.x + 640 + Math.random() * 240, 'grunt'),
      makeEnemy(
        player.x + 820 + Math.random() * 240,
        game.wave % 2 ? 'drone' : 'shield',
      ),
    );
  }

  for (const enemy of game.enemies) {
    if (!enemy.alive) continue;
    const distance = player.x - enemy.x;
    enemy.facing = distance >= 0 ? 1 : -1;
    if (enemy.kind === 'drone') {
      enemy.y += Math.sin(game.missionTime / 30 + enemy.id) * 0.9;
      enemy.x += Math.sign(distance) * 1.05;
    } else if (Math.abs(distance) > 170) {
      enemy.x += Math.sign(distance) * (enemy.kind === 'shield' ? 0.65 : 1.15);
    }
    enemy.fireCooldown -= 1;
    if (Math.abs(distance) < 560 && enemy.fireCooldown <= 0) {
      enemy.fireCooldown = enemy.kind === 'drone' ? 70 : 115;
      game.bullets.push({
        x: enemy.x + enemy.w / 2,
        y: enemy.y + enemy.h * 0.45,
        vx: enemy.facing * (enemy.kind === 'drone' ? 5.2 : 4.2),
        vy: enemy.kind === 'drone' ? 1.2 : 0,
        radius: 4,
        damage: enemy.kind === 'shield' ? 12 : 8,
        from: 'enemy',
        color: '#ff5d5d',
        ttl: 150,
      });
    }
  }

  for (const truck of game.trucks) {
    if (!truck.alive) continue;
    truck.x += truck.vx;
    truck.fireCooldown -= 1;
    if (Math.abs(player.x - truck.x) < 720 && truck.fireCooldown <= 0) {
      truck.fireCooldown = 95;
      game.bullets.push({
        x: truck.x + 20,
        y: truck.y + 22,
        vx: -6.3,
        vy: -0.7,
        radius: 6,
        damage: 18,
        from: 'enemy',
        color: '#ffb238',
        ttl: 170,
      });
    }
  }

  updateBullets(game);
  updatePickups(game);
  updateParticles(game);

  if (player.health <= 0) game.status = 'lost';
  if (
    player.x > worldWidth - 190 &&
    !game.enemies.some((enemy) => enemy.alive) &&
    !game.trucks.some((truck) => truck.alive)
  ) {
    game.status = 'won';
    game.score += 500;
  }
}

function shootPlayer(
  game: GameState,
  lastShotRef: React.MutableRefObject<number>,
) {
  const cadence =
    game.weapon === 'Rifle' ? 10 : game.weapon === 'Spread' ? 22 : 38;
  if (game.missionTime - lastShotRef.current < cadence) return;
  if (game.ammo[game.weapon] <= 0) {
    game.weapon = 'Rifle';
    return;
  }
  lastShotRef.current = game.missionTime;
  if (game.weapon !== 'Rifle') game.ammo[game.weapon] -= 1;
  const originX =
    game.player.x + (game.player.facing === 1 ? game.player.w + 8 : -8);
  const originY = game.player.y + 23;
  const base: Bullet = {
    x: originX,
    y: originY,
    vx: game.player.facing * (game.weapon === 'Rocket' ? 7 : 9),
    vy: 0,
    radius: game.weapon === 'Rocket' ? 9 : 4,
    damage: game.weapon === 'Rocket' ? 70 : game.weapon === 'Spread' ? 18 : 16,
    from: 'player',
    color: game.weapon === 'Rocket' ? '#ffcf4d' : '#7fffd4',
    ttl: 140,
  };
  if (game.weapon === 'Spread') {
    [-0.16, 0, 0.16].forEach((angle) =>
      game.bullets.push({...base, vy: angle * 16, ttl: 95}),
    );
  } else {
    game.bullets.push(base);
  }
}

function updateBullets(game: GameState) {
  for (const bullet of game.bullets) {
    bullet.x += bullet.vx;
    bullet.y += bullet.vy;
    bullet.ttl -= 1;
    if (bullet.from === 'player') {
      for (const target of [...game.enemies, ...game.trucks]) {
        if (!target.alive || !circleHitsRect(bullet, target)) continue;
        target.health -= bullet.damage;
        bullet.ttl = 0;
        burst(
          game,
          bullet.x,
          bullet.y,
          bullet.color,
          bullet.radius > 6 ? 18 : 7,
        );
        if (target.health <= 0) {
          target.alive = false;
          game.score += 'kind' in target ? 120 : 340;
          burst(
            game,
            target.x + target.w / 2,
            target.y + target.h / 2,
            '#ff8c2a',
            34,
          );
        }
        break;
      }
    } else if (circleHitsRect(bullet, game.player)) {
      game.player.health -= bullet.damage;
      bullet.ttl = 0;
      burst(game, bullet.x, bullet.y, '#ff5d5d', 8);
    }
  }
  game.bullets = game.bullets.filter(
    (bullet) =>
      bullet.ttl > 0 &&
      bullet.x > game.camera - 80 &&
      bullet.x < game.camera + width + 120 &&
      bullet.y > -40 &&
      bullet.y < height + 40,
  );
}

function updatePickups(game: GameState) {
  game.pickups = game.pickups.filter((pickup) => {
    const touched = rectsOverlap(game.player, {
      x: pickup.x,
      y: pickup.y,
      w: 30,
      h: 30,
    });
    if (!touched) return true;
    if (pickup.type === 'health')
      game.player.health = Math.min(100, game.player.health + 35);
    if (pickup.type === 'ammo') game.ammo.Spread += 28;
    if (pickup.type === 'rocket') game.ammo.Rocket += 6;
    game.score += 50;
    burst(game, pickup.x, pickup.y, '#ffffff', 14);
    return false;
  });
}

function updateParticles(game: GameState) {
  for (const particle of game.particles) {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vy += 0.08;
    particle.ttl -= 1;
  }
  game.particles = game.particles.filter((particle) => particle.ttl > 0);
}

function drawGame(ctx: CanvasRenderingContext2D, game: GameState) {
  ctx.clearRect(0, 0, width, height);
  const camera = game.camera;
  const sky = ctx.createLinearGradient(0, 0, 0, height);
  sky.addColorStop(0, '#142240');
  sky.addColorStop(0.54, '#314f6f');
  sky.addColorStop(1, '#15110e');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  drawEnvironment(ctx, camera);
  drawPickups(ctx, game.pickups, camera);
  drawPlayer(ctx, game.player, camera);
  game.enemies.forEach((enemy) => enemy.alive && drawEnemy(ctx, enemy, camera));
  game.trucks.forEach((truck) => truck.alive && drawTruck(ctx, truck, camera));
  drawBullets(ctx, game.bullets, camera);
  drawParticles(ctx, game.particles, camera);
  drawOverlay(ctx, game);
}

function drawEnvironment(ctx: CanvasRenderingContext2D, camera: number) {
  ctx.fillStyle = '#243047';
  for (let i = 0; i < 14; i += 1) {
    const x = i * 260 - ((camera * 0.28) % 260);
    ctx.fillRect(x, 196 - (i % 3) * 28, 128, 238);
    ctx.fillStyle = i % 2 ? '#263b57' : '#1e2b41';
  }
  ctx.fillStyle = '#58614a';
  for (let i = 0; i < 24; i += 1) {
    const x = i * 180 - ((camera * 0.62) % 180);
    ctx.beginPath();
    ctx.moveTo(x, groundY);
    ctx.lineTo(x + 70, 300 + (i % 3) * 18);
    ctx.lineTo(x + 148, groundY);
    ctx.closePath();
    ctx.fill();
  }
  ctx.fillStyle = '#3b2b20';
  ctx.fillRect(0, groundY, width, height - groundY);
  ctx.fillStyle = '#6d5634';
  ctx.fillRect(0, groundY, width, 18);
  ctx.fillStyle = '#1b1714';
  for (let x = -((camera * 1.1) % 72); x < width; x += 72) {
    ctx.fillRect(x, groundY + 35, 46, 8);
  }
  ctx.fillStyle = '#fee27a';
  ctx.fillRect(worldWidth - camera - 116, groundY - 154, 18, 154);
  ctx.fillStyle = '#ff4c4c';
  ctx.fillRect(worldWidth - camera - 98, groundY - 154, 74, 42);
}

function drawPlayer(
  ctx: CanvasRenderingContext2D,
  player: Actor,
  camera: number,
) {
  const x = player.x - camera;
  ctx.fillStyle = '#f2c58b';
  ctx.fillRect(x + 9, player.y + 2, 19, 18);
  ctx.fillStyle = '#d63031';
  ctx.fillRect(x + 5, player.y + 20, 29, 25);
  ctx.fillStyle = '#2d3436';
  ctx.fillRect(x + 7, player.y + 45, 10, 13);
  ctx.fillRect(x + 23, player.y + 45, 10, 13);
  ctx.fillStyle = '#222';
  ctx.fillRect(x + (player.facing === 1 ? 31 : -18), player.y + 28, 26, 6);
}

function drawEnemy(
  ctx: CanvasRenderingContext2D,
  enemy: Enemy,
  camera: number,
) {
  const x = enemy.x - camera;
  ctx.fillStyle =
    enemy.kind === 'shield'
      ? '#8e6b45'
      : enemy.kind === 'drone'
      ? '#b2bec3'
      : '#6ab04c';
  ctx.fillRect(x, enemy.y, enemy.w, enemy.h);
  ctx.fillStyle = '#111';
  ctx.fillRect(
    x + (enemy.facing === 1 ? enemy.w - 3 : -18),
    enemy.y + enemy.h * 0.45,
    20,
    5,
  );
  drawBar(
    ctx,
    x,
    enemy.y - 9,
    enemy.w,
    5,
    enemy.health / enemy.maxHealth,
    '#ff6b6b',
  );
}

function drawTruck(
  ctx: CanvasRenderingContext2D,
  truck: Truck,
  camera: number,
) {
  const x = truck.x - camera;
  ctx.fillStyle = '#596275';
  ctx.fillRect(x, truck.y + 18, truck.w, 44);
  ctx.fillStyle = '#2c3e50';
  ctx.fillRect(x + 42, truck.y, 54, 32);
  ctx.fillStyle = '#111';
  ctx.fillRect(x + 12, truck.y + 56, 28, 28);
  ctx.fillRect(x + 92, truck.y + 56, 28, 28);
  ctx.fillStyle = '#ff793f';
  ctx.fillRect(x - 20, truck.y + 20, 34, 8);
  drawBar(
    ctx,
    x,
    truck.y - 12,
    truck.w,
    7,
    truck.health / truck.maxHealth,
    '#feca57',
  );
}

function drawPickups(
  ctx: CanvasRenderingContext2D,
  pickups: Pickup[],
  camera: number,
) {
  for (const pickup of pickups) {
    const x = pickup.x - camera;
    ctx.fillStyle = pickup.type === 'health' ? '#ff4757' : '#ffd32a';
    ctx.fillRect(x, pickup.y, 30, 30);
    ctx.fillStyle = '#111';
    ctx.font = 'bold 18px monospace';
    ctx.fillText(pickup.label, x + 9, pickup.y + 22);
  }
}

function drawBullets(
  ctx: CanvasRenderingContext2D,
  bullets: Bullet[],
  camera: number,
) {
  for (const bullet of bullets) {
    ctx.fillStyle = bullet.color;
    ctx.beginPath();
    ctx.arc(bullet.x - camera, bullet.y, bullet.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawParticles(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  camera: number,
) {
  for (const particle of particles) {
    ctx.globalAlpha = Math.max(0, particle.ttl / 40);
    ctx.fillStyle = particle.color;
    ctx.fillRect(particle.x - camera, particle.y, 4, 4);
  }
  ctx.globalAlpha = 1;
}

function drawOverlay(ctx: CanvasRenderingContext2D, game: GameState) {
  drawBar(
    ctx,
    24,
    22,
    210,
    16,
    game.player.health / game.player.maxHealth,
    '#2ecc71',
  );
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 18px monospace';
  ctx.fillText(
    `${game.weapon}  ${
      game.ammo[game.weapon] === Infinity ? '∞' : game.ammo[game.weapon]
    }`,
    254,
    36,
  );
  ctx.fillText(`Score ${game.score}`, 24, 64);
  if (game.status !== 'playing') {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.62)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.font = 'bold 48px monospace';
    const title =
      game.status === 'won'
        ? 'MISSION COMPLETE'
        : game.status === 'lost'
        ? 'YOU WERE OVERRUN'
        : 'SLUG FRONTLINE';
    ctx.fillText(title, width / 2, 232);
    ctx.font = '20px monospace';
    ctx.fillText('Press Enter or Start Mission to deploy', width / 2, 278);
    ctx.textAlign = 'start';
  }
}

function drawBar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  ratio: number,
  color: string,
) {
  ctx.fillStyle = '#161616';
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = color;
  ctx.fillRect(x + 2, y + 2, Math.max(0, w - 4) * clamp(ratio, 0, 1), h - 4);
}

function burst(
  game: GameState,
  x: number,
  y: number,
  color: string,
  count: number,
) {
  for (let i = 0; i < count; i += 1) {
    game.particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 7,
      vy: (Math.random() - 0.5) * 7,
      ttl: 18 + Math.random() * 28,
      color,
    });
  }
}

function circleHitsRect(
  circle: Bullet,
  rect: Pick<Actor, 'x' | 'y' | 'w' | 'h'>,
) {
  const closestX = clamp(circle.x, rect.x, rect.x + rect.w);
  const closestY = clamp(circle.y, rect.y, rect.y + rect.h);
  return (
    (circle.x - closestX) ** 2 + (circle.y - closestY) ** 2 < circle.radius ** 2
  );
}

function rectsOverlap(
  a: Pick<Actor, 'x' | 'y' | 'w' | 'h'>,
  b: Pick<Actor, 'x' | 'y' | 'w' | 'h'>,
) {
  return (
    a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
