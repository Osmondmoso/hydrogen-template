import type {MetaFunction} from '@remix-run/react';

export const meta: MetaFunction = () => [
  {title: 'KASI FIRST | AI-Powered CV Builder'},
];

const tailwindConfig = `
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#0037b0',
          secondary: '#b61722',
          tertiary: '#753000',
          'primary-container': '#1d4ed8',
          'on-primary': '#ffffff',
          'on-primary-container': '#cad3ff',
          surface: '#fbf8ff',
          'surface-container-low': '#f4f2fc',
          'surface-container': '#eeedf6',
          'surface-container-lowest': '#ffffff',
          'on-surface': '#1a1b22',
          'on-surface-variant': '#434655',
          'outline-variant': '#c4c5d7',
        },
        fontFamily: {
          headline: ['Plus Jakarta Sans'],
          body: ['Plus Jakarta Sans'],
          label: ['Plus Jakarta Sans'],
        },
      },
    },
  };
`;

function KasiFirstLogo({className = 'h-14 w-40'}: {className?: string}) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 220"
      role="img"
      aria-label="KASI FIRST logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        stroke="#ef5349"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M146 20l18 31 13-25 20 40 2-36" />
        <path d="M129 40l15 67c22-21 42-35 67-44 20-7 39-7 50 0 14 8 13 25-3 36-17 11-46 14-78 8" />
      </g>

      <text
        x="54"
        y="148"
        fontSize="68"
        fontWeight="900"
        fill="#2c5ca8"
        style={{letterSpacing: '2px'}}
      >
        KASI
      </text>

      <path
        d="M150 152c-4 8-5 13-4 18 1 6 8 9 12 6 4-3 6-8 5-13-1-4-4-8-8-11-2 2-3 3-5 6z"
        fill="#ef5349"
      />

      <text
        x="54"
        y="214"
        fontSize="68"
        fontWeight="900"
        fill="#2c5ca8"
        style={{letterSpacing: '2px'}}
      >
        FIRST
      </text>

      <circle cx="278" cy="194" r="9" fill="#e6bc53" />
    </svg>
  );
}

export default function Homepage() {
  return (
    <>
      <script src="https://cdn.tailwindcss.com?plugins=forms" />
      <script
        id="tailwind-config"
        dangerouslySetInnerHTML={{__html: tailwindConfig}}
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
      />
      <div className="bg-surface font-body text-on-surface">
        <header className="sticky top-0 z-50 border-b border-outline-variant bg-surface/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
            <KasiFirstLogo className="h-14 w-24 md:h-16 md:w-28" />
            <a
              href="/pages/cv-builder"
              className="rounded-lg bg-primary-container px-4 py-2 text-sm font-bold text-on-primary hover:opacity-90"
            >
              Create CV
            </a>
          </div>
        </header>

        <main>
          <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:px-6 md:py-20">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-black leading-tight md:text-6xl">
                Create a Professional CV in Minutes
              </h1>
              <p className="text-lg text-on-surface-variant md:text-xl">
                AI-powered CV writing built for South African job seekers. No
                design skills, no laptop, no stress.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/pages/cv-builder"
                  className="rounded-lg bg-primary-container px-7 py-4 text-center text-lg font-bold text-on-primary shadow"
                >
                  Create My CV Now
                </a>
                <a
                  href="https://wa.me/27600000000"
                  className="rounded-lg border border-outline-variant bg-white px-7 py-4 text-center text-lg font-bold text-[#25D366]"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="rounded-lg bg-surface-container p-4">
                <p className="text-sm font-semibold text-on-surface">
                  ✅ ATS-friendly templates · ✅ Download PDF instantly · ✅
                  Phone-first
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-extrabold text-primary">
                Start in 3 Steps
              </h2>
              <ol className="space-y-4 text-on-surface-variant">
                <li className="rounded-lg bg-white p-4">
                  <span className="font-bold text-on-surface">1.</span> Fill in
                  your info.
                </li>
                <li className="rounded-lg bg-white p-4">
                  <span className="font-bold text-on-surface">2.</span> AI
                  writes and formats your CV.
                </li>
                <li className="rounded-lg bg-white p-4">
                  <span className="font-bold text-on-surface">3.</span> Download
                  and apply immediately.
                </li>
              </ol>
            </div>
          </section>

          <section className="bg-surface-container-low px-4 py-14 md:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center text-3xl font-black">
                Why KASI FIRST works
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  'No CV or poor formatting that gets ignored.',
                  'No idea what to write in your experience section.',
                  'No access to expensive software or a laptop.',
                  'No interviews after many applications.',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border-l-4 border-secondary bg-white p-5 font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
            <h2 className="mb-10 text-center text-3xl font-black">
              Simple Pricing
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-outline-variant bg-white p-6 text-center">
                <h3 className="font-bold">Free Basic</h3>
                <p className="my-3 text-3xl font-black">R0</p>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>1 Basic Template</li>
                  <li>Limited AI Help</li>
                </ul>
              </div>
              <div className="rounded-lg bg-primary-container p-6 text-center text-on-primary shadow-lg">
                <p className="text-xs font-bold uppercase">Most Popular</p>
                <h3 className="mt-1 font-bold">Pro CV</h3>
                <p className="my-3 text-3xl font-black">R29 - R59</p>
                <ul className="space-y-2 text-sm">
                  <li>Full AI CV Writing</li>
                  <li>Premium Templates</li>
                  <li>Unlimited PDF Downloads</li>
                </ul>
              </div>
              <div className="rounded-lg border border-outline-variant bg-white p-6 text-center">
                <h3 className="font-bold">Expert Help</h3>
                <p className="my-3 text-3xl font-black">Custom</p>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>1-on-1 Review</li>
                  <li>Interview Coaching</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-primary px-4 py-16 text-center text-on-primary md:px-6">
            <h2 className="mx-auto max-w-3xl text-3xl font-black md:text-5xl">
              Start Now – Get Your CV Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              Join South Africans already using KASI FIRST to get
              interview-ready.
            </p>
            <a
              href="/pages/cv-builder"
              className="mt-8 inline-block rounded-lg bg-white px-10 py-4 text-lg font-bold text-primary"
            >
              Build My CV Now
            </a>
          </section>
        </main>

        <footer className="bg-surface-container-low px-4 py-10 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div>
              <KasiFirstLogo className="h-24 w-36" />
              <p className="mt-3 max-w-md text-sm text-on-surface-variant">
                © 2026 KASI FIRST. Built for South African job seekers.
              </p>
            </div>
            <div className="grid gap-2 text-sm text-on-surface-variant md:justify-end">
              <a href="/policies/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </a>
              <a
                href="/policies/terms-of-service"
                className="hover:text-primary"
              >
                Terms of Service
              </a>
              <a
                href="https://wa.me/27600000000"
                className="hover:text-primary"
              >
                WhatsApp Support
              </a>
              <a href="/pages/faq" className="hover:text-primary">
                Frequently Asked Questions
              </a>
            </div>
          </div>
        </footer>

        <a
          className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-2xl"
          href="https://wa.me/27600000000"
          aria-label="Open WhatsApp support"
        >
          WA
        </a>
      </div>
    </>
  );
}
