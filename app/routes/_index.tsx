import {type MetaFunction} from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    {title: 'Kasi First | AI CV Builder for Android'},
    {
      name: 'description',
      content:
        'Kasi First is a mobile-first CV builder inspired by vibe.cv and tailored for Android users.',
    },
  ];
};

const templates = [
  {name: 'Metro Pro', tone: 'Clean and recruiter-friendly', rating: '4.9'},
  {
    name: 'Creator Bold',
    tone: 'Great for portfolios and media roles',
    rating: '4.8',
  },
  {name: 'Tech ATS+', tone: 'Optimized for ATS scans', rating: '5.0'},
];

const jobs = [
  {
    title: 'Customer Success Manager',
    company: 'NovaPay',
    match: '92% match',
    salary: '$80k - $100k',
  },
  {
    title: 'Junior Android Developer',
    company: 'Blue Orbit Labs',
    match: '88% match',
    salary: '$70k - $90k',
  },
];

export default function HomePage() {
  return (
    <main className="kasi-app">
      <section className="kasi-phone-shell">
        <header className="kasi-hero">
          <div className="kasi-brandmark" aria-hidden>
            <span className="kasi-crown">♛</span>
            <span className="kasi-wordmark">KASI FIRST.</span>
          </div>
          <p className="kasi-tagline">Your AI-powered CV studio for Android.</p>
          <button className="kasi-primary">Start Free CV</button>
        </header>

        <section className="kasi-card">
          <h2>Build your CV in 3 steps</h2>
          <ol>
            <li>Paste your experience or upload a current CV.</li>
            <li>Pick a template and tone.</li>
            <li>Download PDF or share as a smart link.</li>
          </ol>
        </section>

        <section className="kasi-card">
          <h2>Template picks</h2>
          <div className="kasi-template-grid">
            {templates.map((template) => (
              <article key={template.name} className="kasi-template-item">
                <h3>{template.name}</h3>
                <p>{template.tone}</p>
                <small>{template.rating} ★</small>
              </article>
            ))}
          </div>
        </section>

        <section className="kasi-card">
          <h2>AI job matching</h2>
          <div className="kasi-job-list">
            {jobs.map((job) => (
              <article key={job.title} className="kasi-job-item">
                <div>
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                </div>
                <div>
                  <strong>{job.match}</strong>
                  <p>{job.salary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="kasi-card kasi-download-card">
          <h2>Ready for Android launch</h2>
          <p>
            This UI is mobile-first and can be wrapped with Capacitor for a Play
            Store build.
          </p>
          <button className="kasi-primary">Export APK Setup Guide</button>
        </section>

        <nav className="kasi-bottom-nav" aria-label="Main">
          <span>Home</span>
          <span>Templates</span>
          <span>Jobs</span>
          <span>Profile</span>
        </nav>
      </section>
    </main>
  );
}
