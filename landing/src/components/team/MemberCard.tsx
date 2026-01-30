import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../../shared/types';
import { Code, Briefcase, User, Github, ArrowUpRight } from 'lucide-react';

interface MemberCardProps {
  member: TeamMember;
  index: number;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-24`}
    >
      <div className="w-full lg:w-1/2 relative group">
        <div className={`absolute -inset-1 bg-gradient-to-r ${member.imagePlaceholderColor} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`}></div>
        <div className="relative aspect-square rounded-2xl bg-brand-surface border border-brand-border overflow-hidden flex items-center justify-center group-hover:border-brand-accent/30 transition-colors duration-500">
            {member.imageSrc ? (
              <img src={member.imageSrc} alt={member.name} className="w-full h-full object-cover " />
            ) : (
              <div className="text-center p-6 text-brand-muted">
                  <User size={64} className="mx-auto mb-4 opacity-50" />
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-3xl font-bold text-white font-sans">{member.name}</h3>
                <p className="text-brand-muted font-mono">{member.role}</p>
            </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 space-y-6">
        <div>
          <h4 className="text-xl font-mono text-brand-accent mb-2 flex items-center gap-2">
             <Briefcase size={18} /> About
          </h4>
          <p className="text-brand-muted text-lg leading-relaxed">
            {member.bio}
          </p>
        </div>

        <div>
            <h4 className="text-xl font-mono text-brand-accent mb-3 flex items-center gap-2">
                <Code size={18} /> Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
                {member.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-sm font-mono text-gray-300 hover:bg-white hover:text-black transition-all duration-300 cursor-default">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-brand-surface border border-brand-border">
                <span className="block text-brand-muted text-xs uppercase tracking-wider">Experience</span>
                <span className="block text-2xl font-bold font-mono text-white">{member.experience}</span>
            </div>
            <a
              href={member.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="relative p-4 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-accent hover:-translate-y-0.5 transition duration-300 flex flex-col gap-1 group"
            >
              <ArrowUpRight size={16} className="absolute top-3 right-3 text-brand-muted group-hover:text-brand-accent transition-colors" />
              <span className="block text-brand-muted text-xs uppercase tracking-wider">GitHub</span>
              <span className="flex items-center gap-2 text-2xl font-bold font-mono text-white leading-tight">
                <Github size={22} className="text-white" />
                Profile
              </span>
            </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;
