import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Calendar, Clock, Laptop, Shield } from 'lucide-react';

interface JoinWorkshopModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinWorkshopModal: React.FC<JoinWorkshopModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: 'University of Batna 2',
    year: '1st Year CS',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-darkest/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.93, y: 18, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 450, damping: 28 }}
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-10 border-4 border-forest shadow-brutal-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top 4-Color Google Developer Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gdgc-blue via-gdgc-red via-gdgc-yellow to-gdgc-green" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-forest-surface hover:bg-forest/15 text-forest transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                {/* Header with GDGC Univ. Batna 2 Logo */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white p-1 border-2 border-forest shadow-xs flex-shrink-0">
                    <img src="/assets/gdgc-logo.png" alt="GDGC" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                      <span className="text-[11px] font-black text-forest uppercase tracking-wider">
                        GDGC Univ. Batna 2 · Free Workshop
                      </span>
                    </div>
                    <div className="text-[10px] font-bold text-muted">
                      Google Developer Groups on Campus · Batna 2
                    </div>
                  </div>
                </div>

                <h3 className="font-sans font-black text-2xl sm:text-3xl text-forest-darkest mb-1.5">
                  Join "Beyond the Code"
                </h3>
                <p className="text-xs sm:text-sm text-muted font-medium mb-5">
                  Hands-on workshop organized by GDGC Univ. Batna 2. Turn algorithmic programming into deployed web applications with AI, React, and Supabase.
                </p>

                {/* Quick Workshop Info Badges */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-forest-surface border border-forest/15 text-xs font-bold text-forest-darkest">
                    <Clock className="w-4 h-4 text-forest" />
                    <span>2.5 Hours (150 min)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-forest-surface border border-forest/15 text-xs font-bold text-forest-darkest">
                    <Laptop className="w-4 h-4 text-neon-dark" />
                    <span>Online & Live Hands-On</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-forest-darkest mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Amina Benali"
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-forest bg-forest-surface text-forest-darkest text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-neon"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-forest-darkest mb-1">
                      Student / University Email
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="amina@univ-batna2.dz"
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-forest bg-forest-surface text-forest-darkest text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-neon"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-forest-darkest mb-1">
                        University / Department
                      </label>
                      <input
                        type="text"
                        value={formData.university}
                        onChange={e => setFormData({ ...formData, university: e.target.value })}
                        placeholder="University of Batna 2"
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-forest bg-forest-surface text-forest-darkest text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-neon"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-forest-darkest mb-1">
                        Study Year
                      </label>
                      <select
                        value={formData.year}
                        onChange={e => setFormData({ ...formData, year: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border-2 border-forest bg-forest-surface text-forest-darkest text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-neon"
                      >
                        <option>1st Year CS (L1)</option>
                        <option>2nd Year CS (L2)</option>
                        <option>3rd Year CS (L3)</option>
                        <option>Master CS (M1/M2)</option>
                        <option>Self-Taught / Other</option>
                      </select>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-forest text-neon font-black text-sm border-2 border-neon shadow-brutal hover:shadow-brutal-hover hover:bg-forest-mid transition-all flex items-center justify-center gap-2 mt-6 cursor-pointer"
                  >
                    <span>Confirm Free GDGC Registration</span>
                  </motion.button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-3xl bg-white border-2 border-forest flex items-center justify-center mx-auto mb-4 shadow-brutal-sm p-2">
                  <img src="/assets/gdgc-logo.png" alt="GDGC Logo" className="w-full h-full object-contain" />
                </div>

                <h3 className="font-sans font-black text-2xl sm:text-3xl text-forest-darkest mb-2">
                  You're Registered with GDGC Batna 2!
                </h3>

                <p className="text-xs sm:text-sm text-muted font-semibold max-w-sm mx-auto mb-6">
                  Seat confirmed for <strong>{formData.name || 'Developer'}</strong>. A calendar invitation and pre-workshop setup checklist have been sent to <strong>{formData.email}</strong>.
                </p>

                <div className="p-4 rounded-2xl bg-forest-surface border border-forest/15 text-xs text-forest-darkest font-bold mb-6 text-left space-y-1.5">
                  <p className="flex items-center gap-1.5 text-gdgc-blue">
                    <span>✓</span> GDGC Univ. Batna 2 Discord & Community access
                  </p>
                  <p className="flex items-center gap-1.5 text-gdgc-green">
                    <span>✓</span> Free starter repository & code templates
                  </p>
                  <p className="flex items-center gap-1.5 text-gdgc-red">
                    <span>✓</span> Verified certificate eligibility upon completion
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="w-full py-3 rounded-2xl bg-forest text-white font-black text-xs sm:text-sm border-2 border-neon hover:bg-forest-mid transition-all shadow-sm cursor-pointer"
                >
                  Back to Workshop Dashboard
                </motion.button>
              </div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
