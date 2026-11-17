import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeftRight,
  Monitor,
  Globe,
  Server,
  Database,
  Lightbulb,
  Rocket,
} from 'lucide-react';
import { PopHelpType, SYSTEM_DESIGN_NODES, SystemDesignNode } from '../../data/programData';

interface ProgramPopHelpModalProps {
  popType: PopHelpType | null;
  onClose: () => void;
  onSwitchType?: (type: PopHelpType) => void;
}

const NODE_ICONS: Record<SystemDesignNode['id'], React.ReactNode> = {
  ui: <Monitor className="w-5 h-5" />,
  api: <Globe className="w-5 h-5" />,
  server: <Server className="w-5 h-5" />,
  db: <Database className="w-5 h-5" />,
};

export const ProgramPopHelpModal: React.FC<ProgramPopHelpModalProps> = ({
  popType,
  onClose,
  onSwitchType,
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<SystemDesignNode['id']>('ui');

  // Reset selected node when switching to System Design popup
  useEffect(() => {
    if (popType === 'system-design') {
      setSelectedNodeId('ui');
    }
  }, [popType]);

  // Close on Escape and lock body scroll while open
  useEffect(() => {
    if (!popType) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [popType, onClose]);

  const activeNode =
    SYSTEM_DESIGN_NODES.find((node) => node.id === selectedNodeId) ?? SYSTEM_DESIGN_NODES[0];

  return (
    <AnimatePresence>
      {popType && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-5 bg-forest-darkest/75 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={
            popType === 'intro-vision'
              ? 'Workshop Introduction and Vibe Coder Comparison'
              : 'Web Application System Design Diagram'
          }
        >
          <motion.div
            initial={{ scale: 0.94, y: 18, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 12, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
            className="relative w-full max-w-3xl bg-white rounded-3xl p-5 sm:p-8 border-4 border-forest shadow-brutal-lg max-h-[90vh] overflow-y-auto"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            {/* Top GDGC 4-Color Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gdgc-blue via-gdgc-red via-gdgc-yellow to-gdgc-green" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Pop-Help"
              className="sticky sm:absolute top-0 sm:top-4 float-right sm:float-none right-0 sm:right-4 z-20 p-2 rounded-xl bg-forest-surface hover:bg-neon text-forest-darkest border-2 border-forest transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            {popType === 'intro-vision' ? (
              <div className="pt-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon text-forest-darkest border-2 border-forest text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Step 01 · Pop-Help</span>
                </div>

                <h3 className="font-sans font-black text-2xl sm:text-3xl text-forest-darkest mb-2 pr-8">
                  Why Beyond the Code?
                </h3>
                <p className="text-sm sm:text-base text-muted font-semibold leading-relaxed mb-5">
                  The goal of this workshop is stepping outside syntax-only exercises into{' '}
                  <strong className="text-forest-darkest">
                    building real, deployable applications with AI
                  </strong>{' '}
                  — giving students a clear path to ship products and enter the tech market.
                </p>

                {/* Market Mission Callout */}
                <div className="rounded-2xl bg-forest-surface border-2 border-forest p-4 mb-5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neon border-2 border-forest flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-4 h-4 text-forest-darkest" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-forest-darkest mb-0.5">
                      From Classroom Code → Real Market Value
                    </h4>
                    <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
                      Employers and clients do not pay for isolated loops in a console. They value
                      engineers who can architect UI, database, auth, and live cloud deployments
                      into usable software.
                    </p>
                  </div>
                </div>

                {/* Comparison Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-forest">
                    Key Distinction Covered in Step 01
                  </span>
                </div>

                {/* Vibe Coder vs Programmer Who Uses AI */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Vibe Coder */}
                  <div className="rounded-2xl border-2 border-gdgc-red/40 bg-red-50/50 p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-lg bg-red-100 text-gdgc-red border border-gdgc-red/30 text-xs font-black uppercase">
                        Vibe Coder
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {[
                        'Copies AI code blindly without knowing how layers connect',
                        'Skips system design, database schemas & security rules',
                        'Gets stuck fast as soon as a bug or multi-file edit happens',
                        'Produces fragile prototypes that rarely survive real users',
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-forest-darkest/85"
                        >
                          <XCircle className="w-4 h-4 text-gdgc-red flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Programmer Who Uses AI */}
                  <div className="rounded-2xl border-3 border-forest bg-forest text-white p-4 sm:p-5 shadow-brutal-sm relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-lg bg-neon text-forest-darkest border border-white text-xs font-black uppercase">
                        Programmer Who Uses AI
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {[
                        'Understands UI, APIs, Server & DB system design first',
                        'Guides AI agents with structured architecture & design prompts',
                        'Reads diffs, tests flows & catches edge cases confidently',
                        'Uses Git, BaaS & CI/CD to ship real market-ready apps',
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-forest-surface/95"
                        >
                          <CheckCircle2 className="w-4 h-4 text-neon flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t-2 border-forest/10">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl bg-forest-surface text-forest-darkest font-black text-sm border-2 border-forest hover:bg-neon/30 transition-colors cursor-pointer min-h-[44px]"
                  >
                    Back to Timeline
                  </button>
                  {onSwitchType && (
                    <button
                      type="button"
                      onClick={() => onSwitchType('system-design')}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-forest text-neon font-black text-sm border-2 border-neon shadow-brutal-sm hover:bg-forest-mid transition-all cursor-pointer min-h-[44px]"
                    >
                      <span>Next: System Design Diagram</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="pt-1">
                {/* System Design Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon text-forest-darkest border-2 border-forest text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                  <Server className="w-3.5 h-3.5" />
                  <span>Step 02 · Pop-Diagram</span>
                </div>

                <h3 className="font-sans font-black text-2xl sm:text-3xl text-forest-darkest mb-2 pr-8">
                  Web System Design: How Everything Connects
                </h3>
                <p className="text-sm sm:text-base text-muted font-semibold leading-relaxed mb-5">
                  Every modern web application follows a simple loop between{' '}
                  <strong className="text-forest-darkest">UI, APIs, Server, and Database</strong>.
                  Tap any block below to inspect its role.
                </p>

                {/* Interactive System Design Flow Diagram */}
                <div className="rounded-3xl bg-forest-surface border-2 border-forest p-4 sm:p-6 mb-5">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-stretch relative">
                    {SYSTEM_DESIGN_NODES.map((node, index) => {
                      const isSelected = node.id === activeNode.id;
                      return (
                        <React.Fragment key={node.id}>
                          <button
                            type="button"
                            onClick={() => setSelectedNodeId(node.id)}
                            className={`relative rounded-2xl p-3.5 border-2 text-left transition-all cursor-pointer flex flex-col justify-between min-h-[104px] ${
                              isSelected
                                ? 'bg-forest text-white border-neon shadow-brutal-sm -translate-y-0.5 ring-2 ring-neon/50'
                                : 'bg-white text-forest-darkest border-forest/30 hover:border-forest hover:bg-white shadow-xs'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div
                                className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                                  isSelected
                                    ? 'bg-neon text-forest-darkest border-white'
                                    : node.accentBg
                                }`}
                              >
                                {NODE_ICONS[node.id]}
                              </div>
                              <span
                                className={`font-mono text-[10px] font-black px-1.5 py-0.5 rounded ${
                                  isSelected
                                    ? 'bg-neon/20 text-neon'
                                    : 'bg-forest-surface text-muted'
                                }`}
                              >
                                0{index + 1}
                              </span>
                            </div>

                            <div>
                              <div className="font-sans font-black text-sm leading-tight mb-0.5">
                                {node.label}
                              </div>
                              <div
                                className={`text-[11px] font-semibold ${
                                  isSelected ? 'text-forest-surface/80' : 'text-muted'
                                }`}
                              >
                                {node.shortRole}
                              </div>
                            </div>
                          </button>
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* Animated Bidirectional Connection Bar */}
                  <div className="mt-4 pt-3 border-t border-forest/15 flex flex-wrap items-center justify-center gap-2 text-[11px] font-black text-forest-darkest">
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-forest/20">
                      1. User Action in UI
                    </span>
                    <ArrowLeftRight className="w-3.5 h-3.5 text-forest" />
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-forest/20">
                      2. API Request / Response (JSON)
                    </span>
                    <ArrowLeftRight className="w-3.5 h-3.5 text-forest" />
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-forest/20">
                      3. Server Checks & DB Query
                    </span>
                  </div>
                </div>

                {/* Selected Layer Simple Explanation */}
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border-2 border-forest bg-white p-4 sm:p-5 shadow-brutal-sm mb-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl border ${activeNode.accentBg}`}>
                        {NODE_ICONS[activeNode.id]}
                      </div>
                      <div>
                        <h4 className="font-sans font-black text-lg text-forest-darkest leading-tight">
                          {activeNode.label}
                        </h4>
                        <span className="text-xs font-bold text-muted">{activeNode.shortRole}</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-neon/20 border border-forest/20 p-3 mb-3 flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-forest-darkest flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-bold text-forest-darkest">
                      {activeNode.analogy}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted font-semibold leading-relaxed mb-3">
                    {activeNode.details}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {activeNode.examples.map((ex) => (
                      <span
                        key={ex}
                        className="px-2.5 py-1 rounded-lg bg-forest-surface border border-forest/20 text-[11px] font-black text-forest-darkest"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Footer Actions */}
                <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t-2 border-forest/10">
                  {onSwitchType ? (
                    <button
                      type="button"
                      onClick={() => onSwitchType('intro-vision')}
                      className="px-4 py-2.5 rounded-xl bg-forest-surface text-forest-darkest font-black text-sm border-2 border-forest hover:bg-neon/30 transition-colors cursor-pointer min-h-[44px]"
                    >
                      ← Back: Vibe Coder vs. AI Programmer
                    </button>
                  ) : (
                    <div />
                  )}
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl bg-forest text-neon font-black text-sm border-2 border-neon shadow-brutal-sm hover:bg-forest-mid transition-all cursor-pointer min-h-[44px]"
                  >
                    Got It — Back to Timeline
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
