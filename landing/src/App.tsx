import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-6 py-16 space-y-24">
        <section id="hero" className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            by вайбкодер's
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            чупапис
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            кто мы
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/80 transition"
          >
            team
          </a>
        </section>

        <section id="about" className="space-y-3">
          <h2 className="text-3xl font-bold">Who we are</h2>
          <p className="text-white/70 max-w-3xl">
          </p>
        </section>

        <section id="projects" className="space-y-3">
          <h2 className="text-3xl font-bold">Submitted projects</h2>
          <p className="text-white/70">
          </p>
        </section>

        <footer className="pt-10 border-t border-white/10 text-xs uppercase tracking-widest text-white/60">
          © {new Date().getFullYear()} 
        </footer>
      </main>
    </div>
  );
}

export default App;
