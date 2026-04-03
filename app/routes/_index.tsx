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
          error: '#ba1a1a',
          'on-secondary-container': '#fffbff',
          secondary: '#b61722',
          'primary-fixed': '#dce1ff',
          'surface-bright': '#fbf8ff',
          'outline-variant': '#c4c5d7',
          'on-background': '#1a1b22',
          'on-surface': '#1a1b22',
          'surface-container-highest': '#e3e1eb',
          'on-secondary-fixed-variant': '#930013',
          'inverse-on-surface': '#f1f0f9',
          'on-error-container': '#93000a',
          'tertiary-container': '#9a4200',
          'surface-tint': '#2151da',
          surface: '#fbf8ff',
          'on-primary-fixed': '#001551',
          'on-surface-variant': '#434655',
          'error-container': '#ffdad6',
          'on-primary-container': '#cad3ff',
          primary: '#0037b0',
          'secondary-fixed': '#ffdad7',
          'on-secondary': '#ffffff',
          'on-tertiary-fixed': '#341100',
          'inverse-primary': '#b7c4ff',
          'surface-container-high': '#e9e7f0',
          'on-primary-fixed-variant': '#0039b5',
          'surface-dim': '#dad9e2',
          'primary-fixed-dim': '#b7c4ff',
          'inverse-surface': '#2f3037',
          'on-tertiary-fixed-variant': '#783200',
          'secondary-fixed-dim': '#ffb3ae',
          'primary-container': '#1d4ed8',
          'on-primary': '#ffffff',
          tertiary: '#753000',
          'on-secondary-fixed': '#410004',
          background: '#fbf8ff',
          'on-error': '#ffffff',
          'surface-container-low': '#f4f2fc',
          'tertiary-fixed': '#ffdbca',
          'surface-variant': '#e3e1eb',
          'on-tertiary': '#ffffff',
          outline: '#747686',
          'surface-container': '#eeedf6',
          'tertiary-fixed-dim': '#ffb690',
          'surface-container-lowest': '#ffffff',
          'on-tertiary-container': '#ffcab0',
          'secondary-container': '#da3437'
        },
        borderRadius: {
          DEFAULT: '0.125rem',
          lg: '4px',
          xl: '4px',
          full: '0.75rem'
        },
        fontFamily: {
          headline: ['Plus Jakarta Sans'],
          body: ['Plus Jakarta Sans'],
          label: ['Plus Jakarta Sans']
        }
      }
    }
  };
`;

export default function Homepage() {
  return (
    <>
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />
      <script
        id="tailwind-config"
        dangerouslySetInnerHTML={{__html: tailwindConfig}}
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            }
            body { font-family: 'Plus Jakarta Sans', sans-serif; min-height: max(884px, 100dvh); }
          `,
        }}
      />

      <div className="bg-surface text-on-surface">
        <header className="docked sticky top-0 z-50 w-full bg-[#fbf8ff] shadow-sm dark:bg-slate-950 dark:shadow-none">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <span
                  className="material-symbols-outlined text-sm leading-none text-secondary"
                  style={{fontVariationSettings: "'FILL' 1"}}
                >
                  king_bed
                </span>
                <div className="font-headline flex items-baseline text-xl font-black uppercase tracking-tighter text-[#0037b0] dark:text-blue-500">
                  KASI F
                  <span className="relative">
                    I
                    <span
                      className="material-symbols-outlined absolute -top-1 left-0 text-[10px] text-secondary"
                      style={{fontVariationSettings: "'FILL' 1"}}
                    >
                      local_fire_department
                    </span>
                  </span>
                  RST<span className="text-tertiary">.</span>
                </div>
              </div>
            </div>
            <button className="rounded-lg bg-primary-container px-4 py-2 font-label text-sm font-bold text-on-primary transition-all hover:bg-blue-700">
              Create CV
            </button>
          </div>
          <div className="h-[1px] w-full bg-[#f4f2fc] dark:bg-slate-900" />
        </header>

        <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-12 md:flex-row md:py-24">
          <div className="flex-1 space-y-8">
            <h1 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-on-surface md:text-6xl">
              Create a Professional CV in Minutes –{' '}
              <span className="text-primary">No Experience Needed</span>
            </h1>
            <p className="text-lg leading-relaxed text-on-surface-variant md:text-xl">
              Our AI helps you build a clean, job-winning CV fast. Perfect for
              first-time job seekers in South Africa.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-lg bg-primary-container px-8 py-4 text-lg font-bold text-on-primary shadow-lg transition-all hover:opacity-90">
                Create My CV Now
              </button>
              <a
                href="https://wa.me/27600000000"
                className="flex items-center justify-center gap-2 rounded-lg border border-outline-variant bg-white px-8 py-4 text-lg font-bold text-[#25D366] transition-all hover:bg-gray-50"
              >
                <span
                  className="material-symbols-outlined"
                  style={{fontVariationSettings: "'FILL' 1"}}
                >
                  chat
                </span>
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative w-full flex-1">
            <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-4 shadow-2xl">
              <img
                className="h-auto w-full rounded-lg object-cover"
                alt="Modern clean professional CV template mockup"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz7t7OgkL2TMd3W7qTnqwQnaEN0HiGPIfv9wOhifBB1I03W9iEfVYQszub_pXUrLG6alBBN7H2uoWishgqrgRvBvqL1BpCL-TIzk91AG5we0IXZs8VG4Lsesa0WD99EWNN5kVaSNR_8oYoToWxC0KTDjHea7T_hKPE-HLwYpPG3_Xsu9nCEFgTTwsLueWIz78Dw8MAbbLVUYW2Lf-SFu664i6PRi5fEcDA3JdchTHcpbaIuiyhbID9s3kFh0C1zQeTEVSDDHKpN6w"
              />
              <div className="absolute bottom-8 right-8 flex items-center gap-2 rounded-lg bg-tertiary-container px-4 py-2 font-bold text-on-tertiary shadow-xl">
                <span className="material-symbols-outlined">bolt</span> AI
                Powered
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center font-headline text-3xl font-bold">
              Struggling to Get a Job?
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                'No CV or a poorly formatted one that employers ignore.',
                'Don’t know how to describe your skills or what to write.',
                'No access to a computer or expensive office software.',
                'Applying to hundreds of jobs but never getting an interview.',
              ].map((copy, idx) => (
                <div
                  key={copy}
                  className="flex items-start gap-4 rounded-lg border-l-4 border-secondary bg-surface-container-lowest p-6 shadow-sm"
                >
                  <span className="material-symbols-outlined text-secondary">
                    {
                      [
                        'sentiment_dissatisfied',
                        'edit_off',
                        'phonelink_erase',
                        'mail_lock',
                      ][idx]
                    }
                  </span>
                  <p className="font-medium">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="mb-16 font-headline text-3xl font-bold">
            We Fix That with AI
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              [
                'psychology',
                'text-primary',
                'bg-primary/10',
                'AI builds your CV',
                'Just answer simple questions and let AI do the writing.',
              ],
              [
                'smartphone',
                'text-tertiary',
                'bg-tertiary/10',
                'Works on phone',
                'Complete your entire profile using just your mobile browser.',
              ],
              [
                'timer',
                'text-secondary',
                'bg-secondary/10',
                'Under 5 mins',
                'Go from zero to a professional PDF in record time.',
              ],
              [
                'verified_user',
                'text-primary',
                'bg-primary/10',
                'No skills needed',
                'No design or professional writing experience required.',
              ],
            ].map(([icon, textColor, bgColor, title, desc]) => (
              <div key={String(title)} className="space-y-4">
                <div
                  className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${bgColor}`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl ${textColor}`}
                  >
                    {icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-16 text-center font-headline text-3xl font-bold">
              3 Simple Steps to Your New Job
            </h2>
            <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="absolute left-0 top-1/4 -z-0 hidden h-[2px] w-full bg-tertiary-fixed-dim md:block" />
              {[
                [
                  '1',
                  'Enter details',
                  'Fill in your basic info and work history (even informal jobs).',
                ],
                [
                  '2',
                  'AI creates CV',
                  'Our AI formats and writes professional bullet points for you.',
                ],
                [
                  '3',
                  'Download & Apply',
                  'Get your PDF immediately and start applying to vacancies.',
                ],
              ].map(([step, title, desc]) => (
                <div
                  key={String(step)}
                  className="relative z-10 rounded-lg bg-surface-container-lowest p-8 text-center shadow-sm"
                >
                  <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary text-xl font-bold text-on-tertiary">
                    {step}
                  </div>
                  <h4 className="mb-4 font-bold">{title}</h4>
                  <p className="text-sm text-on-surface-variant">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <img
              className="order-2 rounded-xl shadow-lg md:order-1"
              alt="Recruiters reviewing resumes in an office"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6W1CGq9S5n0q8QYuYlAtbOxWp9nKfqJSTxuoaD3NGUnFqjKMHir2gWS-5uR-DulSh416Tux6vNpB_qWYJcjerdp1HdeXKCqmcVjlQy0hryeQp-Vob8mcgbh5_dMFciLK_0rWjAIx5zdtNovRi6wyGb2LRw1yuy7cC3CqTXQvfWLFrNobSQhEJ7EFND0BjxkE6WiNKDk_y8ITJ0R1V7x1LItrOcUC2ZFgplxDKQu12h-oX9v5LJP8024oZTuRzclatRXk0hAivDjg"
            />
            <div className="order-1 space-y-8 md:order-2">
              <h2 className="font-headline text-3xl font-bold">
                Everything You Need to Succeed
              </h2>
              <div className="space-y-6">
                {[
                  [
                    'style',
                    'Professional templates',
                    'Modern, clean designs that recruiters in SA actually love.',
                  ],
                  [
                    'robot_2',
                    'ATS-friendly',
                    'Designed to pass through automated hiring systems easily.',
                  ],
                  [
                    'picture_as_pdf',
                    'Instant PDF',
                    'Download and share your CV via WhatsApp or Email instantly.',
                  ],
                  [
                    'support_agent',
                    'WhatsApp support',
                    'Need help? Chat with our local support team anytime.',
                  ],
                ].map(([icon, title, desc]) => (
                  <div key={String(title)} className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">
                      {icon}
                    </span>
                    <div>
                      <h4 className="font-bold">{title}</h4>
                      <p className="text-on-surface-variant">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-16 text-center font-headline text-3xl font-bold">
              Success Stories from the Kasi
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                [
                  'TM',
                  'Thandi M.',
                  'Gauteng',
                  "I didn't have a computer. KASI FIRST let me do everything on my phone. I got 3 interviews in one week!",
                ],
                [
                  'JS',
                  'Jabulani S.',
                  'KZN',
                  'The AI actually knew how to describe my casual work experience to sound professional. Best R29 I ever spent.',
                ],
                [
                  'SK',
                  'Sipho K.',
                  'Western Cape',
                  "Clear, simple and very fast. I've recommended this to all my friends who are looking for work.",
                ],
              ].map(([initials, name, location, quote]) => (
                <div
                  key={String(name)}
                  className="rounded-lg border-t-4 border-tertiary bg-surface-container-lowest p-8 shadow-sm"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 font-bold text-primary">
                      {initials}
                    </div>
                    <div>
                      <h5 className="font-bold">{name}</h5>
                      <p className="text-xs text-on-surface-variant">
                        {location}
                      </p>
                    </div>
                  </div>
                  <p className="italic text-on-surface-variant">
                    &quot;{quote}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-16 text-center font-headline text-3xl font-bold">
            Simple Pricing for Everyone
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg border border-outline-variant p-8">
              <h4 className="mb-2 font-bold">Free Basic</h4>
              <div className="mb-6 text-3xl font-black">R0</div>
              <ul className="mb-8 space-y-4 text-center text-sm">
                <li>1 Basic Template</li>
                <li>Online Profile</li>
                <li>Limited AI Suggestions</li>
              </ul>
              <button className="mt-auto w-full rounded-lg border border-primary py-3 font-bold text-primary">
                Choose Basic
              </button>
            </div>
            <div className="relative flex scale-105 transform flex-col items-center overflow-hidden rounded-lg bg-primary-container p-8 text-on-primary shadow-2xl">
              <div className="absolute right-4 top-4 rounded bg-tertiary px-2 py-1 text-[10px] font-bold uppercase">
                Popular
              </div>
              <h4 className="mb-2 font-bold">Pro CV</h4>
              <div className="mb-1 text-3xl font-black">R29 - R59</div>
              <p className="mb-6 text-[10px] opacity-80">
                Depending on features
              </p>
              <ul className="mb-8 space-y-4 text-center text-sm">
                <li>All Premium Templates</li>
                <li>Full AI CV Writing</li>
                <li>Unlimited PDF Downloads</li>
                <li>Cover Letter Builder</li>
              </ul>
              <button className="mt-auto w-full rounded-lg bg-white py-3 font-bold text-primary-container">
                Upgrade to Pro
              </button>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-outline-variant p-8">
              <h4 className="mb-2 font-bold">Expert Help</h4>
              <div className="mb-6 text-3xl font-black">Custom</div>
              <ul className="mb-8 space-y-4 text-center text-sm">
                <li>1-on-1 Review</li>
                <li>Interview Coaching</li>
                <li>LinkedIn Optimization</li>
              </ul>
              <button className="mt-auto w-full rounded-lg border border-primary py-3 font-bold text-primary">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        <section className="bg-primary px-6 py-20 text-center text-on-primary">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="font-headline text-3xl font-black leading-tight md:text-5xl">
              Start Now – Get Your CV Today
            </h2>
            <p className="text-lg opacity-90">
              Don&apos;t let another job opportunity pass you by. Join 10,000+
              South Africans who built their future with KASI FIRST.
            </p>
            <button className="rounded-lg bg-white px-12 py-5 text-xl font-bold text-primary shadow-xl transition-all hover:bg-gray-100">
              Build My CV Now
            </button>
          </div>
        </section>

        <footer className="w-full bg-[#f4f2fc] px-6 py-12 dark:bg-slate-900">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-left">
            <div className="space-y-6">
              <div className="flex flex-col items-center md:items-start">
                <span
                  className="material-symbols-outlined text-sm leading-none text-secondary"
                  style={{fontVariationSettings: "'FILL' 1"}}
                >
                  king_bed
                </span>
                <div className="font-headline flex items-baseline text-lg font-bold uppercase tracking-tighter text-[#0037b0]">
                  KASI F
                  <span className="relative">
                    I
                    <span
                      className="material-symbols-outlined absolute -top-1 left-0 text-[10px] text-secondary"
                      style={{fontVariationSettings: "'FILL' 1"}}
                    >
                      local_fire_department
                    </span>
                  </span>
                  RST<span className="text-tertiary">.</span>
                </div>
              </div>
              <p className="font-body max-w-sm text-sm leading-relaxed text-[#434655] dark:text-slate-400">
                © 2024 KASI FIRST. Built with Ubuntu spirit. Empowering every
                South African with the tools to build a better future.
              </p>
              <div className="flex justify-center gap-6 text-sm font-semibold text-[#434655] dark:text-slate-400 md:justify-start">
                <a
                  className="transition-colors hover:text-primary"
                  href="/policies/privacy-policy"
                >
                  Privacy Policy
                </a>
                <a
                  className="transition-colors hover:text-primary"
                  href="/policies/terms-of-service"
                >
                  Terms of Service
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="space-y-4">
                <h5 className="font-bold text-primary">Need Help?</h5>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li className="flex items-center justify-center gap-2 md:justify-start">
                    <span className="material-symbols-outlined text-sm">
                      chat
                    </span>
                    <a
                      className="underline hover:text-primary"
                      href="https://wa.me/27600000000"
                    >
                      WhatsApp Support
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="/pages/faq"
                    >
                      Frequently Asked Questions
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-primary"
                      href="/blogs/news"
                    >
                      CV Writing Tips
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h5 className="font-bold text-primary">Heritage</h5>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>Proudly South African</li>
                  <li>Built for the Kasi</li>
                  <li>Job Seeker Community</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <a
          className="fixed bottom-8 right-8 z-[60] flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-2xl transition-transform hover:scale-110"
          href="https://wa.me/27600000000"
          aria-label="Open WhatsApp support"
        >
          <span
            className="material-symbols-outlined text-3xl"
            style={{fontVariationSettings: "'FILL' 1"}}
          >
            chat
          </span>
        </a>

        <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-2xl border-t border-[#c4c5d7]/15 bg-white/80 px-8 pb-6 pt-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] backdrop-blur-xl dark:bg-slate-900/80 md:hidden">
          <a
            className="flex items-center justify-center rounded-xl bg-[#1d4ed8] p-3 text-white shadow-lg"
            href="/"
          >
            <span className="material-symbols-outlined">home</span>
          </a>
          <a
            className="flex items-center justify-center p-3 text-[#434655] dark:text-slate-400"
            href="/pages/cv-builder"
          >
            <span className="material-symbols-outlined">description</span>
          </a>
          <a
            className="flex items-center justify-center p-3 text-[#434655] dark:text-slate-400"
            href="https://wa.me/27600000000"
          >
            <span className="material-symbols-outlined">chat</span>
          </a>
        </nav>
      </div>
    </>
  );
}
