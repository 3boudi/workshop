import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { LiquidNavbar, DEFAULT_WORKSHOP_ITEMS } from './LiquidNavbar';

interface NavbarProps {
  onJoinClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // 1. Lock body scroll while mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMobileMenuOpen]);

  // 2. Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // 3. Close mobile menu if window is resized above 768px (desktop breakpoint)
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // 4. Focus management: focus first link when mobile menu opens
  useEffect(() => {
    if (isMobileMenuOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href?: string) => {
    setIsMobileMenuOpen(false);
    if (href && href.startsWith('#')) {
      const targetElement = document.querySelector<HTMLElement>(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b-2 sm:border-b-3 border-forest shadow-sm transition-all h-[60px] sm:h-[64px] flex flex-col justify-between">
      {/* 1-Row Responsive Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
        
        {/* ========================================================= */}
        {/* LEFT: GDGC Club Logo (On mobile: ONLY the logo is shown)  */}
        {/* ========================================================= */}
        <a 
          href="#" 
          className="flex items-center gap-2 sm:gap-3.5 select-none group flex-shrink-0"
          aria-label="Beyond the Code - Home"
        >
          {/* Logo container: ~40-44px on mobile, responsive on desktop */}
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-xl bg-white border-2 border-forest flex items-center justify-center shadow-brutal-sm group-hover:shadow-brutal group-hover:border-neon transition-all overflow-hidden flex-shrink-0 p-1">
            <img 
              src="/assets/gdgc-logo.png" 
              alt="GDGC Logo" 
              className="h-full w-full object-contain"
            />
          </div>

          {/* Desktop-only brand text & pill (Hidden on mobile < 768px) */}
          <div className="hidden md:flex flex-col justify-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-sans font-black text-lg md:text-xl tracking-tight text-forest-darkest group-hover:text-forest transition-colors whitespace-nowrap">
                Beyond the Code
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black bg-forest-surface text-forest-darkest border border-forest/30 uppercase tracking-wider shadow-xs">
                GDGC BATNA 2
              </span>
            </div>
            <p className="text-[10px] font-bold text-muted -mt-0.5">
              Google Developer Groups on Campus · University of Batna 2
            </p>
          </div>
        </a>

        {/* ========================================================= */}
        {/* CENTER: DESKTOP ONLY LiquidNavbar Tab Bar (> 768px)       */}
        {/* ========================================================= */}
        <div className="hidden md:flex items-center justify-center flex-1 max-w-md lg:max-w-xl mx-auto">
          <LiquidNavbar
            tone="light"
            items={DEFAULT_WORKSHOP_ITEMS}
          />
        </div>

        {/* ========================================================= */}
        {/* RIGHT: DESKTOP CTA (> 768px) & MOBILE MENU BUTTON (<= 768px)*/}
        {/* ========================================================= */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Desktop 'Join Workshop' Button */}
          <button
            type="button"
            onClick={onJoinClick}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-forest text-white font-black text-xs md:text-sm border-2 border-neon shadow-brutal-sm hover:shadow-brutal hover:bg-neon hover:text-forest-darkest hover:border-forest transition-all cursor-pointer whitespace-nowrap min-h-[36px]"
          >
            <span>Join Workshop</span>
          </button>

          {/* MOBILE ONLY (<= 768px): Animated Hamburger / Close Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-forest-surface border-2 border-forest text-forest-darkest shadow-brutal-sm hover:bg-neon hover:border-forest active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-neon"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2.5]" />
              )}
            </motion.div>
          </button>
        </div>

      </div>

      {/* 100% Full-Width Solid Continuous GDGC 4-Color Divider Line */}
      <div className="h-1 w-full bg-gradient-to-r from-gdgc-blue via-gdgc-red via-gdgc-yellow to-gdgc-green border-t border-forest/20 flex-shrink-0" />

      {/* ========================================================= */}
      {/* MOBILE POPUP MENU OVERLAY (Dropdown Modal, <= 768px)       */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-forest-darkest/70 backdrop-blur-sm z-[100] md:hidden"
              aria-hidden="true"
            />

            {/* Popup Menu Dialog Panel */}
            <motion.div
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 450, damping: 28 }}
              className="fixed top-16 right-3 left-3 bg-white rounded-3xl border-3 border-forest shadow-brutal-lg z-[101] p-5 overflow-hidden md:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              {/* Top 4-Color Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gdgc-blue via-gdgc-red via-gdgc-yellow to-gdgc-green" />

              {/* Header inside Panel */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b-2 border-forest/15">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-forest-surface border border-forest/20 p-1 flex items-center justify-center">
                    <img src="/assets/gdgc-logo.png" alt="GDGC" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="font-sans font-black text-sm text-forest-darkest block leading-tight">
                      Beyond the Code
                    </span>
                    <span className="text-[10px] font-bold text-muted block">
                      GDGC Univ. Batna 2
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-xl bg-forest-surface hover:bg-neon border-2 border-forest text-forest-darkest flex items-center justify-center active:scale-95 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Navigation Links (Large 48px+ tap targets, brand styled) */}
              <nav className="flex flex-col gap-2 mb-4" aria-label="Mobile Navigation Links">
                {DEFAULT_WORKSHOP_ITEMS.map((item, idx) => (
                  <a
                    key={item.label}
                    ref={idx === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-forest-darkest font-black text-base bg-forest-surface hover:bg-neon border-2 border-forest/15 hover:border-forest shadow-xs active:scale-[0.98] transition-all min-h-[48px]"
                  >
                    <span className="text-forest flex-shrink-0">{item.icon}</span>
                    <span className="tracking-tight">{item.label}</span>
                  </a>
                ))}
              </nav>

              {/* Join Live Workshop CTA inside Menu */}
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onJoinClick?.();
                }}
                className="w-full py-3.5 px-4 rounded-2xl bg-forest text-neon font-black text-sm sm:text-base border-2 border-neon shadow-brutal-sm hover:bg-forest-mid active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
              >
                <span>Join Live Workshop</span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
