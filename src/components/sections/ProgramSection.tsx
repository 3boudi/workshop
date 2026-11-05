import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Lock, 
  BookOpen, 
  Layers, 
  Cpu, 
  Rocket, 
  Bell, 
  CheckCircle2,
  Hourglass,
  ArrowRight,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { AnimatedCounter } from '../common/AnimatedCounter';

interface ProgramSectionProps {
  onNotifyClick?: () => void;
}

interface ModuleItem {
  step: string;
  title: string;
  duration: string;
  category: string;
  badgeColor: string;
  techIcons?: { src: string; alt: string }[];
  summary: string;
  takeaway: string;
  status: string;
}

export const ProgramSection: React.FC<ProgramSectionProps> = ({ onNotifyClick }) => {
  const upcomingModules: ModuleItem[] = [
    {
      step: '01',
      title: 'From Terminal Logic to Web Architecture',
      duration: '20 min',
      category: 'Foundations',
      badgeColor: 'bg-blue-50 text-gdgc-blue border-gdgc-blue/30',
      summary: 'Why terminal programs (loops, pointers, console prints) are fundamentally different from web apps, and how frontends, backends, and APIs communicate.',
      takeaway: 'Client-server architecture, HTTP requests, and JSON payloads',
      status: 'Curriculum Finalized',
    },
    {
      step: '02',
      title: 'Configuring the AI Coding Agent',
      duration: '25 min',
      category: 'AI Toolchain',
      badgeColor: 'bg-green-50 text-gdgc-green border-gdgc-green/30',
      techIcons: [
        { src: '/assets/stickers/vscode.svg', alt: 'VS Code' },
        { src: '/assets/stickers/opencode.svg', alt: 'OpenCode' },
        { src: '/assets/stickers/claude.svg', alt: 'Claude' },
      ],
      summary: 'Setting up VS Code, Git, and OpenCode with Claude 3.7. How to write structured prompts that let agents read repositories and build multi-file features without hallucinations.',
      takeaway: 'Prompt engineering for file edits, context windows, and code reviews',
      status: 'In Active Prep',
    },
    {
      step: '03',
      title: 'Interactive Frontend with React',
      duration: '35 min',
      category: 'Frontend UI',
      badgeColor: 'bg-amber-50 text-amber-700 border-gdgc-yellow/40',
      techIcons: [
        { src: '/assets/stickers/react.svg', alt: 'React' },
      ],
      summary: 'Building modular UI components, managing reactive form state, and structuring responsive layouts with tactile button and card micro-interactions.',
      takeaway: 'Component trees, props, state hooks, and neo-brutalist styling',
      status: 'Starter Template Ready',
    },
    {
      step: '04',
      title: 'Database & Auth with Supabase',
      duration: '30 min',
      category: 'Backend & DB',
      badgeColor: 'bg-red-50 text-gdgc-red border-gdgc-red/30',
      techIcons: [
        { src: '/assets/stickers/supabase.svg', alt: 'Supabase' },
      ],
      summary: 'Creating PostgreSQL tables, enforcing user authentication with session tokens, and writing Row Level Security (RLS) policies to keep student data isolated.',
      takeaway: 'Postgres tables, foreign keys, auth tokens, and RLS policies',
      status: 'Schema Prepared',
    },
    {
      step: '05',
      title: 'Zero-Cost Deployment to Netlify',
      duration: '25 min',
      category: 'Cloud Hosting',
      badgeColor: 'bg-blue-50 text-gdgc-blue border-gdgc-blue/30',
      techIcons: [
        { src: '/assets/stickers/git.svg', alt: 'Git' },
        { src: '/assets/stickers/github.svg', alt: 'GitHub' },
        { src: '/assets/stickers/netlify.svg', alt: 'Netlify' },
      ],
      summary: 'Connecting your GitHub repository to Netlify for continuous edge deployments. Setting up build commands, environment variables, and custom live URLs.',
      takeaway: 'Git push-to-deploy, CDN distribution, and environment secrets',
      status: 'Pipeline Tested',
    },
    {
      step: '06',
      title: 'Packaging Code for Tech Recruiters',
      duration: '15 min',
      category: 'Career & Growth',
      badgeColor: 'bg-green-50 text-gdgc-green border-gdgc-green/30',
      techIcons: [
        { src: '/assets/stickers/github.svg', alt: 'GitHub' },
      ],
      summary: 'Structuring your GitHub repository with clear README documentation, architectural diagrams, and deployed links to showcase during internship interviews.',
      takeaway: 'README templates, demo recordings, and hackathon strategies',
      status: 'Syllabus Ready',
    },
  ];

  return (
    <section id="program" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-white">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-0">
        <svg
          className="absolute top-1/4 -left-12 w-80 md:w-96 h-auto opacity-50"
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

        <div className="absolute top-16 right-12 opacity-25">
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
            <span>GDGC Univ. Batna 2 Curriculum · <AnimatedCounter value={2.5} decimals={1} /> Hours</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-forest-darkest tracking-tight">
              Workshop Program
            </h2>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-neon text-forest-darkest font-black text-xs sm:text-sm border-2 border-forest shadow-brutal-sm animate-pulse">
              <Hourglass className="w-3.5 h-3.5" />
              <span>IS COMING SOON</span>
            </span>
          </div>

          <p className="text-muted text-base sm:text-lg max-w-2xl font-semibold leading-relaxed">
            Curated by <strong>GDGC Univ. Batna 2</strong> — a practical, hands-on syllabus breaking down the leap from academic coding exercises to shipping full-stack applications.
          </p>
        </motion.div>

        {/* Master Coming Soon Banner with GDGC Colors */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="bg-forest rounded-3xl p-6 sm:p-10 border-4 border-neon shadow-brutal mb-12 relative overflow-hidden text-white"
        >
          {/* Top 4-Color Google Stripe */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gdgc-blue via-gdgc-red via-gdgc-yellow to-gdgc-green" />
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-neon/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 pt-2">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center flex-shrink-0 border-2 border-forest shadow-sm">
                <img src="/assets/gdgc-logo.png" alt="GDGC Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-md bg-neon text-forest-darkest text-[11px] font-black uppercase">
                    Status: Preparing Syllabus & Starter Repos
                  </span>
                  <span className="text-xs text-forest-surface/70 font-semibold">
                    <AnimatedCounter value={6} /> Practical Modules
                  </span>
                </div>
                <h3 className="font-sans font-black text-2xl sm:text-3xl text-white mb-2">
                  Full Interactive Schedule Releasing Soon
                </h3>
                <p className="text-xs sm:text-sm text-forest-surface/80 max-w-xl font-medium leading-relaxed">
                  GDGC Univ. Batna 2 and supervisor Halitim Amin are putting together starter GitHub repos, live exercise prompts, and code templates for each module.
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              onClick={onNotifyClick}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-neon text-forest-darkest font-black text-sm border-2 border-white shadow-brutal hover:shadow-brutal-hover hover:bg-neon-light transition-all flex-shrink-0 cursor-pointer"
            >
              <Bell className="w-4 h-4 text-forest-darkest" />
              <span>Get Notified on Release</span>
            </motion.button>
          </div>
        </motion.div>

        {/* 6-Module Grid Preview with GDGC Color Tags (Preserves 2-column desktop grid on mobile) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6"
        >
          {upcomingModules.map((mod, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 25 } },
              }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 450, damping: 22 } }}
              className="bg-forest-surface/40 rounded-2xl sm:rounded-3xl p-3 sm:p-6 border-2 sm:border-3 border-forest shadow-brutal-sm relative flex flex-col justify-between hover:bg-forest-surface hover:shadow-brutal transition-all group"
            >
              <div>
                {/* Top Row: Module # and Duration */}
                <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 sm:gap-2 mb-2 sm:mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-black text-sm sm:text-xl text-forest opacity-80 whitespace-nowrap">
                      M{mod.step}
                    </span>
                    <span className={`px-1.5 py-0.5 rounded-md border text-[9px] sm:text-[10px] font-black uppercase ${mod.badgeColor}`}>
                      {mod.category}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white border border-forest/20 text-forest text-[9px] sm:text-[11px] font-black shadow-xs">
                    <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-forest-mid" />
                    {mod.duration}
                  </span>
                </div>

                {/* Module Title */}
                <h4 className="font-sans font-black text-xs sm:text-lg text-forest-darkest mb-1.5 sm:mb-2 leading-snug">
                  {mod.title}
                </h4>

                {/* Toolchain Brand Badges if any */}
                {mod.techIcons && mod.techIcons.length > 0 && (
                  <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                    <span className="text-[9px] sm:text-[10px] font-bold text-muted uppercase hidden xs:inline">Tools:</span>
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      {mod.techIcons.map((icon, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-white border border-forest/20 p-0.5 flex items-center justify-center shadow-xs"
                          title={icon.alt}
                        >
                          <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Summary */}
                <p className="text-[10px] sm:text-xs text-muted leading-relaxed font-semibold mb-2 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                  {mod.summary}
                </p>

                {/* Key Focus Pill */}
                <div className="bg-white/80 p-2 sm:p-2.5 rounded-xl border border-forest/15 mb-3 sm:mb-5 text-[10px] sm:text-[11px] font-bold text-forest-darkest">
                  <span className="text-muted block text-[9px] sm:text-[10px] font-semibold uppercase mb-0.5">Key Focus</span>
                  <span className="line-clamp-2 sm:line-clamp-none">{mod.takeaway}</span>
                </div>
              </div>

              {/* Card Footer: Status & Lock */}
              <div className="pt-2 sm:pt-3 border-t-2 border-forest/10 flex items-center justify-between text-[9px] sm:text-xs font-bold text-forest">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neon-dark flex-shrink-0" />
                  <span className="text-[9px] sm:text-[11px] truncate">{mod.status}</span>
                </span>
                <span className="text-[8px] sm:text-[10px] font-black uppercase text-muted bg-white px-1.5 sm:px-2 py-0.5 rounded border border-forest/15">
                  Soon
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
