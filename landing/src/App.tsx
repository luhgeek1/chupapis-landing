import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Coffee, Award, ArrowDown } from 'lucide-react';
import Background3D from './components/background/Background';
import MemberCard from './components/team/MemberCard';
import ProjectCard from './components/projects/ProjectCard';
import ProjectDetail from './components/projects/ProjectDetail';
import { MEMBERS, PROJECTS, STATS, TEAM_DESCRIPTION, TEAM_NAME } from './shared/constants';
import { Project } from './shared/types';

const getProjectFromUrl = (): Project | null => {
  if (typeof window === 'undefined') return null;

  const params = new URLSearchParams(window.location.search);
  const projectParam = params.get('project');

  if (!projectParam) return null;

  const projectId = Number(projectParam);
  if (Number.isNaN(projectId)) return null;

  return PROJECTS.find((project) => project.id === projectId) ?? null;
};

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(() => getProjectFromUrl());
  const [isReturning, setIsReturning] = useState(false);
  const heroVideoSrc = `${import.meta.env.BASE_URL}hero1.MOV`;

  const handleProjectSelect = useCallback((project: Project) => {
    if (selectedProject?.id === project.id) return;

    setSelectedProject(project);
    setIsReturning(false);

    const url = new URL(window.location.href);
    url.searchParams.set('project', String(project.id));
    window.history.pushState({ projectId: project.id }, '', url);
  }, [selectedProject]);

  const handleBack = useCallback(() => {
    const historyState = (window.history.state as { projectId?: number } | null);
    const canUseBrowserBack = Boolean(historyState?.projectId);
    const url = new URL(window.location.href);

    if (canUseBrowserBack) {
      window.history.back();
      return;
    }

    if (url.searchParams.has('project')) {
      url.searchParams.delete('project');
      window.history.replaceState(null, '', url);
    }

    setSelectedProject(null);
    setIsReturning(true);
  }, []);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const stateProjectId = event.state && typeof event.state.projectId === 'number'
        ? event.state.projectId
        : null;
      const queryParam = new URLSearchParams(window.location.search).get('project');
      const projectIdFromQuery = queryParam ? Number(queryParam) : null;
      const targetId = stateProjectId ?? projectIdFromQuery;
      const nextProject = typeof targetId === 'number'
        ? PROJECTS.find((project) => project.id === targetId) ?? null
        : null;

      if (nextProject) {
        setSelectedProject(nextProject);
        setIsReturning(false);
      } else {
        setSelectedProject(null);
        setIsReturning(true);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && selectedProject) {
        event.preventDefault();
        handleBack();
      }

      if (event.key === 'ArrowRight') {
        if (selectedProject) {
          const currentIndex = PROJECTS.findIndex((project) => project.id === selectedProject.id);
          const nextProject = PROJECTS[currentIndex + 1];

          if (nextProject) {
            event.preventDefault();
            handleProjectSelect(nextProject);
          }
        } else if (PROJECTS.length > 0) {
          event.preventDefault();
          handleProjectSelect(PROJECTS[0]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, handleBack, handleProjectSelect]);

  return (
    <div className="min-h-screen relative selection:bg-brand-accent selection:text-black">
      <Background3D />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <ProjectDetail 
              key="project-detail" 
              project={selectedProject} 
              onBack={handleBack} 
            />
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              onAnimationComplete={() => {
                if (isReturning) {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsReturning(false);
                }
              }}
              className=""
            >
              <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                  <video
                    className="w-full h-full object-cover pointer-events-none"
                    src={heroVideoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 w-full px-6"
                >
                  <div className="container mx-auto flex flex-col items-center text-center gap-6">
                    <h1 className="text-7xl md:text-9xl font-bold font-sans tracking-tighter text-white">
                      {TEAM_NAME}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-brand-muted font-mono max-w-2xl mx-auto font-light">
                      Fame hustlers
                    </p>

                    <motion.a 
                      href="#about"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 bg-white text-black border border-white px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Meet the Team <ArrowDown size={18} />
                    </motion.a>
                  </div>
                </motion.div>
              </section>

              <div className="container mx-auto px-6">
              <section id="about" className="py-24">
                  <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="grid md:grid-cols-2 gap-12 items-center mb-20"
                  >
                      <div>
                          <h2 className="text-4xl font-bold mb-6 font-sans text-white">Who We Are</h2>
                          <p className="text-lg text-brand-muted leading-relaxed border-l-2 border-white pl-6">
                              {TEAM_DESCRIPTION}
                          </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="p-6 bg-brand-surface backdrop-blur-md rounded-xl border border-brand-border text-center hover:border-white/50 transition-colors duration-300">
                              <Cpu className="mx-auto mb-3 text-white" size={28} />
                              <div className="text-3xl font-bold text-white">{STATS.totalProjects}</div>
                              <div className="text-xs text-brand-muted font-mono uppercase tracking-wider mt-1">Projects Shipped</div>
                          </div>
                          <div className="p-6 bg-brand-surface backdrop-blur-md rounded-xl border border-brand-border text-center hover:border-white/50 transition-colors duration-300">
                              <Terminal className="mx-auto mb-3 text-white" size={28} />
                              <div className="text-3xl font-bold text-white">{STATS.yearsCombined}+</div>
                              <div className="text-xs text-brand-muted font-mono uppercase tracking-wider mt-1">Years Experience</div>
                          </div>
                          <div className="col-span-2 p-6 bg-brand-surface backdrop-blur-md rounded-xl border border-brand-border text-center hover:border-white/50 transition-colors duration-300">
                              <Coffee className="mx-auto mb-3 text-white" size={28} />
                              <div className="text-3xl font-bold text-white">{STATS.coffeesConsumed}</div>
                              <div className="text-xs text-brand-muted font-mono uppercase tracking-wider mt-1">Burgers Eaten</div>
                          </div>
                      </div>
                  </motion.div>
              </section>

              <section className="py-24 border-t border-brand-border">
                  <div className="mb-20 text-center">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-white">The Builders</h2>
                      <p className="text-brand-muted font-mono">Precision in every line of code.</p>
                  </div>
                  
                  <div className="max-w-5xl mx-auto">
                      {MEMBERS.map((member, index) => (
                          <MemberCard key={member.id} member={member} index={index} />
                      ))}
                  </div>
              </section>

              <section id="projects" className="py-24 border-t border-brand-border mb-24">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                      <div>
                          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans flex items-center gap-4 text-white">
                              <Award className="text-white" size={40} /> 
                              Submitted Projects
                          </h2>
                          <p className="text-brand-muted font-mono max-w-lg">
                              A showcase of our 5 projects.
                          </p>
                      </div>
                  </div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {PROJECTS.map((project, index) => (
                          <ProjectCard 
                            key={project.id} 
                            project={project} 
                            index={index} 
                            onClick={handleProjectSelect}
                          />
                      ))}
                  </div>
              </section>

              <footer className="py-12 border-t border-brand-border text-center text-brand-muted font-mono text-xs uppercase tracking-wider">
                  <p>&copy; {new Date().getFullYear()} {TEAM_NAME}</p>
              </footer>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
