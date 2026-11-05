import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, GitBranch, Database, Layout, Cloud, UserCheck } from 'lucide-react';
import { JourneyBackground } from '../background/JourneyBackground';

export const DevelopmentJourneySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(3);

  const stages = [
    {
      id: 0,
      badge: 'Step 1',
      title: 'Idea & Requirements',
      desc: 'Define the real-world user problem, feature scope, and user flows before writing code.',
      icon: '💡',
    },
    {
      id: 1,
      badge: 'Step 2',
      title: 'Planning & Architecture',
      desc: 'Design schemas, API contracts, component trees, and project folder structures.',
      icon: '📐',
    },
    {
      id: 2,
      badge: 'Step 3',
      title: 'AI-Assisted Development',
      desc: 'Partner with OpenCode & Claude inside VS Code to scaffold code, write functions, and iterate quickly.',
      icon: '🤖',
      tools: ['OpenCode', 'Claude', 'VS Code'],
    },
    {
      id: 3,
      badge: 'Step 4',
      title: 'Full-Stack Implementation',
      desc: 'Split and build: React UI frontend with reactive state, coupled to Supabase Postgres database & auth backend.',
      icon: '⚡',
      split: true,
    },
    {
      id: 4,
      badge: 'Step 5',
      title: 'Testing & AI Debugging',
      desc: 'Review code, test CRUD edge cases, and ask AI coding agents to catch race conditions and syntax bugs.',
      icon: '🧪',
    },
    {
      id: 5,
      badge: 'Step 6',
      title: 'Git & GitHub Version Control',
      desc: 'Commit clean code checkpoints, push branches to cloud repos, and configure continuous deployment triggers.',
      icon: '🌿',
      tools: ['Git', 'GitHub'],
    },
    {
      id: 6,
      badge: 'Step 7',
      title: 'Netlify Cloud Deployment',
      desc: 'Automated CI/CD build pipeline outputs globally cached assets, provisioning an instant public HTTPS domain.',
      icon: '🌐',
      tools: ['Netlify'],
    },
    {
      id: 7,
      badge: 'Step 8',
      title: 'Live Product & Growth',
      desc: 'Your application is live online! Share the link with classmates, recruiters, users, and gather real feedback.',
      icon: '🚀',
      highlight: true,
    },
  ];

  return (
    <section id="journey" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Decorative Background Layer */}
      <JourneyBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-surface border-2 border-forest text-forest text-xs font-black mb-3">
          <span className="w-2 h-2 rounded-full bg-neon" />
          <span>Part 5 · The Complete Flow</span>
        </div>
        <h2 className="font-sans font-black text-3xl sm:text-5xl text-forest-darkest tracking-tight mb-4">
          The <span className="text-neon bg-forest px-3 py-0.5 rounded-lg border-2 border-forest">Development Journey</span> Pipeline
        </h2>
        <p className="text-muted text-base sm:text-lg max-w-2xl font-semibold">
          From a raw concept in your mind to a publicly deployed SaaS application running on the worldwide web.
        </p>
      </div>

      {/* Interactive Pipeline Node Card */}
      <div className="relative bg-white rounded-3xl p-6 sm:p-10 border-4 border-forest shadow-brutal-lg overflow-hidden">
        
        {/* Animated Connector Line Graphic */}
        <div className="relative z-10 mb-8 overflow-x-auto pb-4">
          <div className="min-w-[700px] flex items-center justify-between relative px-4">
            
            {/* Background connecting bar */}
            <div className="absolute top-1/2 left-8 right-8 h-1.5 bg-forest-surface border-y border-forest/20 -translate-y-1/2 -z-0" />
            <div
              className="absolute top-1/2 left-8 h-1.5 bg-neon border-y border-forest -translate-y-1/2 -z-0 transition-all duration-500"
              style={{ width: `${(activeStage / (stages.length - 1)) * 90}%` }}
            />

            {stages.map((st, i) => {
              const isActive = activeStage === i;
              const isPassed = activeStage >= i;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStage(i)}
                  className={`relative z-10 flex flex-col items-center group transition-transform ${
                    isActive ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center font-black text-lg transition-all ${
                      isActive
                        ? 'bg-neon text-forest-darkest border-forest shadow-brutal-sm ring-4 ring-forest/20'
                        : isPassed
                        ? 'bg-forest text-neon border-forest'
                        : 'bg-white text-muted border-forest/30 hover:border-forest'
                    }`}
                  >
                    <span>{st.icon}</span>
                  </div>
                  <span className={`text-[11px] font-black mt-2 text-center whitespace-nowrap ${
                    isActive ? 'text-forest-darkest' : 'text-muted'
                  }`}>
                    {st.badge}
                  </span>
                </button>
              );
            })}

          </div>
        </div>

        {/* Active Stage Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-forest-surface rounded-2xl p-6 sm:p-8 border-2 border-forest">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono font-black text-xs px-2.5 py-0.5 rounded-full bg-forest text-neon border border-forest">
                {stages[activeStage].badge}
              </span>
              <span className="text-xs font-bold text-muted">Pipeline Phase</span>
            </div>
            
            <h3 className="font-black text-2xl sm:text-3xl text-forest-darkest mb-3">
              {stages[activeStage].title}
            </h3>

            <p className="text-sm sm:text-base text-forest-darkest/90 font-medium leading-relaxed mb-6">
              {stages[activeStage].desc}
            </p>

            {/* If stage 4, show the split architecture */}
            {stages[activeStage].split && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded-xl bg-white border-2 border-forest shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-forest-darkest font-black text-sm">
                    <Layout className="w-4 h-4 text-neon-dark" />
                    <span>Frontend: React 18/19</span>
                  </div>
                  <p className="text-xs text-muted font-medium">
                    Component hierarchy, reactive state hooks, Tailwind CSS styling, responsive grid layouts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border-2 border-forest shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-forest-darkest font-black text-sm">
                    <Database className="w-4 h-4 text-forest" />
                    <span>Backend: Supabase</span>
                  </div>
                  <p className="text-xs text-muted font-medium">
                    PostgreSQL tables, user auth tokens, auto-generated REST endpoints, Row-Level Security.
                  </p>
                </div>
              </div>
            )}

            {/* Tools badge if available */}
            {stages[activeStage].tools && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-muted mr-1">Tools Used:</span>
                {stages[activeStage].tools!.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-xl bg-white border border-forest text-xs font-black text-forest-darkest shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right Action / Next Phase Button */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-forest/15 pt-6 lg:pt-0 lg:pl-8 text-center">
            <span className="text-xs font-bold text-muted mb-2">Step {activeStage + 1} of {stages.length}</span>
            <div className="w-full flex gap-2">
              <button
                disabled={activeStage === 0}
                onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
                className="flex-1 py-2.5 rounded-xl border-2 border-forest text-forest font-black text-xs hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-all"
              >
                ← Prev
              </button>
              <button
                disabled={activeStage === stages.length - 1}
                onClick={() => setActiveStage(prev => Math.min(stages.length - 1, prev + 1))}
                className="flex-1 py-2.5 rounded-xl bg-forest text-neon font-black text-xs border-2 border-neon hover:bg-forest-mid disabled:opacity-30 disabled:pointer-events-none transition-all shadow-sm"
              >
                Next Step →
              </button>
            </div>
          </div>
        </div>

      </div>
      </div>

    </section>
  );
};

