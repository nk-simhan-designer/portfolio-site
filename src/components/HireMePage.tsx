import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Rocket, Zap, Shield, Heart, MessageSquare, Mail, Calendar } from "lucide-react";

interface HireMePageProps {
  onBack: () => void;
  onContact: () => void;
  key?: string;
}

export const HireMePage = ({ onBack, onContact }: HireMePageProps) => {
  const benefits = [
    {
      icon: <Zap className="text-brand-primary" size={24} />,
      title: "Fast Turnaround",
      description: "Optimized workflows and deep expertise allow for rapid development without compromising on quality."
    },
    {
      icon: <Shield className="text-brand-secondary" size={24} />,
      title: "Clean, Maintainable Code",
      description: "I write code that is easy to read, test, and scale, ensuring your project remains healthy in the long run."
    },
    {
      icon: <Rocket className="text-brand-accent" size={24} />,
      title: "Performance First",
      description: "Every pixel and every line of code is optimized for speed, accessibility, and SEO best practices."
    },
    {
      icon: <Heart className="text-brand-primary" size={24} />,
      title: "User-Centric Design",
      description: "I focus on creating intuitive interfaces that provide a seamless and enjoyable experience for your users."
    }
  ];

  const services = [
    {
      title: "Full Website Development",
      price: "Starting from $1,500",
      features: ["Custom Design", "Responsive Layout", "SEO Optimization", "Performance Tuning", "CMS Integration"]
    },
    {
      title: "Frontend Consultation",
      price: "$100 / Hour",
      features: ["Code Reviews", "Architecture Planning", "Performance Audits", "Accessibility Checks", "Tech Stack Advice"]
    },
    {
      title: "UI/UX Implementation",
      price: "Custom Quote",
      features: ["Figma to React/HTML", "Complex Animations", "Design System Building", "Component Library Creation"]
    }
  ];

  return (
    <div className="min-h-screen bg-royal-aurora pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </motion.button>

        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8"
          >
            Let's Build Your <span className="text-gradient">Next Big Idea</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            I'm currently accepting new projects and collaborations. Whether you're a startup looking to launch or an established business needing a refresh, I'm here to help.
          </motion.p>
        </div>

        {/* Why Hire Me */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 sm:p-10 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Services & Pricing */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Services & Pricing</h2>
            <p className="text-slate-400">Transparent pricing for high-quality frontend development.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-10 rounded-[3rem] border-white/5 flex flex-col h-full relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-primary/10 transition-colors" />

                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <div className="text-brand-secondary font-bold text-lg mb-8">{service.price}</div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                      <CheckCircle2 size={16} className="text-brand-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onContact}
                  className="w-full py-4 rounded-2xl glass border-white/10 font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-widest"
                >
                  Inquire Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[4rem] p-8 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10 opacity-50" />

          <div className="relative z-10 space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Ready to Start Your <span className="text-gradient">Project</span>?
              </h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                I'm excited to hear about what you're building. Let's schedule a call or send me an email to get things moving.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <button onClick={onContact} className="btn-primary flex items-center gap-2">
                <Mail size={20} /> Send an Email
              </button>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Calendar size={20} /> Book a Discovery Call
              </a>
            </div>

            <div className="pt-8 flex justify-center gap-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24h</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Global</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Availability</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
