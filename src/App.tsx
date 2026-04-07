import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

// --- Components ---
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { AboutPage } from "./components/AboutPage";
import { ProjectsPreview } from "./components/ProjectsPreview";
import { ProjectsPage } from "./components/ProjectsPage";
import { Contact } from "./components/Contact";
import { ContactPage } from "./components/ContactPage";
import { HireMePage } from "./components/HireMePage";
import { Footer } from "./components/Footer";
import { CaseStudyModal } from "./components/CaseStudyModal";

// --- Types ---
import { Project } from "./types";

export default function App() {
  const [view, setView] = useState<'home' | 'projects' | 'about' | 'contact' | 'hire'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen font-sans">
      <Navbar onViewChange={setView} currentView={view} />

      <main>
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero
                onExplore={() => setView('projects')}
                onHire={() => setView('hire')}
              />
              <About onLearnMore={() => setView('about')} />
              <ProjectsPreview onExplore={() => setView('projects')} onSelectProject={setSelectedProject} />
              <Contact onHire={() => setView('hire')} />
            </motion.div>
          )}
          {view === 'projects' && (
            <ProjectsPage
              key="projects"
              onBack={() => setView('home')}
              onSelectProject={setSelectedProject}
            />
          )}
          {view === 'about' && (
            <AboutPage
              key="about"
              onBack={() => setView('home')}
            />
          )}
          {view === 'contact' && (
            <ContactPage
              key="contact"
              onBack={() => setView('home')}
            />
          )}
          {view === 'hire' && (
            <HireMePage
              key="hire"
              onBack={() => setView('home')}
              onContact={() => setView('contact')}
            />
          )}
        </AnimatePresence>
      </main>

      <Footer onViewChange={setView} />

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
