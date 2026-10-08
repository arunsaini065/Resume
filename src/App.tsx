import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VitalsMetrics } from './components/VitalsMetrics';
import { AppsShowcase } from './components/AppsShowcase';
import { AnrLab } from './components/AnrLab';
import { ArchitectureSection } from './components/ArchitectureSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-emerald-500/25 selection:text-emerald-400">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Main Content Stream */}
      <main>
        {/* Hero Section with Split-Screen & Phone Simulator */}
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={scrollToContact}
        />

        {/* Google Play Vitals Strip */}
        <VitalsMetrics />

        {/* Published Apps Showcase (100M+ Installs) */}
        <AppsShowcase />

        {/* Interactive ANR & Performance Debugger Lab */}
        <AnrLab />

        {/* System Architecture & Media3/AdMob Pipelines */}
        <ArchitectureSection />

        {/* Technical Skills Matrix */}
        <SkillsSection />

        {/* Career Experience & Academic Timeline */}
        <ExperienceTimeline />

        {/* Recruiter Quick Connect & Contact Details */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Full Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
