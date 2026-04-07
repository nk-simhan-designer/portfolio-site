import React from "react";
import { motion } from "motion/react";

export const Hero = ({ onExplore, onHire }: { onExplore: () => void, onHire: () => void }) => {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 bg-royal-aurora">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-bold tracking-widest text-brand-secondary uppercase mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
              Frontend Web Developer
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 md:mb-8 leading-[1.1]">
              Building <span className="text-gradient">Modern</span> <span className="hidden sm:inline"><br /></span>
              Web Interfaces.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed font-medium">
              Specializing in crafting high-performance, accessible, and visually stunning websites using <span className="text-slate-200">HTML5</span>, <span className="text-slate-200">Modern CSS</span>, and <span className="text-slate-200">JavaScript</span>.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <button onClick={onExplore} className="btn-primary">
                View Projects
              </button>
              <button onClick={onHire} className="glass px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all border-white/20">
                Get in Touch
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex-1 relative max-w-md lg:max-w-none"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative glass rounded-[4rem] p-4 border-white/20 overflow-hidden">
                <img
                  src="self.png"
                  alt="Frontend Developer Profile"
                  className="rounded-[3rem] object-cover w-full aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass p-6 rounded-3xl hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold text-xl">JS</div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Expertise</div>
                    <div className="text-sm font-bold">JavaScript ES6+</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-secondary/20 flex items-center justify-center text-brand-secondary font-bold">CSS</div>
                  <div className="text-sm font-bold">Modern CSS/SCSS</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
