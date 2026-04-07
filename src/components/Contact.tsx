import React from "react";
import { motion } from "motion/react";
import { Mail, Send, Phone, MessageSquare } from "lucide-react";

interface ContactProps {
  onHire: () => void;
}

export const Contact = ({ onHire }: ContactProps) => {
  return (
    <section id="contact" className="py-32 bg-royal-aurora-reverse">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[4rem] p-8 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

          <div className="grid lg:grid-cols-2 gap-20 relative z-10 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
                  Let's Build Something <span className="text-gradient">Extraordinary</span>.
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                  I'm currently available for freelance projects and full-time opportunities. If you have a project that needs a meticulous frontend touch, let's talk about how we can bring your vision to life.
                </p>
              </div>

              <div className="space-y-8">
                {/* Email Option */}
                <div className="flex items-start gap-4 sm:gap-6 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Mail size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Email Me</div>
                    <a href="mailto:nkavitharkikasimhan2006@gmail.com" className="text-base sm:text-xl font-bold hover:text-brand-secondary transition-colors block mb-1 break-all">nkavitharkikasimhan2006@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button onClick={onHire} className="btn-primary">
                  Work with Me
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="glass p-12 rounded-[3rem] border-white/5 text-center space-y-6">
                <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Send size={40} className="text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold">Ready to start?</h3>
                <p className="text-slate-400">Fill out my contact form or reach out directly via email or social media.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
