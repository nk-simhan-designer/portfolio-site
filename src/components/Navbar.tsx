import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

interface NavbarProps {
  onViewChange: (view: 'home' | 'projects' | 'about' | 'contact' | 'hire') => void;
  currentView: string;
}

export const Navbar = ({ onViewChange, currentView }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", view: 'about' },
    { name: "Projects", href: "#projects", view: 'projects' },
    { name: "Contact", href: "#contact", view: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between ${isScrolled ? "bg-white/10" : "bg-white/5"}`}>
          <button onClick={() => onViewChange('home')}>
            <Logo />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onViewChange(link.view as any)}
                className={`text-sm font-medium transition-colors ${currentView === link.view ? "text-brand-primary" : "text-slate-300 hover:text-white"}`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => onViewChange('hire')}
              className={`glass px-5 py-2 rounded-xl text-sm font-semibold transition-all ${currentView === 'hire' ? "bg-brand-primary text-white" : "hover:bg-white/20"}`}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 mt-2 px-6"
        >
          <div className="glass rounded-2xl p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  onViewChange(link.view as any);
                  setMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-slate-300 text-left"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                onViewChange('hire');
                setMobileMenuOpen(false);
              }}
              className="text-lg font-medium text-brand-primary text-left"
            >
              Hire Me
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
