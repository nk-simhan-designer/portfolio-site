import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS_DATA } from "../data/projects";
import { Project } from "../types";

interface ProjectsPreviewProps {
  onExplore: () => void;
  onSelectProject: (p: Project) => void;
}

export const ProjectsPreview = ({ onExplore, onSelectProject }: ProjectsPreviewProps) => {
  return (
    <section id="projects" className="py-32 bg-section-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Animated Background Gradients */}
      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tight">Selected Work</h2>
          <p className="text-slate-400 text-lg">
            A showcase of projects where I've pushed the boundaries of frontend technologies to create seamless user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {PROJECTS_DATA.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />
          ))}
        </div>

        <div className="flex justify-center">
          <button onClick={onExplore} className="glass px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-2">
            View All Projects <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
