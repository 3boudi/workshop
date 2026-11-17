import React from 'react';
import { motion } from 'motion/react';
import { CheckSquare, Hourglass } from 'lucide-react';

export const RequirementsSection: React.FC = () => {
  return (
    <section
      id="requirements"
      className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-10 overflow-hidden bg-forest-surface/30 scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Background Decorative Rings */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-0">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full border-2 border-forest/15 opacity-60" />
        <div className="absolute -top-8 -right-8 w-60 h-60 rounded-full border-2 border-forest/15 opacity-60" />
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full border-2 border-forest/15 opacity-60" />
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
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-2 border-forest text-forest-darkest text-xs font-black shadow-brutal-sm mb-4">
            <span>GDGC Univ. Batna 2 · Prerequisites & Essentials</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-forest-darkest tracking-tight">
              Requirements to Start
            </h2>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-neon text-forest-darkest font-black text-xs sm:text-sm border-2 border-forest shadow-brutal-sm">
              <Hourglass className="w-3.5 h-3.5" />
              <span>COMING SOON</span>
            </span>
          </div>
        </motion.div>

        {/* Empty Placeholder State — Replace with prerequisites list when finalized */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl mx-auto min-h-[180px] sm:min-h-[220px] rounded-3xl border-2 sm:border-3 border-dashed border-forest/35 bg-white/95 flex flex-col items-center justify-center text-center px-6 py-10 sm:py-14 relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-2xl bg-forest-surface border-2 border-forest shadow-brutal-sm flex items-center justify-center mb-4">
            <CheckSquare className="w-6 h-6 text-forest" />
          </div>
          <p className="font-sans font-black text-lg sm:text-xl text-forest-darkest mb-1">
            Coming Soon
          </p>
          <p className="text-xs sm:text-sm text-muted font-semibold max-w-md">
            Workshop prerequisites and setup guidelines will be updated here soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
