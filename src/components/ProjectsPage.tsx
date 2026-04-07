import React from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS_DATA } from "../data/projects";
import { Project } from "../types";

interface ProjectsPageProps {
  onBack: () => void;
  onSelectProject: (p: Project) => void;
  key?: string | number;
}

export const ProjectsPage = ({ onBack, onSelectProject }: ProjectsPageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-32 pb-24 bg-section-dark min-h-screen"
    >
      <div className="container mx-auto px-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-8">
            All <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            A deep dive into the projects I've built, showcasing the challenges faced and the solutions implemented to deliver high-quality frontend experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
