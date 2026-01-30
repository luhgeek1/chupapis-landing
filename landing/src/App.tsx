import React from 'react';
import { ArrowDown, Cpu, Terminal, Coffee } from 'lucide-react';
import Background3D from './components/background/Background';
import MemberCard from './components/team/MemberCard';
import { TEAM_NAME, TEAM_DESCRIPTION, STATS, MEMBERS } from './shared/constants';

function App() {
  return (
    <div className="min-h-screen relative bg-black text-white selection:bg-brand-accent selection:text-black">
      <Background3D />

      <main className="container mx-auto px-6 py-16 space-y-24 relative z-10">
        <section id="hero" className="space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">by вайбкодер's</p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">{TEAM_NAME}</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">Fame hustlers</p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/80 transition"
          >
            Meet the team <ArrowDown size={18} />
          </a>
        </section>

        <section id="about" className="space-y-6">
          <h2 className="text-3xl font-bold">Who we are</h2>
          <p className="text-white/70 max-w-3xl leading-relaxed">{TEAM_DESCRIPTION}</p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <Cpu className="mx-auto mb-2 text-white" size={24} />
              <div className="text-2xl font-bold text-white">{STATS.totalProjects}</div>
              <div className="text-xs uppercase tracking-wider text-white/60">Projects shipped</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <Terminal className="mx-auto mb-2 text-white" size={24} />
              <div className="text-2xl font-bold text-white">{STATS.yearsCombined}+</div>
              <div className="text-xs uppercase tracking-wider text-white/60">Years experience</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <Coffee className="mx-auto mb-2 text-white" size={24} />
              <div className="text-2xl font-bold text-white">{STATS.coffeesConsumed}</div>
              <div className="text-xs uppercase tracking-wider text-white/60">Burgers eaten</div>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-brand-border">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-white">The Builders</h2>
            <p className="text-brand-muted font-mono">Precision in every line of code.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {MEMBERS.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
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
