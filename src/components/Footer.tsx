import React from "react";
import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Logo } from "./Logo";

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface FooterProps {
  onViewChange: (view: 'home' | 'projects' | 'about' | 'contact' | 'hire') => void;
}

export const Footer = ({ onViewChange }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 relative bg-royal-aurora">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <button onClick={() => onViewChange('home')}>
              <Logo />
            </button>
            <p className="text-sm text-slate-500">© 2026 Simhan N K. All Rights Reserved.</p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-8">
              <button onClick={() => onViewChange('about')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">About</button>
              <button onClick={() => onViewChange('projects')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Projects</button>
              <button onClick={() => onViewChange('hire')} className="text-sm font-medium text-brand-primary hover:text-white transition-colors">Hire Me</button>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/nk-simhan-designer" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/n-kavitharkika-simhan-819967363/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://x.com/Kavitharki6506" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="X (Twitter)"><XIcon size={20} /></a>
              <a href="https://www.instagram.com/simhan.sujatha2006/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            </div>

            <button
              onClick={scrollToTop}
              className="glass p-3 rounded-full hover:bg-white/10 transition-all group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white"
            >
              Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
