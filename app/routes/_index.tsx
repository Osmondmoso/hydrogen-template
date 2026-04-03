import type {MetaFunction} from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{title: 'KASI FIRST – Professional AI CV Builder'}];
};

const pageStyles = `
:root {
  --navy: #1e2d5a;
  --blue: #2e4fa3;
  --red: #e03a2f;
  --gold: #f5a623;
  --white: #ffffff;
  --off-white: #f5f4ef;
  --dark: #0d0d0d;
  --text-muted: #6b7280;
}
.kasi-page, .kasi-page * { box-sizing: border-box; margin: 0; padding: 0; }
.kasi-page { font-family: 'Plus Jakarta Sans', sans-serif; background: var(--off-white); color: var(--dark); overflow-x: hidden; }
.kasi-page header { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 14px 24px; background: rgba(245,244,239,0.92); backdrop-filter: blur(14px); border-bottom: 1.5px solid rgba(46,79,163,0.1); }
.logo-wrap { display: flex; align-items: center; gap: 10px; }
.logo-svg { width: 44px; height: 44px; }
.brand-name { font-family: 'Bebas Neue', sans-serif; font-size: 1.6rem; letter-spacing: 0.06em; color: var(--navy); line-height: 1; }
.brand-name span { color: var(--red); }
.btn-nav { background: var(--navy); color: var(--white); font-weight: 800; font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; padding: 10px 20px; border-radius: 50px; border: none; }
.hero { min-height: 100vh; background: var(--navy); display: flex; flex-direction: column; justify-content: center; padding: 120px 24px 80px; position: relative; overflow: hidden; }
.hero-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(245,166,35,0.15); border: 1px solid rgba(245,166,35,0.4); color: var(--gold); font-size: 0.65rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; padding: 5px 12px; border-radius: 50px; width: fit-content; margin-bottom: 20px; }
.hero-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(3.5rem, 14vw, 6rem); line-height: 0.95; letter-spacing: 0.02em; color: var(--white); margin-bottom: 20px; }
.hero-title span { color: var(--red); }
.hero-sub { font-size: 1rem; color: rgba(255,255,255,0.65); max-width: 340px; line-height: 1.7; margin-bottom: 36px; }
.hero-ctas { display: flex; flex-direction: column; gap: 12px; max-width: 360px; }
.btn-primary { background: var(--red); color: var(--white); font-weight: 800; font-size: 1rem; padding: 18px 28px; border-radius: 12px; border: none; }
.btn-secondary { background: rgba(255,255,255,0.08); color: var(--white); font-weight: 700; font-size: 0.95rem; padding: 16px 28px; border-radius: 12px; border: 1.5px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; gap: 10px; }
.hero-card { margin-top: 48px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; padding: 20px; display: flex; align-items: center; gap: 16px; max-width: 360px; }
.hero-card-icon { width: 44px; height: 44px; background: var(--gold); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; }
.hero-card-text p:first-child { font-weight: 800; color: var(--white); font-size: 0.9rem; }
.hero-card-text p:last-child { font-size: 0.75rem; color: rgba(255,255,255,0.55); margin-top: 2px; }
.stats { background: var(--red); padding: 32px 24px; display: grid; grid-template-columns: repeat(3, 1fr); }
.stat-item { text-align: center; padding: 8px 4px; border-right: 1px solid rgba(255,255,255,0.2); }
.stat-item:last-child { border-right: none; }
.stat-num { font-family: 'Bebas Neue', sans-serif; font-size: 2rem; color: var(--white); line-height: 1; }
.stat-label { font-size: 0.62rem; font-weight: 700; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 4px; }
.kasi-page section { padding: 72px 24px; }
.section-pill { display: inline-block; background: var(--navy); color: var(--white); font-size: 0.62rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; padding: 5px 12px; border-radius: 50px; margin-bottom: 14px; }
.section-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(2.2rem, 9vw, 3.5rem); line-height: 0.95; letter-spacing: 0.02em; color: var(--navy); margin-bottom: 12px; }
.section-title .accent { color: var(--red); }
.section-sub { color: var(--text-muted); font-size: 0.95rem; line-height: 1.7; max-width: 360px; margin-bottom: 40px; }
.problem-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.problem-card { background: var(--white); border-radius: 16px; padding: 24px 18px; border: 1.5px solid rgba(0,0,0,0.06); }
.problem-icon { width: 40px; height: 40px; background: rgba(224,58,47,0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 14px; }
.problem-card h3 { font-weight: 800; font-size: 0.88rem; margin-bottom: 6px; color: var(--navy); }
.problem-card p { font-size: 0.75rem; color: var(--text-muted); line-height: 1.6; }
.how { background: var(--navy); }
.how .section-title { color: var(--white); }
.how .section-sub { color: rgba(255,255,255,0.55); }
.how .section-pill { background: var(--red); }
.step { display: flex; gap: 20px; padding: 28px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
.step:last-child { border-bottom: none; }
.step-num { font-family: 'Bebas Neue', sans-serif; font-size: 3.5rem; color: rgba(255,255,255,0.08); width: 56px; text-align: center; }
.step-content h4 { font-weight: 800; color: var(--white); font-size: 1rem; margin-bottom: 6px; }
.step-content p { font-size: 0.82rem; color: rgba(255,255,255,0.55); line-height: 1.65; }
.step-tag { display: inline-block; background: var(--gold); color: var(--dark); font-size: 0.6rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 8px; border-radius: 50px; margin-bottom: 8px; }
.testimonials { background: var(--white); }
.testi-scroll { display: flex; gap: 16px; overflow-x: auto; padding-bottom: 16px; }
.testi-card { min-width: 82vw; max-width: 320px; background: var(--off-white); border-radius: 20px; padding: 28px 22px; border: 1.5px solid rgba(0,0,0,0.05); }
.testi-quote { font-size: 0.88rem; line-height: 1.75; color: #374151; margin-bottom: 20px; font-style: italic; }
.testi-stars { color: var(--gold); font-size: 0.9rem; margin-bottom: 16px; }
.testi-author { display: flex; align-items: center; gap: 12px; }
.testi-avatar { width: 42px; height: 42px; border-radius: 50%; background: var(--navy); display: flex; align-items: center; justify-content: center; font-weight: 800; color: var(--white); }
.testi-name { font-weight: 800; font-size: 0.85rem; color: var(--navy); }
.testi-location { font-size: 0.72rem; color: var(--text-muted); margin-top: 2px; }
.pricing { background: var(--off-white); }
.price-cards { display: flex; flex-direction: column; gap: 16px; margin-top: 8px; }
.price-card { background: var(--white); border-radius: 20px; padding: 32px 24px; border: 2px solid rgba(0,0,0,0.07); position: relative; }
.price-card.featured { background: var(--navy); border-color: transparent; }
.featured-badge { position: absolute; top: 0; right: 24px; background: var(--red); color: var(--white); font-size: 0.6rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; padding: 5px 12px; border-radius: 0 0 10px 10px; }
.price-name { font-weight: 800; font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; }
.price-card.featured .price-name { color: rgba(255,255,255,0.6); }
.price-amount { font-family: 'Bebas Neue', sans-serif; font-size: 3.2rem; color: var(--navy); line-height: 1; margin-bottom: 4px; }
.price-card.featured .price-amount { color: var(--white); }
.price-period { font-size: 0.75rem; color: var(--text-muted); margin-bottom: 24px; }
.price-card.featured .price-period { color: rgba(255,255,255,0.5); }
.price-features { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px; }
.price-features li { display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: #374151; }
.price-card.featured .price-features li { color: rgba(255,255,255,0.85); }
.check-icon { width: 20px; height: 20px; background: rgba(46,79,163,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: var(--blue); }
.price-card.featured .check-icon { background: rgba(245,166,35,0.2); color: var(--gold); }
.btn-price { width: 100%; padding: 16px; border-radius: 12px; font-weight: 800; font-size: 0.9rem; border: none; }
.btn-price-outline { background: transparent; border: 2px solid var(--navy); color: var(--navy); }
.btn-price-solid { background: var(--red); color: var(--white); }
.final-cta { background: var(--red); text-align: center; }
.final-cta .section-title { color: var(--white); }
.final-cta .section-sub { color: rgba(255,255,255,0.7); max-width: 300px; margin: 0 auto 36px; }
.btn-cta-white { background: var(--white); color: var(--red); font-weight: 800; font-size: 1rem; padding: 18px 36px; border-radius: 12px; border: none; }
.kasi-page footer { background: var(--dark); padding: 40px 24px 32px; text-align: center; }
.footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.8rem; letter-spacing: 0.06em; color: var(--white); }
.footer-brand span { color: var(--red); }
.kasi-page footer p { font-size: 0.75rem; color: rgba(255,255,255,0.4); line-height: 1.7; max-width: 280px; margin: 0 auto 20px; }
.footer-links { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 24px; }
.footer-links a { color: rgba(255,255,255,0.45); text-decoration: none; font-size: 0.75rem; }
.footer-copy { font-size: 0.68rem; color: rgba(255,255,255,0.25) !important; }
.wa-fab { position: fixed; bottom: 24px; right: 20px; z-index: 200; display: flex; flex-direction: column; align-items: center; gap: 10px; }
.wa-btn { width: 56px; height: 56px; background: #25D366; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 24px rgba(37,211,102,0.4); text-decoration: none; }
.wa-btn svg { width: 28px; height: 28px; fill: var(--white); }
.launch-btn { width: 48px; height: 48px; background: var(--navy); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: none; }
`;

export default function Homepage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
      />
      <style dangerouslySetInnerHTML={{__html: pageStyles}} />
      <div className="kasi-page">
        <header>
          <div className="logo-wrap">
            <svg
              className="logo-svg"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 8 L30 22 L20 14 L24 30 L56 30 L60 14 L50 22 Z"
                fill="none"
                stroke="#e03a2f"
                strokeWidth="2.8"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <ellipse
                cx="40"
                cy="31"
                rx="16"
                ry="3.5"
                fill="none"
                stroke="#e03a2f"
                strokeWidth="2.5"
              />
              <path
                d="M40 48 C38 44 36 42 37 39 C38.5 41 40 40 40 40 C40 40 41.5 41 43 39 C44 42 42 44 40 48Z"
                fill="#e03a2f"
              />
              <text
                x="6"
                y="58"
                fontFamily="'Bebas Neue', sans-serif"
                fontSize="20"
                fill="#2e4fa3"
                fontWeight="700"
              >
                KASI
              </text>
              <text
                x="4"
                y="76"
                fontFamily="'Bebas Neue', sans-serif"
                fontSize="20"
                fill="#2e4fa3"
                fontWeight="700"
              >
                FIRST
              </text>
              <circle cx="71" cy="73" r="3.5" fill="#f5a623" />
            </svg>
            <span className="brand-name">
              KASI <span>FIRST</span>
            </span>
          </div>
          <button className="btn-nav">Create CV</button>
        </header>

        <section className="hero">
          <div className="hero-badge">
            ★ South Africa&apos;s #1 AI CV Builder
          </div>
          <h1 className="hero-title">
            GET THE JOB
            <br />
            YOU <span>DESERVE.</span>
          </h1>
          <p className="hero-sub">
            Our AI builds a clean, job-winning CV in under 5 minutes — right
            from your phone. No computer. No café. No stress.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary">🚀 Create My CV Now</button>
            <button className="btn-secondary">Chat on WhatsApp</button>
          </div>
          <div className="hero-card">
            <div className="hero-card-icon">✅</div>
            <div className="hero-card-text">
              <p>ATS-Friendly Design</p>
              <p>Used by 5,000+ Job Seekers</p>
            </div>
          </div>
        </section>

        <div className="stats">
          <div className="stat-item">
            <div className="stat-num">5K+</div>
            <div className="stat-label">CVs Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">78%</div>
            <div className="stat-label">Interview Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">&lt;5m</div>
            <div className="stat-label">Time to CV</div>
          </div>
        </div>

        <section className="problems">
          <div className="section-pill">The Problem</div>
          <h2 className="section-title">
            THE STRUGGLE
            <br />
            <span className="accent">IS REAL.</span>
          </h2>
          <p className="section-sub">
            Most job seekers in Mzansi face the same walls. We built Kasi First
            to break them down.
          </p>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">🚫</div>
              <h3>Applications Ignored</h3>
              <p>
                Your CV can&apos;t get past automated ATS systems used by big
                companies.
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">✏️</div>
              <h3>Blank Page Fear</h3>
              <p>
                Don&apos;t know what to write? Our AI knows exactly what
                managers want.
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">👤</div>
              <h3>No CV At All</h3>
              <p>
                A messy CV signals no effort. We fix that professionally in
                minutes.
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📵</div>
              <h3>No Internet Café</h3>
              <p>
                Don&apos;t travel or pay for slow computers. Do everything on
                your phone.
              </p>
            </div>
          </div>
        </section>

        <section className="how">
          <div className="section-pill">How It Works</div>
          <h2 className="section-title">
            THE MODERN
            <br />
            INTERNET CAFÉ.
          </h2>
          <p className="section-sub">
            Simple, smart, built for your phone. No experience needed.
          </p>
          <div className="steps">
            {[
              [
                '01',
                'AI Powered',
                'AI builds your CV for you',
                'Answer a few simple questions. Our AI writes professional descriptions — you just fill in the details.',
              ],
              [
                '02',
                'Mobile First',
                'Works on your phone',
                'No computer needed. Download your PDF CV directly to your phone storage, ready to send.',
              ],
              [
                '03',
                '5 Minutes',
                'Takes less than 5 minutes',
                'Speed is everything. Get a world-class CV in the time it takes to finish a drink.',
              ],
              [
                '04',
                'No Skills Needed',
                'If you can WhatsApp, you can do this',
                'Kasi First is designed for real people — no tech knowledge, no typing skills required.',
              ],
            ].map(([num, tag, title, desc]) => (
              <div className="step" key={num}>
                <div className="step-num">{num}</div>
                <div className="step-content">
                  <span className="step-tag">{tag}</span>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials">
          <div className="section-pill">Success Stories</div>
          <h2 className="section-title">
            REAL PEOPLE.
            <br />
            <span className="accent">REAL JOBS.</span>
          </h2>
          <p className="section-sub">
            South Africans getting hired every week with Kasi First.
          </p>
          <div className="testi-scroll">
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">
                &quot;I was struggling for 6 months. I used Kasi First on Monday
                and by Thursday I had 2 interviews.&quot;
              </p>
              <div className="testi-author">
                <div className="testi-avatar">TM</div>
                <div>
                  <p className="testi-name">Thandi M.</p>
                  <p className="testi-location">Soweto, Gauteng</p>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">
                &quot;Being able to do this on my phone saved me so much money
                and time. No internet café needed.&quot;
              </p>
              <div className="testi-author">
                <div className="testi-avatar">LS</div>
                <div>
                  <p className="testi-name">Lwazi S.</p>
                  <p className="testi-location">Umlazi, KZN</p>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">
                &quot;The AI wrote better than I ever could. My CV looks so
                professional now.&quot;
              </p>
              <div className="testi-author">
                <div className="testi-avatar">NB</div>
                <div>
                  <p className="testi-name">Nomsa B.</p>
                  <p className="testi-location">Benoni, East Rand</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing">
          <div className="section-pill">Pricing</div>
          <h2 className="section-title">
            SIMPLE.
            <br />
            <span className="accent">AFFORDABLE.</span>
          </h2>
          <p className="section-sub">
            No hidden fees. No monthly subscriptions. Just pay once and get
            hired.
          </p>
          <div className="price-cards">
            <div className="price-card">
              <div className="price-name">Free Basic</div>
              <div className="price-amount">R0</div>
              <div className="price-period">Always free</div>
              <ul className="price-features">
                <li>
                  <span className="check-icon">✓</span>Simple CV Layout
                </li>
                <li>
                  <span className="check-icon">✓</span>Mobile Download
                </li>
                <li>
                  <span className="check-icon">✓</span>1 Template
                </li>
              </ul>
              <button className="btn-price btn-price-outline">
                Choose Free
              </button>
            </div>
            <div className="price-card featured">
              <div className="featured-badge">Most Popular</div>
              <div className="price-name">Pro CV</div>
              <div className="price-amount">R29–R59</div>
              <div className="price-period">
                Once-off payment · 1 Voucher accepted
              </div>
              <ul className="price-features">
                <li>
                  <span className="check-icon">✓</span>AI-Written Descriptions
                </li>
                <li>
                  <span className="check-icon">✓</span>Premium ATS Layouts
                </li>
                <li>
                  <span className="check-icon">✓</span>WhatsApp Support
                </li>
                <li>
                  <span className="check-icon">✓</span>PDF + Word Formats
                </li>
                <li>
                  <span className="check-icon">✓</span>Unlimited Edits
                </li>
              </ul>
              <button className="btn-price btn-price-solid">
                Get Started — Pro
              </button>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <h2 className="section-title">
            START YOUR
            <br />
            CAREER NOW.
          </h2>
          <p className="section-sub">
            Join thousands of job seekers already using Kasi First to get hired.
          </p>
          <button className="btn-cta-white">🚀 Create My CV Now</button>
        </section>

        <footer>
          <div className="footer-logo">
            <div className="footer-brand">
              KASI <span>FIRST</span>
            </div>
          </div>
          <p>
            © 2024 KASI FIRST. Built for South Africa. Empowering local talent
            through AI innovation.
          </p>
          <div className="footer-links">
            <a href="/policies/privacy-policy">Privacy Policy</a>
            <a href="/policies/terms-of-service">Terms of Service</a>
            <a href="https://wa.me/27600000000">WhatsApp Support</a>
          </div>
          <p className="footer-copy">
            Ekurhuleni · Johannesburg · All of Mzansi 🇿🇦
          </p>
        </footer>

        <div className="wa-fab">
          <a
            className="wa-btn"
            href="https://wa.me/27600000000"
            aria-label="WhatsApp support"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.523 5.847L0 24l6.305-1.654A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.49-5.23-1.348l-.374-.222-3.874 1.015 1.033-3.77-.243-.387A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </a>
          <button className="launch-btn" aria-label="Launch chat">
            ➜
          </button>
        </div>
      </div>
    </>
  );
}
