import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../shared/types';
import { ArrowRight, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={() => onClick(project)}
      className="group relative flex flex-col h-full bg-brand-surface border border-brand-border rounded-xl overflow-hidden hover:border-brand-accent transition-colors duration-300 cursor-pointer"
    >
      <div className={`h-48 w-full ${project.imagePlaceholderColor} relative flex items-center justify-center overflow-hidden border-b border-brand-border`}>


         <Layers className="text-white/20 group-hover:text-white/80 group-hover:scale-105 transition-all duration-500" size={48} />
         <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 font-sans group-hover:text-brand-accent transition-colors">
            {project.title}
        </h3>
        <p className="text-brand-muted text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
            {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-brand-muted border border-brand-border px-2 py-1 rounded">
                    #{tag}
                </span>
            ))}
        </div>

        <div 
            className="mt-auto inline-flex items-center justify-between w-full px-4 py-3 bg-white/5 hover:bg-brand-accent hover:text-black border border-brand-border hover:border-brand-accent rounded-lg transition-all duration-300 group-hover:translate-x-1"
        >
            <span className="text-sm font-bold">View Details</span>
            <ArrowRight size={16} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
