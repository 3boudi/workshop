import React from 'react';
import { motion } from 'motion/react';
import { 
  Hourglass, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Bell, 
  Users, 
  ArrowRight,
  Code2,
  CalendarCheck,
  Check
} from 'lucide-react';
import { AnimatedCounter } from '../common/AnimatedCounter';

interface RegistrationSectionProps {
  onRegisterClick?: () => void;
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({ onRegisterClick }) => {
  const perks = [
    '100% Free access for enrolled university students',
    'Live code-along with GDGC speaker Halitim Amin',
    'Full starter repository with React, Supabase & Netlify',
    'Hands-on debugging and architectural reviews during class',
    'Verified digital certificate from GDGC Univ. Batna 2',
    'Deploy a working web application to a live public URL',
  ];

  return (
    <section id="registration" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-white">
      
      {/* Background Organic Spline */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-0">
        <svg
          className="absolute -bottom-16 -right-16 w-96 md:w-[36rem] h-auto opacity-70"
          viewBox="0 0 600 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 600 50 C 510 80, 420 160, 360 250 C 300 340, 340 420, 440 460 C 500 480, 560 480, 600 450 Z"
            fill="#76FF03"
            opacity="0.8"
          />
          <circle cx="480" cy="280" r="5" fill="#FFFFFF" />
          <path d="M 520 340 L 520 358 M 511 349 L 529 349" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-surface border-2 border-forest text-forest-darkest text-xs font-black shadow-brutal-sm mb-4">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-gdgc-blue" />
              <span className="w-2 h-2 rounded-full bg-gdgc-red" />
              <span className="w-2 h-2 rounded-full bg-gdgc-yellow" />
              <span className="w-2 h-2 rounded-full bg-gdgc-green" />
            </div>
            <span>GDGC Univ. Batna 2 · Enrollment & Seat Reservations</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-forest-darkest tracking-tight">
              Workshop Registration
            </h2>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-neon text-forest-darkest font-black text-xs sm:text-sm border-2 border-forest shadow-brutal-sm animate-pulse">
              <Hourglass className="w-3.5 h-3.5" />
              <span>COMING SOON</span>
            </span>
          </div>

          <p className="text-muted text-base sm:text-lg max-w-2xl font-semibold leading-relaxed">
            Official registration portal opens shortly. Pre-register below to receive early access from <strong>GDGC Univ. Batna 2</strong> and secure your live virtual seat.
          </p>
        </motion.div>

        {/* Master Registration Card with 4-Color Google Ribbon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-4xl mx-auto bg-forest text-white rounded-3xl p-6 sm:p-12 border-4 border-neon shadow-brutal-lg relative overflow-hidden"
        >
          {/* Top 4-Color Google Developer Stripe */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gdgc-blue via-gdgc-red via-gdgc-yellow to-gdgc-green" />

          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 pt-2">
            
            {/* Left Column: Perks & Value */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-mid text-neon border border-neon/30 text-xs font-black mb-4">
                <span>Zero Tuition · <AnimatedCounter value={100} suffix="%" /> Free Educational Workshop by GDGC</span>
              </div>

              <h3 className="font-sans font-black text-2xl sm:text-4xl text-white mb-4 leading-tight">
                From University Code <br className="hidden sm:block" />
                to Shipped Applications.
              </h3>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                {perks.map((perk, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-start gap-1.5 sm:gap-2.5 text-[10px] sm:text-sm text-forest-surface/90 font-semibold"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neon flex-shrink-0 mt-0.5" />
                    <span className="leading-tight sm:leading-normal">{perk}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-xs text-forest-surface/70 font-medium">
                * Live virtual seats are limited to ensure active Q&A, interactive debugging, and mentorship by GDGC Univ. Batna 2.
              </p>
            </div>

            {/* Right Column: Pre-Registration CTA Box with GDGC Logo */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 450, damping: 25 }}
              className="w-full md:w-80 bg-white text-forest-darkest rounded-2xl p-6 border-3 border-forest shadow-brutal flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gdgc-blue via-gdgc-red via-gdgc-yellow to-gdgc-green" />

              <div className="w-14 h-14 rounded-2xl bg-white p-1 border-2 border-forest flex items-center justify-center font-black text-forest-darkest mb-2 shadow-sm">
                <img src="/assets/gdgc-logo.png" alt="GDGC" className="w-full h-full object-contain" />
              </div>

              <div className="text-[10px] font-black uppercase text-muted tracking-wider mb-1">
                GDGC Univ. Batna 2 Pass
              </div>

              <h4 className="font-sans font-black text-xl text-forest-darkest mb-1">
                Seat Pre-Reservation
              </h4>
              <p className="text-xs text-muted font-bold mb-5">
                Registration opening soon! Leave your details to get first-priority access.
              </p>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                onClick={onRegisterClick}
                className="w-full py-3.5 px-4 rounded-xl bg-forest text-neon font-black text-sm border-2 border-forest shadow-brutal-sm hover:shadow-brutal hover:bg-forest-mid transition-all flex items-center justify-center gap-2 mb-3 cursor-pointer"
              >
                <span>Pre-Register Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <span className="text-[11px] font-bold text-muted flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-forest" />
                <span>No spam · GDGC workshop updates only</span>
              </span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
