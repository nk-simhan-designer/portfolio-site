import React from "react";
import { motion } from "motion/react";

interface AboutProps {
  onLearnMore: () => void;
}

export const About = ({ onLearnMore }: AboutProps) => {
  const skills = [
    "HTML5 Semantic Markup", "CSS3 Flexbox/Grid", "JavaScript ES6+",
    "React.js & Ecosystem", "Tailwind CSS", "Responsive Design"
  ];

  return (
    <section id="about" className="py-32 bg-section-darker relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Animated Background Gradients */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 -right-20 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Intro & Skills */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Thoroughly <span className="text-gradient">Obsessed</span> with the Web.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                As a dedicated frontend developer, I don't just write code; I craft digital experiences. My foundation is built on a deep understanding of the core web technologies: HTML, CSS, and JavaScript.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                I believe that a great website should be fast, accessible to everyone, and pixel-perfect across all devices.
              </p>
              <div className="pt-4">
                <button onClick={onLearnMore} className="btn-primary">
                  Learn More About Me
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {skills.map((skill, index) => (
                <div key={index} className="glass p-6 rounded-2xl hover:bg-white/10 transition-all group">
                  <div className="w-2 h-2 rounded-full bg-brand-secondary mb-4 group-hover:scale-150 transition-transform" />
                  <div className="text-sm font-bold tracking-tight text-slate-300">{skill}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
