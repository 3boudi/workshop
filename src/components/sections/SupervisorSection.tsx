import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  GraduationCap 
} from 'lucide-react';

// Crisp vector icons for social platforms
const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface SupervisorSectionProps {
  imagePath?: string;
}

export const SupervisorSection: React.FC<SupervisorSectionProps> = ({
  imagePath = '/assets/superviser.png'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileActive, setIsMobileActive] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // IntersectionObserver for entrance animation and auto-color on mobile when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // On touch devices without hover, activate full color when scrolled into view
          if (window.matchMedia('(hover: none)').matches) {
            setIsMobileActive(true);
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleTouchToggle = () => {
    setIsMobileActive((prev) => !prev);
  };

  const isColorActive = isHovered || isMobileActive;

  return (
    <section 
      ref={sectionRef}
      id="supervisor" 
      className="supervisor-section relative w-full py-12 sm:py-18 lg:py-24 px-5 sm:px-6 lg:px-12 bg-white text-forest-darkest overflow-hidden selection:bg-neon selection:text-forest-darkest scroll-mt-16 sm:scroll-mt-20"
      style={{
        // CSS Variables for instant customization
        ['--supervisor-accent' as any]: '#76FF03',
        ['--supervisor-dark' as any]: '#062B16',
        ['--supervisor-surface' as any]: '#F8FFF4',
        ['--supervisor-border' as any]: '#062B16',
        ['--supervisor-text' as any]: '#07190D',
        ['--supervisor-muted' as any]: '#4A6354',
      }}
    >
      {/* Background Subtle Accent Geometry */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-0 opacity-40">
        <div className="absolute -top-20 -right-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-neon/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-forest/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div 
          className={`flex flex-col items-center text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* GDGC 4-Color Category Tag */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border-2 border-forest text-forest-darkest text-xs font-black shadow-brutal-sm mb-3">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gdgc-blue" />
              <span className="w-1.5 h-1.5 rounded-full bg-gdgc-red" />
              <span className="w-1.5 h-1.5 rounded-full bg-gdgc-yellow" />
              <span className="w-1.5 h-1.5 rounded-full bg-gdgc-green" />
            </div>
            <span>GDGC Univ. Batna 2 · Faculty & Mentor</span>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-forest-darkest tracking-tight mb-2 sm:mb-3">
            Supervisor
          </h2>

          <p className="text-muted text-xs sm:text-base max-w-xl font-semibold leading-relaxed px-2">
            Directly guiding and mentoring students of University of Batna 2 through modern AI engineering and production architecture.
          </p>
        </div>

        {/* Responsive Layout: Single Clean Column on Mobile (<= 768px), 2-Column Side-by-Side on Desktop (> 768px) */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* COLUMN 1: 3D Pop-Out Image inside Decorative Arch         */}
          {/* ========================================================= */}
          <div 
            className={`w-full md:col-span-5 flex justify-center transition-all duration-700 delay-150 ease-out ${
              isInView ? 'opacity-100 translate-y-0 md:translate-x-0' : 'opacity-0 translate-y-6 md:-translate-x-6'
            }`}
          >
            <div 
              className="supervisor-card-wrapper relative flex items-end justify-center w-full max-w-[270px] xs:max-w-[300px] sm:max-w-[340px] md:max-w-[380px] h-[340px] xs:h-[380px] sm:h-[430px] md:h-[480px] cursor-pointer select-none group mx-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleTouchToggle}
              role="button"
              tabIndex={0}
              aria-label="Toggle Supervisor image color"
            >
              {/* Decorative Arch Shape Behind Person */}
              <div 
                className={`absolute bottom-0 w-[86%] sm:w-[88%] h-[82%] sm:h-[84%] rounded-t-[130px] xs:rounded-t-[150px] sm:rounded-t-[170px] md:rounded-t-[180px] rounded-b-3xl border-3 md:border-4 border-forest transition-all duration-500 ease-out overflow-hidden ${
                  isColorActive 
                    ? 'shadow-[0_16px_36px_rgba(118,255,3,0.38)] -translate-y-1' 
                    : 'shadow-brutal'
                }`}
                style={{
                  background: 'linear-gradient(180deg, rgba(6, 43, 22, 0.96) 0%, rgba(14, 56, 30, 0.98) 55%, rgba(6, 43, 22, 1) 100%)',
                }}
              >
                {/* Glowing Top Arch Ring */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-24 sm:h-28 rounded-t-[130px] xs:rounded-t-[150px] sm:rounded-t-[170px] md:rounded-t-[180px] bg-gradient-to-b from-neon/30 via-neon/10 to-transparent transition-opacity duration-500 ${
                    isColorActive ? 'opacity-100' : 'opacity-40'
                  }`}
                />

                {/* Subtle Radial Grid Lines */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#76FF03_1px,transparent_1px)] [background-size:14px_14px] sm:[background-size:16px_16px]" />

                {/* Subtle Google 4-Color Arc at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gdgc-blue via-gdgc-red via-gdgc-yellow to-gdgc-green" />
              </div>

              {/* 3D Pop-Out Image (Head & hair slightly overflow the top of the arch) */}
              <img 
                src={imagePath} 
                alt="HALITIM AMIN - AI Engineer" 
                className={`relative z-10 w-auto h-full max-h-[340px] xs:max-h-[380px] sm:max-h-[430px] md:max-h-[480px] object-contain object-bottom pointer-events-none transition-all duration-500 ease-out transform-gpu origin-bottom ${
                  isColorActive 
                    ? 'grayscale-0 scale-[1.05] drop-shadow-[0_16px_30px_rgba(118,255,3,0.4)]' 
                    : 'grayscale scale-100 drop-shadow-[0_10px_20px_rgba(6,43,22,0.35)]'
                }`}
                loading="eager"
              />

              {/* Verified Badge / Floating Pill on Image */}
              <div 
                className={`absolute bottom-3 left-3 z-20 px-2.5 py-1 rounded-xl bg-forest text-neon text-[10px] sm:text-xs font-black border-2 border-neon flex items-center gap-1.5 shadow-brutal-sm transition-transform duration-300 ${
                  isColorActive ? 'scale-105' : 'scale-100'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-neon" />
                <span>GDGC BATNA 2</span>
              </div>

              {/* Interactive Hover / Tap Hint */}
              <div className="absolute top-2 right-2 z-20 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm border border-forest/20 text-[10px] font-black text-forest-darkest shadow-xs opacity-85 group-hover:opacity-100 transition-opacity">
                {isColorActive ? 'Active' : 'Hover / Tap'}
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 2: Supervisor Information, Title, Bio & Socials    */}
          {/* ========================================================= */}
          <div 
            className={`w-full md:col-span-7 flex flex-col justify-center items-start text-left transition-all duration-700 delay-300 ease-out ${
              isInView ? 'opacity-100 translate-y-0 md:translate-x-0' : 'opacity-0 translate-y-6 md:translate-x-6'
            }`}
          >
            {/* Lead Tag & Verification */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-forest text-neon text-xs font-black tracking-wider uppercase border border-neon/30">
                <Terminal className="w-3.5 h-3.5 text-neon" />
                Lead Speaker & Instructor
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-forest/20 text-forest-darkest text-xs font-bold shadow-xs">
                <img src="/assets/gdgc-logo.png" alt="GDGC" className="w-3.5 h-3.5 object-contain" />
                Univ. Batna 2
              </span>
            </div>

            {/* Name: HALITIM AMIN in Large Bold Uppercase with Tracking */}
            <h3 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-forest-darkest tracking-wider uppercase mb-2 leading-tight w-full">
              HALITIM AMIN
            </h3>

            {/* Title: AI ENGINEER with Accent Color & Modern Badge / Line Style */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6 w-full">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl bg-neon text-forest-darkest font-black text-xs sm:text-sm md:text-base tracking-widest uppercase border-2 border-forest shadow-brutal-sm flex-shrink-0">
                <Cpu className="w-4 h-4 text-forest-darkest" />
                <span>AI ENGINEER</span>
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-forest to-transparent rounded-full" />
            </div>

            {/* Biography & Mission Statement: Full text visible, NO line-clamp, high contrast */}
            <p className="text-forest-darkest text-sm sm:text-base md:text-lg leading-relaxed font-medium mb-5 sm:mb-6 w-full">
              AI Engineer working on autonomous developer workflows, full-stack reactive architecture, and applied agentic systems. Amin designed this workshop with GDGC University of Batna 2 to teach computer science students how modern developers ship scalable, production-ready software.
            </p>

            {/* Verified Technical Pillars / Badges */}
            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 w-full">
              {[
                'Agentic Coding', 
                'Autonomous Workflows', 
                'React 19 & Full-Stack', 
                'Supabase Postgres', 
                'Cloud Deploy'
              ].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 rounded-lg bg-forest-surface text-forest-darkest text-xs sm:text-sm font-bold border-2 border-forest/20 hover:border-forest hover:bg-neon/20 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Quote Block: Full visible quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-forest-surface border-2 border-forest/20 relative mb-6 sm:mb-8 w-full">
              <p className="text-xs sm:text-sm md:text-base text-forest-darkest font-semibold italic leading-relaxed">
                "Computer science classes teach algorithmic logic. Here, we connect that logic directly to cloud databases, responsive interfaces, and live production URLs."
              </p>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-forest/10">
                <span className="text-[11px] sm:text-xs font-black text-forest-darkest tracking-wide">
                  — Halitim Amin
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-muted">
                  GDGC Batna 2
                </span>
              </div>
            </div>

            {/* Social / Contact Links (LinkedIn, GitHub, Email, GDGC Profile) */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full">
              <span className="text-xs font-black uppercase text-muted tracking-wider mr-1">
                Connect:
              </span>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border-2 border-forest text-forest-darkest text-xs sm:text-sm font-black shadow-brutal-sm hover:bg-neon hover:-translate-y-0.5 hover:shadow-brutal transition-all duration-200 group min-h-[40px]"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-forest-darkest group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border-2 border-forest text-forest-darkest text-xs sm:text-sm font-black shadow-brutal-sm hover:bg-neon hover:-translate-y-0.5 hover:shadow-brutal transition-all duration-200 group min-h-[40px]"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-forest-darkest group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>

              {/* Email */}
              <a 
                href="mailto:contact@gdgcbatna2.com" 
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border-2 border-forest text-forest-darkest text-xs sm:text-sm font-black shadow-brutal-sm hover:bg-neon hover:-translate-y-0.5 hover:shadow-brutal transition-all duration-200 group min-h-[40px]"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4 text-forest-darkest group-hover:scale-110 transition-transform" />
                <span>Email</span>
              </a>

              {/* GDGC Chapter Profile */}
              <a 
                href="https://gdg.community.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-forest text-white border-2 border-forest text-xs sm:text-sm font-black shadow-brutal-sm hover:bg-forest-mid hover:text-neon hover:-translate-y-0.5 hover:shadow-brutal transition-all duration-200 group min-h-[40px]"
                aria-label="GDGC Community"
              >
                <ExternalLink className="w-4 h-4 text-neon group-hover:scale-110 transition-transform" />
                <span>GDGC Community</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
