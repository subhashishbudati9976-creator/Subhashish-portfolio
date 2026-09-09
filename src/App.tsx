import React from 'react';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { AboutSection } from './sections/AboutSection';
import { AssistantSection } from './sections/AssistantSection';
import { ContactSection } from './sections/ContactSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { HeroSection } from './sections/HeroSection';
import { MindsetSection } from './sections/MindsetSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';

export const App: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <MindsetSection />
        <AssistantSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};