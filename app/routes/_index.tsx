import type {MetaFunction} from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{title: 'Welcome to Lucid Scholar'}];
};

export default function Homepage() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-gradient {
          background: linear-gradient(135deg, #0041a2 0%, #0b57d0 100%);
        }
        body {
          min-height: max(884px, 100dvh);
        }
      `}</style>

      <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <svg className="mr-1" height="24" viewBox="0 0 24 24" width="24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-xl font-bold tracking-tighter text-primary font-headline">
              Lucid Scholar
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-label-md font-medium text-outline hover:text-primary transition-colors">
              Sign in
            </button>
          </div>
        </div>
      </header>

      <main className="min-h-screen pt-16 flex flex-col items-center">
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold tracking-widest uppercase font-headline">
                Intelligence Redefined
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-background leading-tight">
                Organize your <br />
                <span className="text-primary italic">intellectual</span>{' '}
                universe.
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                Lucid Scholar transforms chaotic research into structured
                wisdom. Experience a focused digital environment designed for
                the modern academic and creative mind.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="editorial-gradient text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group">
                Get Started
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              <button className="bg-surface-container-low text-on-surface px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-high transition-colors flex items-center justify-center">
                Explore Features
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 grid grid-cols-12 gap-4">
              <div className="col-span-12 rounded-[2rem] overflow-hidden shadow-2xl shadow-on-surface/5 bg-surface-container-lowest p-2">
                <div className="rounded-[1.5rem] overflow-hidden aspect-[4/3] bg-surface-container-low relative">
                  <img
                    alt="Productivity Workspace"
                    className="w-full h-full object-cover opacity-90 mix-blend-multiply"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDklF-GoZC-dxJRMYAzpzZfW-QKpxYRyxHSWhjb4rrGCLYXnVXb-_lwTVsN4jJuhgnOptOGor62OzEdYiG4ER7zO4k_bDo3QbUF32HMFOnNYNgAwWpVrMifHrSkq1WxK1ERjk2Wi98BUkNV5lesftzlChZGPWsL48Nb9wN_NyIOHwQUE-ql3dmuAVn3yL7I79KS7gqBk1k9fIPsMxEErILjreZtYCtLcmQdspn39FlyNIZrgRAy_ejJkXa9-tKzY7dok8mmkYEP2EN"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
