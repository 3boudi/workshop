import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Hourglass } from 'lucide-react';

interface ProgramSectionProps {
  onNotifyClick?: () => void;
}

export const ProgramSection: React.FC<ProgramSectionProps> = () => {
  return (
    <section
      id="program"
      className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-10 overflow-hidden bg-white scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-0">
        <svg
          className="hidden sm:block absolute top-1/4 -left-12 w-72 md:w-96 h-auto opacity-40"
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 50 C 90 70, 190 140, 240 220 C 290 300, 260 350, 160 380 C 80 400, 20 380, 0 350 Z"
            fill="#76FF03"
            opacity="0.6"
          />
        </svg>

        <div className="hidden sm:block absolute top-14 right-12 opacity-25">
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-forest" />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-surface border-2 border-forest text-forest-darkest text-xs font-black shadow-brutal-sm mb-4">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-gdgc-blue" />
              <span className="w-2 h-2 rounded-full bg-gdgc-red" />
              <span className="w-2 h-2 rounded-full bg-gdgc-yellow" />
              <span className="w-2 h-2 rounded-full bg-gdgc-green" />
            </div>
            <span>GDGC Univ. Batna 2 · Workshop Program</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-forest-darkest tracking-tight">
              Workshop Program
            </h2>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-neon text-forest-darkest font-black text-xs sm:text-sm border-2 border-forest shadow-brutal-sm">
              <Hourglass className="w-3.5 h-3.5" />
              <span>COMING SOON</span>
            </span>
          </div>
        </motion.div>

        {/* Empty Placeholder State — Replace with module schedule when finalized */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl mx-auto min-h-[180px] sm:min-h-[220px] rounded-3xl border-2 sm:border-3 border-dashed border-forest/35 bg-forest-surface/85 flex flex-col items-center justify-center text-center px-6 py-10 sm:py-14 relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-2xl bg-white border-2 border-forest shadow-brutal-sm flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-forest" />
          </div>
          <p className="font-sans font-black text-lg sm:text-xl text-forest-darkest mb-1">
            Coming Soon
          </p>
          <p className="text-xs sm:text-sm text-muted font-semibold max-w-md">
            The full workshop schedule and modules will be published here soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
