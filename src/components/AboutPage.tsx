import React from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface AboutPageProps {
  onBack: () => void;
  key?: string | number;
}

export const AboutPage = ({ onBack }: AboutPageProps) => {
  const skills = [
    "HTML5 Semantic Markup", "CSS3 Flexbox/Grid", "JavaScript ES6+",
    "React.js & Ecosystem", "Tailwind CSS", "Responsive Design",
    "Web Accessibility (a11y)", "Performance Optimization",
    "Version Control (Git)", "Component-Driven Dev", "UI/UX Implementation",
    "Modern Build Tools"
  ];

  const services = [
    {
      title: "Web Development",
      description: "Building fast, responsive, and secure websites using the latest frontend technologies."
    },
    {
      title: "UI/UX Implementation",
      description: "Translating complex designs into pixel-perfect, interactive user interfaces."
    },
    {
      title: "Performance Tuning",
      description: "Optimizing web applications for maximum speed and smooth user interactions."
    }
  ];

  const experience = [
    {
      year: "2023 - Present",
      role: "Senior Frontend Developer",
      company: "TechVision Solutions",
      description: "Leading the frontend team in developing high-scale React applications and mentoring junior developers."
    },
    {
      year: "2021 - 2023",
      role: "Frontend Developer",
      company: "Creative Digital Agency",
      description: "Focused on building immersive marketing websites and interactive dashboards for global clients."
    },
    {
      year: "2019 - 2021",
      role: "Junior Web Developer",
      company: "StartUp Hub",
      description: "Gained foundational experience in HTML, CSS, and JavaScript while contributing to various MVP projects."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-32 pb-24 bg-section-darker min-h-screen"
    >
      <div className="container mx-auto px-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <div className="max-w-6xl mx-auto">
          {/* Main Intro & Skills */}
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-8">
                About <span className="text-gradient">Me</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                As a dedicated frontend developer, I don't just write code; I craft digital experiences. My foundation is built on a deep understanding of the core web technologies: HTML, CSS, and JavaScript.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                I believe that a great website should be fast, accessible to everyone, and pixel-perfect across all devices. I spend my time refining layouts, optimizing performance, and ensuring that every interaction feels natural and intuitive.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4 text-slate-200">My Philosophy</h3>
                <p className="text-slate-400 leading-relaxed italic border-l-4 border-brand-secondary pl-6">
                  "Code is a tool for communication. It should be as clear and elegant as the interface it powers."
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass p-6 rounded-2xl hover:bg-white/10 transition-all group"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-secondary mb-4 group-hover:scale-150 transition-transform" />
                  <div className="text-sm font-bold tracking-tight text-slate-300">{skill}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-40">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">What I Do</h2>
              <p className="text-slate-400">Specialized services tailored to your digital needs.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border-white/5 hover:border-white/10 transition-colors"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gradient">{service.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">My Journey</h2>
              <p className="text-slate-400">A timeline of my professional growth and experience.</p>
            </div>
            <div className="space-y-8 max-w-4xl mx-auto">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border-white/5 flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                >
                  <div className="text-brand-secondary font-bold text-base sm:text-lg whitespace-nowrap">{item.year}</div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-200">{item.role}</h3>
                    <div className="text-sm sm:text-base text-brand-primary font-medium">{item.company}</div>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
