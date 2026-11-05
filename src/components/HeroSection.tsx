import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BackgroundDecorations } from './BackgroundDecorations';
import { StickerGrid } from './StickerGrid';
import { DeveloperIllustration } from './DeveloperIllustration';
import { StickerItem } from '../data/stickersData';
import { 
  X, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

interface HeroSectionProps {
  speed: number;
  isAnimated: boolean;
  onJoinClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ speed, isAnimated, onJoinClick }) => {
  const [selectedSticker, setSelectedSticker] = useState<StickerItem | null>(null);

  // Common checklist content
  const checklistContent = (
    <>
      <div className="flex items-center gap-2.5">
        <span className="w-5 h-5 rounded-full bg-neon text-forest-darkest flex items-center justify-center font-black text-xs flex-shrink-0 border border-forest">
          ✓
        </span>
        <span className="text-[14px] sm:text-[15px] text-[#0b1f0b] font-bold">
          GDGC Batna 2 for CS students
        </span>
      </div>
      <div className="flex items-center gap-2.5">
        <span className="w-5 h-5 rounded-full bg-neon text-forest-darkest flex items-center justify-center font-black text-xs flex-shrink-0 border border-forest">
          ✓
        </span>
        <span className="text-[14px] sm:text-[15px] text-[#0b1f0b] font-bold">
          Live starter repos provided
        </span>
      </div>
    </>
  );

  return (
    <section 
      id="home" 
      className="relative w-full flex flex-col items-center justify-center overflow-hidden px-5 sm:px-6 lg:px-10 pt-3 pb-8 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20"
    >
      {/* 1. Decorative Background Layer (Clean & minimalist on mobile, full on desktop) */}
      <BackgroundDecorations />

      {/* 2. Main Hero Content Container (Single clean column on mobile <= 768px, 2-column grid on desktop > 768px) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-6 lg:gap-10 items-center">
        
        {/* ============================================================= */}
        {/* LEFT COLUMN: TITLE, SUBTITLE, BUTTONS & DESKTOP CHECKLIST     */}
        {/* ============================================================= */}
        <motion.div 
          className="w-full md:col-span-5 flex flex-col items-start text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05,
              },
            },
          }}
        >
          
          {/* 1. Top Badge: "GDGC Univ. Batna 2 · Spring 2026" */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: -12 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 25 } },
            }}
            className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-forest-surface border-2 border-forest text-forest-darkest text-xs font-black shadow-brutal-sm mb-3 cursor-default select-none max-w-full"
          >
            <span className="leading-tight">GDGC Univ. Batna 2 · Spring 2026</span>
          </motion.div>

          {/* Presenter Club Subtitle (DESKTOP ONLY - duplicate removed on mobile) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -6 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            }}
            className="hidden md:flex items-center gap-2 mb-3"
          >
            <img src="/assets/gdgc-logo.png" alt="GDGC Univ. Batna 2" className="w-5 h-5 object-contain" />
            <span className="text-xs font-black text-forest-darkest uppercase tracking-wide">
              GDGC · Batna 2
            </span>
          </motion.div>

          {/* 2. Main Headline: "Beyond the Code" */}
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 350, damping: 26 } },
            }}
            className="font-sans font-black text-[clamp(2.2rem,10vw,3rem)] md:text-[clamp(2.5rem,4vw,3.75rem)] tracking-tight text-forest-darkest leading-[1.08] mb-3 sm:mb-4 select-none text-left w-full"
          >
            Beyond the{' '}
            <span className="relative inline-block text-forest-darkest">
              <span className="relative z-10">Code</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-3 sm:h-5 bg-neon -z-0 transform -rotate-1 rounded-sm origin-left" 
              />
            </span>
          </motion.h1>

          {/* 3. Sub-headline: full text visible, high contrast #0b1f0b, 15-16px, line-height 1.5 */}
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
            }}
            className="font-sans font-semibold text-[15px] sm:text-base md:text-lg text-[#0b1f0b] w-full max-w-xl leading-[1.5] mb-5 sm:mb-8 text-left"
          >
            Turn university programming into working software you can share and deploy. Learn how AI coding agents, cloud databases, and modern frontends fit together.
          </motion.p>

          {/* 4. Action Buttons: Full width & stacked on mobile, min-h 48px, 12-16px gap */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
            }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              onClick={onJoinClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-forest text-white font-black text-sm sm:text-base border-2 border-neon shadow-brutal hover:shadow-brutal-hover hover:bg-forest-mid transition-all cursor-pointer min-h-[48px]"
            >
              <span>Join Live Workshop</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              href="#program"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-forest-darkest font-black text-sm sm:text-base border-2 border-forest shadow-brutal-sm hover:shadow-brutal hover:bg-forest-surface transition-all min-h-[48px]"
            >
              <span>View Program</span>
            </motion.a>
          </motion.div>

          {/* DESKTOP CHECKLIST (> 768px) */}
          <div className="hidden md:flex flex-col gap-2 pt-1">
            {checklistContent}
          </div>

        </motion.div>

        {/* ============================================================= */}
        {/* RIGHT COLUMN: STICKERS (3x2) + ILLUSTRATION + MOBILE CHECKLIST */}
        {/* ============================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:col-span-7 flex flex-col items-center justify-center"
        >
          {/* 5. Tech Stickers: Neat 3x2 Grid, ~80-90px, even gaps, fully inside screen */}
          <div className="w-full flex flex-col items-center mb-2 sm:mb-6">
            <StickerGrid
              columns={3}
              size="sm"
              isAnimated={isAnimated}
              onSelectSticker={(sticker) => setSelectedSticker(sticker)}
            />
          </div>

          {/* 6. Illustration: Centered below stickers, width 100%, max-w-320px on mobile */}
          <div className="w-full max-w-[280px] xs:max-w-[320px] md:max-w-2xl mx-auto my-4 sm:my-6">
            <DeveloperIllustration
              speed={speed}
              isAnimated={isAnimated}
            />
          </div>

          {/* 7. MOBILE CHECKLIST (<= 768px): Below illustration, clean dark text */}
          <div className="md:hidden flex flex-col gap-2.5 w-full mt-3 sm:mt-4">
            {checklistContent}
          </div>
        </motion.div>

      </div>

      {/* =================================================================== */}
      {/* INTERACTIVE STICKER DETAIL POPOVER MODAL WITH ANIMATEPRESENCE       */}
      {/* =================================================================== */}
      <AnimatePresence>
        {selectedSticker && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-darkest/70 backdrop-blur-md"
            onClick={() => setSelectedSticker(null)}
          >
            <motion.div 
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 12, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 450, damping: 28 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border-4 border-forest shadow-brutal-lg overflow-hidden"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              {/* Top GDGC Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gdgc-blue via-gdgc-red via-gdgc-yellow to-gdgc-green" />

              {/* Top Close Button */}
              <button
                type="button"
                onClick={() => setSelectedSticker(null)}
                aria-label="Close details"
                className="absolute top-4 right-4 p-2 rounded-full bg-forest-surface hover:bg-forest/10 text-forest transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Badge Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 rounded-full bg-neon text-forest-darkest text-xs font-black uppercase tracking-wider border border-forest">
                  {selectedSticker.category}
                </div>
                <span className="text-xs font-bold text-muted">
                  Tilt: {selectedSticker.tiltDeg}°
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-sans font-black text-2xl text-forest-darkest mb-1 flex items-center gap-2">
                <img src={selectedSticker.iconPath} alt="" className="w-6 h-6 object-contain" />
                <span>{selectedSticker.title}</span>
              </h3>
              <p className="text-xs font-bold text-forest-mid mb-3">
                {selectedSticker.role}
              </p>

              {/* Description */}
              <p className="text-sm text-forest-darkest leading-relaxed mb-5 bg-forest-surface p-4 rounded-2xl border-2 border-forest/15">
                {selectedSticker.description}
              </p>

              {/* Features pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-neon/25 text-forest-darkest text-xs font-black border border-forest/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-forest" /> Core Tool
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-forest-surface text-forest-darkest text-xs font-bold border border-forest/15">
                  <Cpu className="w-3.5 h-3.5" /> Hands-On Lab
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-forest-surface text-forest-darkest text-xs font-bold border border-forest/15">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neon-dark" /> 100% Practical
                </span>
              </div>

              {/* Dismiss Button */}
              <button
                type="button"
                onClick={() => setSelectedSticker(null)}
                className="w-full py-3.5 rounded-2xl bg-forest text-white font-black text-sm border-2 border-neon hover:bg-forest-mid transition-all shadow-sm cursor-pointer min-h-[44px]"
              >
                Back to Workshop
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
