import React, { useState, useEffect } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { CustomCursor } from './components/CustomCursor';
import { CinematicIntro } from './components/CinematicIntro';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { ServicesSection } from './components/ServicesSection';
import { WhyHireMeSection } from './components/WhyHireMeSection';
import { ManifestoSection } from './components/ManifestoSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { SoundAndThemeBar } from './components/SoundAndThemeBar';
import { FooterSection } from './components/FooterSection';
import Lenis from 'lenis';

export default function App() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [activeTheme, setActiveTheme] = useState('emerald');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (!introCompleted) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [introCompleted]);

  return (
    <div className="relative min-h-screen w-full bg-[#fafbfc] text-[#0f172a] selection:bg-emerald-100 selection:text-emerald-900 font-sans overflow-x-hidden">
      <AmbientBackground activeTheme={activeTheme} />

      <CustomCursor />

      {!introCompleted ? (
        <CinematicIntro
          onIntroComplete={() => setIntroCompleted(true)}
          soundEnabled={soundEnabled}
        />
      ) : (
        <>
          <Navbar
            soundEnabled={soundEnabled}
            onToggleSound={() => setSoundEnabled(!soundEnabled)}
            activeTheme={activeTheme}
            onChangeTheme={(theme) => setActiveTheme(theme)}
            onOpenContact={() => setIsContactOpen(true)}
          />

          <main className="relative z-10">
            <HeroSection
              soundEnabled={soundEnabled}
              onOpenContact={() => setIsContactOpen(true)}
              onOpenResume={() => window.open('/resume.pdf', '_blank')}
            />

            <StorySection soundEnabled={soundEnabled} />

            <ServicesSection
              soundEnabled={soundEnabled}
              onOpenContact={() => setIsContactOpen(true)}
            />

            <WhyHireMeSection
              soundEnabled={soundEnabled}
              onOpenContact={() => setIsContactOpen(true)}
            />

            <ManifestoSection soundEnabled={soundEnabled} />

            <ProjectsSection
              soundEnabled={soundEnabled}
              onChangeTheme={(theme) => setActiveTheme(theme)}
            />

            <CapabilitiesSection soundEnabled={soundEnabled} />

            <AchievementsSection soundEnabled={soundEnabled} />

            <ContactSection soundEnabled={soundEnabled} />
          </main>

          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
            soundEnabled={soundEnabled}
          />

          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
            soundEnabled={soundEnabled}
          />

          <SoundAndThemeBar
            soundEnabled={soundEnabled}
            onToggleSound={() => setSoundEnabled(!soundEnabled)}
            activeTheme={activeTheme}
            onChangeTheme={(theme) => setActiveTheme(theme)}
          />

          <FooterSection
            soundEnabled={soundEnabled}
            onOpenContact={() => setIsContactOpen(true)}
          />
        </>
      )}
    </div>
  );
}
