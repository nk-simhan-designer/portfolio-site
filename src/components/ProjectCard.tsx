import React from "react";
import { motion } from "motion/react";
import { Github, Globe, ExternalLink } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onSelect: (p: Project) => void;
  key?: string | number;
}

export const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="glass rounded-[2.5rem] overflow-hidden border-white/5 group-hover:border-white/20 group-hover:bg-white/[0.04] transition-all duration-500 h-full flex flex-col group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="aspect-[16/10] overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="glass px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2">
              View Case Study <ExternalLink size={14} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <a
              href={project.githubUrl}
              onClick={(e) => e.stopPropagation()}
              className="glass p-2 rounded-lg hover:bg-brand-primary transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href={project.liveUrl}
              onClick={(e) => e.stopPropagation()}
              className="glass p-2 rounded-lg hover:bg-brand-secondary transition-colors"
            >
              <Globe size={16} />
            </a>
          </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <div className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.2em] mb-3">{project.category}</div>
          <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-secondary transition-colors">{project.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold px-3 py-1.5 glass rounded-lg text-slate-300 border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
