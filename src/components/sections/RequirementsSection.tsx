import React from 'react';
import { motion } from 'motion/react';
import { 
  Laptop, 
  Terminal, 
  CheckSquare, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Hourglass,
  Cpu,
  Layers,
  FileCode2,
  FolderGit2
} from 'lucide-react';

interface RequirementItem {
  iconNode: React.ReactNode;
  category: string;
  categoryBadge: string;
  title: string;
  desc: string;
  status: string;
  accentBorder: string;
  toolBadges?: { src: string; label: string }[];
}

export const RequirementsSection: React.FC = () => {
  const requirements: RequirementItem[] = [
    {
      iconNode: <FileCode2 className="w-6 h-6 text-gdgc-blue" />,
      category: 'Target Audience',
      categoryBadge: 'bg-blue-50 text-gdgc-blue border-gdgc-blue/30',
      title: '1st & 2nd Year CS Students',
      desc: 'Built specifically for University of Batna 2 students currently learning foundational programming (C, Python, Java).',
      status: 'No Web Experience Needed',
      accentBorder: 'border-gdgc-blue/30',
    },
    {
      iconNode: <Terminal className="w-6 h-6 text-gdgc-green" />,
      category: 'Prior Knowledge',
      categoryBadge: 'bg-green-50 text-gdgc-green border-gdgc-green/30',
      title: 'Basic Programming Logic',
      desc: 'If you know how conditional if/else blocks and loops work, you have all the theory you need. Modern coding agents handle web boilerplate.',
      status: 'Beginner-Friendly',
      accentBorder: 'border-gdgc-green/30',
    },
    {
      iconNode: <Laptop className="w-6 h-6 text-amber-600" />,
      category: 'Hardware',
      categoryBadge: 'bg-amber-50 text-amber-700 border-gdgc-yellow/40',
      title: 'Any Standard Laptop or PC',
      desc: 'Windows, macOS, or Linux with internet access and Chrome or Firefox. Heavy AI inference runs in the cloud, so zero GPU is required.',
      status: 'Zero GPU Required',
      accentBorder: 'border-gdgc-yellow/40',
    },
    {
      iconNode: <FolderGit2 className="w-6 h-6 text-gdgc-red" />,
      category: 'Developer Toolchain',
      categoryBadge: 'bg-red-50 text-gdgc-red border-gdgc-red/30',
      title: 'Free Developer Accounts',
      desc: 'Visual Studio Code installed locally, plus free accounts on GitHub and Supabase. Setup takes under 10 minutes.',
      status: '100% Free Tools',
      accentBorder: 'border-gdgc-red/30',
      toolBadges: [
        { src: '/assets/stickers/vscode.svg', label: 'VS Code' },
        { src: '/assets/stickers/github.svg', label: 'GitHub' },
        { src: '/assets/stickers/supabase.svg', label: 'Supabase' },
      ],
    },
  ];

  return (
    <section id="requirements" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-forest-surface/30">
      
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
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-2 border-forest text-forest-darkest text-xs font-black shadow-brutal-sm mb-4">
            <span>GDGC Univ. Batna 2 · Prerequisites & Essentials</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-forest-darkest tracking-tight">
              Requirements to Start
            </h2>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-neon text-forest-darkest font-black text-xs sm:text-sm border-2 border-forest shadow-brutal-sm animate-pulse">
              <Hourglass className="w-3.5 h-3.5" />
              <span>COMING SOON</span>
            </span>
          </div>

          <p className="text-muted text-base sm:text-lg max-w-2xl font-semibold leading-relaxed">
            Designed by <strong>GDGC Univ. Batna 2</strong> with zero artificial barriers. You don’t need prior web development, API, or cloud knowledge to take part.
          </p>
        </motion.div>

        {/* 4 Core Requirement Cards Grid with GDGC 4 Colors (Preserves 2x2 desktop grid on mobile) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 mb-8 sm:mb-12"
        >
          {requirements.map((req, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 25 } },
              }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 450, damping: 22 } }}
              className={`bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 border-2 sm:border-4 border-forest shadow-brutal-sm hover:shadow-brutal transition-all flex flex-col justify-between group ${req.accentBorder}`}
            >
              <div>
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-forest flex items-center justify-center mb-2.5 sm:mb-4 border border-neon shadow-sm flex-shrink-0">
                  {req.iconNode}
                </div>

                <span className={`inline-block px-1.5 sm:px-2.5 py-0.5 rounded-md border text-[9px] sm:text-[11px] font-black uppercase mb-1.5 sm:mb-2 ${req.categoryBadge}`}>
                  {req.category}
                </span>

                <h3 className="font-sans font-black text-xs sm:text-xl text-forest-darkest mb-1 sm:mb-2 leading-snug">
                  {req.title}
                </h3>

                <p className="text-[10px] sm:text-xs text-muted leading-relaxed font-semibold mb-2 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                  {req.desc}
                </p>

                {/* Optional Tool Badges */}
                {req.toolBadges && (
                  <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-4 p-1.5 sm:p-2 rounded-xl bg-forest-surface/60 border border-forest/15">
                    {req.toolBadges.map((tool, i) => (
                      <div key={i} className="flex items-center gap-0.5 sm:gap-1 bg-white px-1 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg border border-forest/15 text-[8px] sm:text-[10px] font-bold text-forest-darkest shadow-xs">
                        <img src={tool.src} alt={tool.label} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 object-contain" />
                        <span className="truncate">{tool.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2 sm:pt-3 border-t border-forest/10 flex items-center gap-1 text-[9px] sm:text-xs font-black text-forest-darkest">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-neon-dark flex-shrink-0" />
                <span className="truncate">{req.status}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Setup Checklist Notice with GDGC Club Branding */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-forest shadow-brutal flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Top 4-Color Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gdgc-blue via-gdgc-red via-gdgc-yellow to-gdgc-green" />

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white p-1 border-2 border-forest flex items-center justify-center flex-shrink-0 shadow-sm">
              <img src="/assets/gdgc-logo.png" alt="GDGC" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-sans font-black text-lg text-forest-darkest mb-1">
                GDGC Batna 2 Pre-Workshop Setup Guide & Checklist
              </h4>
              <p className="text-xs text-muted font-semibold">
                A simple 1-page PDF checklist and terminal setup instructions will be sent to all registered participants prior to the live session.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-forest-surface border-2 border-forest text-forest text-xs font-black flex-shrink-0">
            <span>Checklist Status: In Preparation</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
