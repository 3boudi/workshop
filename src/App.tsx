import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SupervisorSection } from './components/sections/SupervisorSection';
import { ProgramSection } from './components/sections/ProgramSection';
import { RequirementsSection } from './components/sections/RequirementsSection';
import { RegistrationSection } from './components/sections/RegistrationSection';
import { FooterBackground } from './components/background/FooterBackground';
import { JoinWorkshopModal } from './components/modals/JoinWorkshopModal';
import { Terminal, Laptop, Code2, Heart } from 'lucide-react';

export const App: React.FC = () => {
  const [speed, setSpeed] = useState<number>(1);
  const [isAnimated, setIsAnimated] = useState<boolean>(true);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState<boolean>(false);

  // Smart CPU preservation: automatically pause animations when the user minimizes or switches tabs
  useEffect(() => {
    let wasAnimatedBeforeTabHidden = isAnimated;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        wasAnimatedBeforeTabHidden = isAnimated;
        setIsAnimated(false);
      } else {
        if (wasAnimatedBeforeTabHidden) {
          setIsAnimated(true);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isAnimated]);

  // Keyboard shortcuts: Space toggles motion, 1-4 adjusts speed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        setIsAnimated((prev) => !prev);
      } else if (e.key === '1') {
        setSpeed(1);
      } else if (e.key === '2') {
        setSpeed(1.5);
      } else if (e.key === '3') {
        setSpeed(2);
      } else if (e.key === '4') {
        setSpeed(3);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-forest-darkest flex flex-col justify-between overflow-x-hidden selection:bg-neon selection:text-forest-darkest">
      
      {/* 1. TOP BAR with Workshop Header & LiquidNavbar */}
      <Navbar onJoinClick={() => setIsJoinModalOpen(true)} />

      {/* 2. MAIN WORKSHOP SECTIONS (with top padding for 60-64px fixed navbar) */}
      <main className="flex-1 flex flex-col items-center pt-16 lg:pt-20">
        {/* Section 1: Home / Hero Section */}
        <HeroSection
          speed={speed}
          isAnimated={isAnimated}
          onJoinClick={() => setIsJoinModalOpen(true)}
        />

        {/* Section 2: Supervisor (HALITIM AMIN AI ENGINEER) */}
        <SupervisorSection />

        {/* Section 3: Program (IS COMING SOON) */}
        <ProgramSection onNotifyClick={() => setIsJoinModalOpen(true)} />

        {/* Section 4: Requirement to Start (COMING SOON) */}
        <RequirementsSection />

        {/* Section 5: Registration (COMING SOON) */}
        <RegistrationSection onRegisterClick={() => setIsJoinModalOpen(true)} />
      </main>

      {/* 3. WORKSHOP FOOTER WITH GDGC UNIV. BATNA 2 BRANDING */}
      <footer className="relative z-20 w-full border-t-2 border-forest bg-forest-surface text-forest-darkest overflow-hidden">
        {/* Signature GDGC 4-Color Brand Ribbon */}
        <div className="h-1.5 w-full bg-gradient-to-r from-gdgc-blue via-gdgc-red via-gdgc-yellow to-gdgc-green" />

        {/* Decorative Background Layer */}
        <FooterBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold text-muted">
          
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white border-2 border-forest p-1 shadow-sm flex items-center justify-center flex-shrink-0">
              <img src="/assets/gdgc-logo.png" alt="GDGC Univ. Batna 2" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-black text-forest-darkest text-base block">
                Beyond the Code · GDGC Univ. Batna 2
              </span>
              <span className="text-xs text-muted font-medium">
                Google Developer Groups on Campus · University of Batna 2 (Mostefa Ben Boulaïd)
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="px-2.5 py-1 rounded-full bg-white border border-forest/15 shadow-xs text-[11px] font-black text-forest-darkest">
              GDGC Batna 2
            </div>
            <span className="flex items-center gap-1.5 text-forest font-bold">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" /> Free Registration
            </span>
            <span>•</span>
            <span>Lead: Halitim Amin (AI Engineer)</span>
          </div>

        </div>
      </footer>

      {/* 4. MODALS */}
      <JoinWorkshopModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

    </div>
  );
};

export default App;
