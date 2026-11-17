import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import {
  Sparkles,
  Network,
  AlertTriangle,
  Wrench,
  Layers,
  Rocket,
  Compass,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Globe,
  Server,
  Database,
  Radio,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import {
  PROGRAM_FILTERS,
  PROGRAM_STEPS,
  PopHelpType,
  ProgramPhaseFilter,
  ProgramStepItem,
} from '../../data/programData';
import { ProgramPopHelpModal } from '../modals/ProgramPopHelpModal';

interface ProgramSectionProps {
  onNotifyClick?: () => void;
}

const STEP_ICONS: Record<number, React.ReactNode> = {
  1: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />,
  2: <Network className="w-4 h-4 sm:w-5 sm:h-5" />,
  3: <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />,
  4: <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />,
  5: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />,
  6: <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />,
  7: <Compass className="w-4 h-4 sm:w-5 sm:h-5" />,
};

export const ProgramSection: React.FC<ProgramSectionProps> = ({ onNotifyClick }) => {
  const [activeFilter, setActiveFilter] = useState<ProgramPhaseFilter>('all');
  const [activeStepNum, setActiveStepNum] = useState<number>(1);
  const [activePopHelp, setActivePopHelp] = useState<PopHelpType | null>(null);

  const timelineRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Scroll-driven timeline spine beam progress
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 65%'],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    restDelta: 0.001,
  });

  const filteredSteps =
    activeFilter === 'all'
      ? PROGRAM_STEPS
      : PROGRAM_STEPS.filter((step) => step.filterGroup === activeFilter);

  const handleStepJump = (step: ProgramStepItem) => {
    setActiveStepNum(step.number);
    if (activeFilter !== 'all' && activeFilter !== step.filterGroup) {
      setActiveFilter('all');
      requestAnimationFrame(() => {
        setTimeout(() => {
          stepRefs.current[step.number]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }, 60);
      });
      return;
    }

    stepRefs.current[step.number]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <section
      id="program"
      className="relative w-full py-14 sm:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-white scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Subtle Ambient Background Geometry */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-0">
        <svg
          className="hidden sm:block absolute top-24 -left-16 w-80 md:w-96 h-auto opacity-35"
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 50 C 90 70, 190 140, 240 220 C 290 300, 260 350, 160 380 C 80 400, 20 380, 0 350 Z"
            fill="#76FF03"
            opacity="0.55"
          />
        </svg>

        <div className="hidden md:block absolute top-20 right-14 opacity-20">
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-forest" />
            ))}
          </div>
        </div>

        <div className="hidden md:block absolute bottom-36 -right-24 w-80 h-80 rounded-full bg-neon/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* ============================================================ */}
        {/* SECTION HEADER                                               */}
        {/* ============================================================ */}
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
            <span>GDGC Univ. Batna 2 · 7-Phase Interactive Syllabus</span>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-forest-darkest tracking-tight mb-3 sm:mb-4">
            Workshop{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Program</span>
              <span className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-3 sm:h-4 bg-neon -z-0 -rotate-1 rounded-sm" />
            </span>
          </h2>

          <p className="text-muted text-sm sm:text-base md:text-lg max-w-2xl font-semibold leading-relaxed px-2">
            From mindset and web system design to real tools, full-stack building, testing, and your
            next steps after the workshop. Tap any <strong className="text-forest-darkest">Pop-Help</strong>{' '}
            pill inside Steps 01 &amp; 02 for interactive breakdowns.
          </p>
        </motion.div>

        {/* ============================================================ */}
        {/* INTERACTIVE CONTROL BAR: PHASE FILTERS & STEP JUMP RAIL      */}
        {/* ============================================================ */}
        <div className="bg-forest-surface/75 rounded-3xl border-2 sm:border-3 border-forest p-3.5 sm:p-5 shadow-brutal-sm mb-10 sm:mb-14">
          {/* Phase Filter Pills */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 mb-4 pb-4 border-b border-forest/15">
            {PROGRAM_FILTERS.map((filter) => {
              const isSelected = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2.5 sm:px-3.5 py-2 rounded-xl text-[11px] sm:text-sm font-black border-2 transition-all cursor-pointer min-h-[40px] text-center ${
                    isSelected
                      ? 'bg-forest text-neon border-forest shadow-brutal-sm -translate-y-0.5'
                      : 'bg-white text-forest-darkest border-forest/20 hover:border-forest hover:bg-neon/20'
                  }`}
                >
                  <span className="leading-tight">{filter.label}</span>
                  <span
                    className={`font-mono text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-md flex-shrink-0 ${
                      isSelected ? 'bg-neon text-forest-darkest' : 'bg-forest-surface text-muted'
                    }`}
                  >
                    {filter.range}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 7-Step Quick Jump Stepper */}
          <div className="flex items-center justify-start sm:flex-wrap sm:justify-center gap-2 overflow-x-auto sm:overflow-visible pb-1 sm:pb-0 no-scrollbar">
            {PROGRAM_STEPS.map((step) => {
              const isCurrent = activeStepNum === step.number;
              const isInFilter =
                activeFilter === 'all' || activeFilter === step.filterGroup;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => handleStepJump(step)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border-2 text-left transition-all cursor-pointer flex-shrink-0 min-h-[40px] ${
                    isCurrent
                      ? 'bg-neon text-forest-darkest border-forest shadow-brutal-sm'
                      : isInFilter
                      ? 'bg-white text-forest-darkest border-forest/25 hover:border-forest'
                      : 'bg-white/60 text-muted border-forest/15 opacity-70 hover:opacity-100'
                  }`}
                >
                  <span
                    className={`font-mono font-black text-xs px-1.5 py-0.5 rounded ${
                      isCurrent
                        ? 'bg-forest text-neon'
                        : 'bg-forest-surface text-forest-darkest'
                    }`}
                  >
                    {step.step}
                  </span>
                  <span className="text-xs font-black whitespace-nowrap max-w-[130px] truncate">
                    {step.category}
                  </span>
                  {step.popHelp && (
                    <span
                      className="w-2 h-2 rounded-full bg-gdgc-blue flex-shrink-0"
                      title="Has interactive Pop-Help"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* MAIN VERTICAL TIMELINE SPINE & STEP CARDS                    */}
        {/* ============================================================ */}
        <div ref={timelineRef} className="relative pl-12 sm:pl-20 space-y-7 sm:space-y-10">
          {/* Static Spine Track */}
          <div
            className="absolute left-[21px] sm:left-7 top-4 bottom-4 w-1 sm:w-1.5 bg-forest/15 rounded-full"
            aria-hidden="true"
          />

          {/* Scroll-Animated Neon Spine Fill */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-[21px] sm:left-7 top-4 bottom-4 w-1 sm:w-1.5 bg-gradient-to-b from-neon via-gdgc-green to-forest rounded-full shadow-[0_0_12px_rgba(118,245,18,0.65)]"
            aria-hidden="true"
          />

          {filteredSteps.map((step, index) => {
            const isActive = activeStepNum === step.number;
            const isFeatured = Boolean(step.featured);

            return (
              <motion.div
                key={step.step}
                ref={(el) => {
                  stepRefs.current[step.number] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.05, 0.2),
                }}
                onMouseEnter={() => setActiveStepNum(step.number)}
                onClick={() => setActiveStepNum(step.number)}
                className="relative group"
              >
                {/* ================================================== */}
                {/* TIMELINE MILESTONE NODE ON SPINE                   */}
                {/* ================================================== */}
                <div
                  className={`absolute -left-12 sm:-left-20 top-5 sm:top-6 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl border-3 flex flex-col items-center justify-center transition-all duration-300 z-10 ${
                    isFeatured || isActive
                      ? 'bg-neon text-forest-darkest border-forest shadow-brutal-sm scale-105 ring-4 ring-neon/30'
                      : 'bg-white text-forest-darkest border-forest shadow-xs group-hover:bg-forest-surface'
                  }`}
                >
                  <div className="leading-none">{STEP_ICONS[step.number]}</div>
                  <span className="font-mono font-black text-[9px] sm:text-[10px] mt-0.5 leading-none">
                    {step.step}
                  </span>
                </div>

                {/* Horizontal Connector Arm from Spine Node to Card */}
                <div
                  className={`hidden sm:block absolute -left-6 top-12 w-6 h-0.5 transition-colors duration-300 ${
                    isActive || isFeatured ? 'bg-forest' : 'bg-forest/25 group-hover:bg-forest'
                  }`}
                  aria-hidden="true"
                />

                {/* ================================================== */}
                {/* TIMELINE STEP CARD                                 */}
                {/* ================================================== */}
                <div
                  className={`rounded-3xl border-3 p-5 sm:p-7 transition-all duration-300 relative overflow-hidden ${
                    isFeatured
                      ? 'bg-forest text-white border-neon shadow-brutal-lg'
                      : isActive
                      ? 'bg-white text-forest-darkest border-forest shadow-brutal'
                      : 'bg-forest-surface/45 text-forest-darkest border-forest/35 hover:border-forest hover:bg-white shadow-brutal-sm'
                  }`}
                >
                  {/* Featured top GDGC 4-color stripe */}
                  {isFeatured && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gdgc-blue via-gdgc-red via-gdgc-yellow to-gdgc-green" />
                  )}

                  {/* Top Row: Step Number, Category Badge & Pop-Help Trigger */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`font-mono font-black text-xs px-2.5 py-1 rounded-lg border ${
                          isFeatured
                            ? 'bg-neon text-forest-darkest border-white'
                            : 'bg-forest text-neon border-forest'
                        }`}
                      >
                        STEP {step.step}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-lg border text-[11px] font-black uppercase tracking-wide ${
                          isFeatured
                            ? 'bg-forest-mid text-neon border-neon/40'
                            : step.badgeColor
                        }`}
                      >
                        {step.category}
                      </span>
                    </div>

                    {/* Interactive Pop-Help / Pop-Comment Trigger */}
                    {step.popHelp && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePopHelp(step.popHelp!.type);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neon text-forest-darkest font-black text-xs border-2 border-forest shadow-brutal-sm hover:bg-neon-light hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer min-h-[36px]"
                      >
                        <HelpCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{step.popHelp.badgeLabel}</span>
                      </button>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className={`font-sans font-black text-xl sm:text-2xl leading-snug mb-1 ${
                      isFeatured ? 'text-white' : 'text-forest-darkest'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm font-bold mb-3 ${
                      isFeatured ? 'text-neon' : 'text-forest-leaf'
                    }`}
                  >
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm font-medium leading-relaxed mb-4 ${
                      isFeatured ? 'text-forest-surface/90' : 'text-muted'
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* ------------------------------------------------ */}
                  {/* STEP HIGHLIGHTS LIST (Steps 1, 2, 3)             */}
                  {/* ------------------------------------------------ */}
                  {step.highlights && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                      {step.highlights.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-forest/15 text-xs font-bold text-forest-darkest shadow-xs"
                        >
                          <CheckCircle2 className="w-4 h-4 text-neon-dark flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* ------------------------------------------------ */}
                  {/* INLINE PREVIEW / POP-HELP CALLOUT BAR            */}
                  {/* ------------------------------------------------ */}
                  {step.popHelp && (
                    <div className="mt-2 rounded-2xl bg-forest-surface border-2 border-dashed border-forest/40 p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0">
                        {step.popHelp.type === 'intro-vision' ? (
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <span className="px-2 py-1 rounded-lg bg-red-100 text-gdgc-red text-[10px] font-black border border-gdgc-red/30">
                              Vibe Coder
                            </span>
                            <span className="text-xs font-black text-muted">vs</span>
                            <span className="px-2 py-1 rounded-lg bg-forest text-neon text-[10px] font-black border border-forest">
                              AI Programmer
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 flex-shrink-0 text-forest-darkest">
                            <span className="p-1.5 rounded-lg bg-white border border-forest/25" title="Frontend UI">
                              <Monitor className="w-3.5 h-3.5 text-gdgc-blue" />
                            </span>
                            <span className="text-[10px] font-black text-muted">⇄</span>
                            <span className="p-1.5 rounded-lg bg-white border border-forest/25" title="APIs">
                              <Globe className="w-3.5 h-3.5 text-amber-600" />
                            </span>
                            <span className="text-[10px] font-black text-muted">⇄</span>
                            <span className="p-1.5 rounded-lg bg-white border border-forest/25" title="Server + DB">
                              <Server className="w-3.5 h-3.5 text-gdgc-green" />
                            </span>
                            <span className="p-1.5 rounded-lg bg-white border border-forest/25" title="Database">
                              <Database className="w-3.5 h-3.5 text-gdgc-red" />
                            </span>
                          </div>
                        )}
                        <span className="text-xs font-bold text-forest-darkest leading-snug break-words">
                          {step.popHelp.hintText}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePopHelp(step.popHelp!.type);
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-2 rounded-xl bg-forest text-neon font-black text-xs border border-forest hover:bg-forest-mid transition-colors flex-shrink-0 cursor-pointer min-h-[40px]"
                      >
                        <span className="text-center">{step.popHelp.buttonLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                      </button>
                    </div>
                  )}

                  {/* ------------------------------------------------ */}
                  {/* STEP 04: CORE TOOLCHAIN GRID                     */}
                  {/* ------------------------------------------------ */}
                  {step.tools && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 mt-1">
                      {step.tools.map((tool) => (
                        <div
                          key={tool.id}
                          className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2.5 p-3 rounded-2xl bg-white border-2 border-forest/20 hover:border-forest shadow-xs transition-all"
                        >
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-forest-surface border border-forest/20 p-1.5 flex items-center justify-center flex-shrink-0 relative">
                            <img
                              src={tool.iconPath}
                              alt={tool.name}
                              className="w-full h-full object-contain"
                            />
                            {tool.id === 'vscode' && (
                              <span
                                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-neon border border-forest flex items-center justify-center"
                                title="Includes Live Server Extension"
                              >
                                <Radio className="w-2.5 h-2.5 text-forest-darkest" />
                              </span>
                            )}
                          </div>
                          <div className="min-w-0 w-full">
                            <div className="font-sans font-black text-xs sm:text-sm text-forest-darkest leading-tight">
                              {tool.name}
                            </div>
                            <div className="text-[10px] sm:text-[11px] font-semibold text-muted leading-tight mt-0.5">
                              {tool.subtitle}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* ------------------------------------------------ */}
                  {/* STEP 05: ROLE MAPPING + NESTED 5.1 CHECKPOINT    */}
                  {/* ------------------------------------------------ */}
                  {step.architectureMap && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-4">
                      {step.architectureMap.map((row) => (
                        <div
                          key={row.layer}
                          className="rounded-2xl bg-white border-2 border-forest/20 p-3 flex flex-col justify-between"
                        >
                          <div>
                            <span className="inline-block text-[10px] font-black uppercase tracking-wider text-forest bg-neon/30 px-2 py-0.5 rounded mb-1.5">
                              {row.layer}
                            </span>
                            <div className="font-sans font-black text-xs sm:text-sm text-forest-darkest mb-1">
                              {row.tool}
                            </div>
                          </div>
                          <p className="text-[11px] font-semibold text-muted leading-snug">
                            {row.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.checkpoint && (
                    <div className="relative pl-4 sm:pl-6 mt-2 border-l-3 border-dashed border-forest">
                      <div className="rounded-2xl bg-neon/20 border-2 border-forest p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <span className="px-2.5 py-1 rounded-xl bg-forest text-neon font-mono font-black text-xs border border-forest flex-shrink-0">
                            {step.checkpoint.code}
                          </span>
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-0.5">
                              <h4 className="font-sans font-black text-sm sm:text-base text-forest-darkest">
                                {step.checkpoint.title}
                              </h4>
                              {step.checkpoint.tag && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white border border-forest/25 text-[10px] font-black text-forest">
                                  <ShieldCheck className="w-3 h-3" />
                                  <span>{step.checkpoint.tag}</span>
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-forest-darkest/80 font-semibold leading-relaxed">
                              {step.checkpoint.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ------------------------------------------------ */}
                  {/* STEP 06: REAL PROJECT BUILD SUB-TIMELINE (6.1–6.4) */}
                  {/* ------------------------------------------------ */}
                  {step.subSteps && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      {step.subSteps.map((sub) => (
                        <div
                          key={sub.code}
                          className="rounded-2xl bg-white/10 backdrop-blur-xs border-2 border-neon/40 hover:border-neon p-4 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="font-mono font-black text-xs px-2.5 py-0.5 rounded-lg bg-neon text-forest-darkest">
                                {sub.code}
                              </span>
                              {sub.tag && (
                                <span className="text-[10px] font-black uppercase tracking-wider text-neon/90 bg-forest-darkest/50 px-2 py-0.5 rounded border border-neon/25">
                                  {sub.tag}
                                </span>
                              )}
                            </div>
                            <h4 className="font-sans font-black text-sm sm:text-base text-white mb-1 leading-snug">
                              {sub.title}
                            </h4>
                            <p className="text-xs text-forest-surface/85 font-medium leading-relaxed">
                              {sub.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* ------------------------------------------------ */}
                  {/* STEP 07: POST-WORKSHOP FOCUS PILLARS             */}
                  {/* ------------------------------------------------ */}
                  {step.nextStepPillars && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 mt-1">
                      {step.nextStepPillars.map((pillar, i) => (
                        <div
                          key={pillar.title}
                          className="rounded-2xl bg-white border-2 border-forest/20 p-3.5 shadow-xs"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="w-6 h-6 rounded-lg bg-neon border border-forest flex items-center justify-center font-mono font-black text-xs text-forest-darkest flex-shrink-0">
                              {i + 1}
                            </span>
                            <h4 className="font-sans font-black text-xs sm:text-sm text-forest-darkest leading-tight">
                              {pillar.title}
                            </h4>
                          </div>
                          <p className="text-[11px] sm:text-xs font-semibold text-muted leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* TIMELINE FOOTER CTA BAR                                      */}
        {/* ============================================================ */}
        {onNotifyClick && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="mt-10 sm:mt-14 rounded-3xl bg-forest-surface border-3 border-forest p-5 sm:p-7 shadow-brutal-sm flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3.5 text-center sm:text-left flex-col sm:flex-row">
              <div className="w-11 h-11 rounded-2xl bg-neon border-2 border-forest flex items-center justify-center flex-shrink-0 shadow-xs">
                <Terminal className="w-5 h-5 text-forest-darkest" />
              </div>
              <div>
                <h3 className="font-sans font-black text-base sm:text-lg text-forest-darkest">
                  Ready to Walk Through All 7 Phases Live?
                </h3>
                <p className="text-xs sm:text-sm text-muted font-semibold">
                  Reserve your seat to get starter templates, system design slides &amp; live mentorship.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onNotifyClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-forest text-neon font-black text-sm border-2 border-neon shadow-brutal-sm hover:bg-forest-mid hover:-translate-y-0.5 transition-all cursor-pointer flex-shrink-0 min-h-[44px]"
            >
              <span>Join Live Workshop</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Interactive Pop-Help / Pop-Diagram Modal for Step 01 & Step 02 */}
      <ProgramPopHelpModal
        popType={activePopHelp}
        onClose={() => setActivePopHelp(null)}
        onSwitchType={(type) => setActivePopHelp(type)}
      />
    </section>
  );
};
