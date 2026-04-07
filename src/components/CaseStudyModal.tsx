import React from "react";
import { motion } from "motion/react";
import { X, Code, CheckCircle2, Globe, Github } from "lucide-react";
import { Project } from "../types";

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export const CaseStudyModal = ({ project, onClose }: CaseStudyModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-brand-bg/80 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="glass w-full max-w-5xl max-h-[90vh] rounded-[3rem] overflow-hidden flex flex-col relative"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 glass p-3 rounded-full hover:bg-white/10 transition-all"
        >
          <X size={24} />
        </button>

        <div className="overflow-y-auto custom-scrollbar">
          <div className="aspect-video w-full relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
              <div className="text-[10px] md:text-xs font-black text-brand-secondary uppercase tracking-[0.2em] mb-2">{project.category}</div>
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight">{project.title}</h2>
            </div>
          </div>

          <div className="p-6 md:p-12 space-y-8 md:space-y-12">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Code className="text-brand-primary" size={20} /> Overview
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {project.fullDescription}
                  </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                  <section>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <X className="text-brand-accent" size={18} /> Challenges
                    </h3>
                    <ul className="space-y-3">
                      {project.challenges.map((item, i) => (
                        <li key={i} className="text-slate-400 text-sm flex gap-3">
                          <span className="text-brand-accent font-bold">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="text-brand-secondary" size={18} /> Solutions
                    </h3>
                    <ul className="space-y-3">
                      {project.solutions.map((item, i) => (
                        <li key={i} className="text-slate-400 text-sm flex gap-3">
                          <span className="text-brand-secondary font-bold">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              <div className="space-y-8">
                <div className="glass p-8 rounded-3xl space-y-6">
                  <h3 className="text-xl font-bold">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold px-2 py-1 glass rounded-md text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-4">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary py-3 text-center text-sm flex items-center justify-center gap-2">
                        Live Demo <Globe size={16} />
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="glass py-3 text-center text-sm font-bold hover:bg-white/10 flex items-center justify-center gap-2">
                        Source Code <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass p-8 rounded-3xl">
                  <h3 className="text-xl font-bold mb-4">Results</h3>
                  <ul className="space-y-4">
                    {project.results.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
