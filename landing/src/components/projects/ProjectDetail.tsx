import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Layers,Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../../shared/types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hasVideo = Boolean(project.videoSrc);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-12"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-brand-muted hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm uppercase tracking-wider">Back to Projects</span>
        </button>

        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-sans text-white mb-6"
          >
            {project.title}
          </motion.h1>
          
          <div className="flex flex-wrap gap-4 items-center text-brand-muted font-mono text-sm">
             {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 border border-brand-border rounded-full">
                   #{tag}
                </span>
             ))}
             <span className="w-1 h-1 bg-brand-muted rounded-full mx-2"></span>
             <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                Live Demo <ExternalLink size={14} />
             </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
           <div className="lg:col-span-5 space-y-8">
              <div className="p-6 bg-brand-surface border border-brand-border rounded-xl">
                 <h3 className="text-xl font-bold text-white mb-4 font-sans">Project Overview</h3>
                 <p className="text-lg text-brand-muted leading-relaxed">
                    {project.longDescription}
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-brand-surface border border-brand-border rounded-xl">
                 <div className="flex items-center gap-2 text-brand-muted mb-2">
                       <Calendar size={16} />
                       <span className="text-xs font-mono uppercase">Timeline</span>
                    </div>
                    <span className="text-white font-bold">{project.timeline}</span>
                 </div>
                 <a
                   href={project.githubUrl}
                   target="_blank"
                   rel="noreferrer"
                   className="relative p-4 bg-brand-surface border border-brand-border rounded-xl overflow-hidden group hover:border-brand-accent hover:-translate-y-0.5 transition duration-300"
                 >
                    <span className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-brand-accent/0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                    <ArrowUpRight size={16} className="absolute top-3 right-3 text-brand-muted group-hover:text-brand-accent transition-colors" />
                    <div className="flex items-center gap-3">
                       <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white">
                          <Github size={24} />
                       </div>
                       <div className="flex flex-col gap-1">
                          <span className="text-xs font-mono uppercase tracking-wider text-brand-muted">GitHub</span>
                          <span className="text-lg font-bold text-white leading-tight">Repo</span>
                       </div>
                    </div>
                 </a>
              </div>
           </div>

           <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="w-full aspect-video bg-brand-surface border border-brand-border rounded-xl overflow-hidden relative group">
                 {hasVideo ? (
                   <>
                     <video
                       key={project.videoSrc}
                       src={project.videoSrc}
                       autoPlay
                       loop
                       muted
                       controls
                       playsInline
                       className="w-full h-full object-cover"
                     />
                     <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded text-xs text-white font-mono">
                        Demo Video
                     </div>
                   </>
                 ) : (
                   <>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <Layers size={64} className="text-brand-muted/20 group-hover:text-brand-muted/40 transition-colors" />
                     </div>
                     <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded text-xs text-brand-muted font-mono">
                        Main Interface View
                     </div>
                   </>
                 )}
              </div>

              <div className="w-full md:w-2/3 ml-auto aspect-[21/9] bg-brand-surface border border-brand-border rounded-xl overflow-hidden relative group">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Layers size={48} className="text-brand-muted/20 group-hover:text-brand-muted/40 transition-colors" />
                 </div>
                 <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded text-xs text-brand-muted font-mono">

                 </div>
                 {/* <img src="" className="w-full h-full object-cover" /> */}
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
