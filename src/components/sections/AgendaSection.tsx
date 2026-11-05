import React from 'react';
import { Clock, CheckCircle2, HelpCircle, Code2, Rocket, Cloud, Terminal } from 'lucide-react';
import { AgendaBackground } from '../background/AgendaBackground';

interface AgendaSectionProps {
  onOpenQuiz?: () => void;
}

export const AgendaSection: React.FC<AgendaSectionProps> = ({ onOpenQuiz }) => {
  return (
    <section id="agenda" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Decorative Background Layer */}
      <AgendaBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-surface border-2 border-forest text-forest text-xs font-black mb-3">
          <span className="w-2 h-2 rounded-full bg-neon" />
          <span>Part 4 · Workshop Timeline</span>
        </div>
        <h2 className="font-sans font-black text-3xl sm:text-5xl text-forest-darkest tracking-tight mb-4">
          6-Part Agenda · <span className="text-neon bg-forest px-3 py-0.5 rounded-lg border-2 border-forest">150 Minutes</span> Total
        </h2>
        <p className="text-muted text-base sm:text-lg max-w-2xl font-semibold">
          From high-level architectural concepts to a live deployed SaaS application in 2.5 hours.
        </p>
      </div>

      {/* Agenda Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        
        {/* Part 1 (20m) */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-forest shadow-brutal hover:shadow-brutal-hover transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon/20 border border-forest text-forest-darkest font-black text-xs">
                <Clock className="w-3.5 h-3.5" /> 20 min
              </span>
              <span className="font-mono font-black text-xs text-muted">PART 01</span>
            </div>

            <h3 className="font-black text-xl text-forest-darkest mb-3">
              Beyond Programming: The Big Picture
            </h3>

            <ul className="space-y-2 mb-6">
              {[
                'From C & algorithms to production web applications',
                'Static Websites vs Dynamic Web Applications',
                'Roles of Frontend, Backend, APIs & Databases',
                'What is a SaaS? How can solo devs build them?',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-muted">
                  <span className="w-4 h-4 rounded-full bg-forest/10 text-forest flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 rounded-2xl bg-forest-surface border border-forest/15 text-xs font-bold text-forest-darkest">
            🎯 <strong>Goal:</strong> Demystify modern software architecture and establish a clear mental model.
          </div>
        </div>

        {/* Part 2 (20m) */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-forest shadow-brutal hover:shadow-brutal-hover transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon/20 border border-forest text-forest-darkest font-black text-xs">
                <Clock className="w-3.5 h-3.5" /> 20 min
              </span>
              <span className="font-mono font-black text-xs text-muted">PART 02</span>
            </div>

            <h3 className="font-black text-xl text-forest-darkest mb-3">
              The AI-Assisted Development Workflow
            </h3>

            <ul className="space-y-2 mb-6">
              {[
                'How AI is transforming software engineering',
                'AI Chatbots vs AI Coding Agents (OpenCode + Claude)',
                'Translating user ideas into structured technical specs',
                'Prompt engineering for code: Context, syntax & rules',
                'Why reviewing, testing, and debugging still matter',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-muted">
                  <span className="w-4 h-4 rounded-full bg-forest/10 text-forest flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 rounded-2xl bg-forest-surface border border-forest/15 text-xs font-bold text-forest-darkest">
            🎯 <strong>Goal:</strong> Learn to treat AI as an autonomous junior engineer working inside your project files.
          </div>
        </div>

        {/* Part 3 (60m) — FEATURED HIGHLIGHT CARD */}
        <div className="md:col-span-2 lg:col-span-1 bg-forest text-white rounded-3xl p-6 sm:p-8 border-4 border-neon shadow-brutal-lg flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-neon/15 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon text-forest-darkest font-black text-xs border border-forest">
                <Clock className="w-3.5 h-3.5" /> 60 min · LAB
              </span>
              <span className="font-mono font-black text-xs text-neon">PART 03 · FEATURED</span>
            </div>

            <h3 className="font-black text-2xl text-white mb-2">
              From Idea to App: Let's Build!
            </h3>
            <p className="text-neon text-xs font-bold mb-4">
              Project: TaskFlow — A Complete Mini SaaS
            </p>

            <div className="bg-forest-dark p-3.5 rounded-2xl border border-neon/30 mb-4">
              <span className="text-[11px] font-black text-neon uppercase block mb-1">
                Included Features:
              </span>
              <p className="text-xs text-white/90 font-medium">
                Landing page, user registration & login, dashboard, CRUD task management, Supabase Postgres storage, and dynamic UI.
              </p>
            </div>

            <div className="space-y-1.5 mb-6 text-xs text-white/80 font-medium">
              <span className="font-bold text-white block text-[11px] uppercase tracking-wider mb-1">
                10-Step Lab Workflow:
              </span>
              <p className="text-[11px] leading-relaxed text-white/70">
                Idea → Specs → Project Files → UI Design → React Components → Supabase Config → API Keys → Database CRUD → Testing → AI Debugging.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-forest-dark border border-neon/40 text-xs font-bold text-neon">
            🎯 <strong>Goal:</strong> Code and run a functioning full-stack software application with persistent storage.
          </div>
        </div>

        {/* Part 4 (20m) */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-forest shadow-brutal hover:shadow-brutal-hover transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon/20 border border-forest text-forest-darkest font-black text-xs">
                <Clock className="w-3.5 h-3.5" /> 20 min
              </span>
              <span className="font-mono font-black text-xs text-muted">PART 04</span>
            </div>

            <h3 className="font-black text-xl text-forest-darkest mb-3">
              Deploy: From Localhost to the World
            </h3>

            <ul className="space-y-2 mb-6">
              {[
                'Localhost vs Public Internet: How DNS & IPs connect',
                'Initializing Git & pushing commits to GitHub',
                'Connecting your GitHub repo to Netlify',
                'Configuring production environment variables',
                'Receiving a public live URL you can share anywhere',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-muted">
                  <span className="w-4 h-4 rounded-full bg-forest/10 text-forest flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 rounded-2xl bg-forest-surface border border-forest/15 text-xs font-bold text-forest-darkest">
            🎯 <strong>Goal:</strong> Ship your app live online with an HTTPS URL accessible to any user.
          </div>
        </div>

        {/* Part 5 (15m) */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-forest shadow-brutal hover:shadow-brutal-hover transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon/20 border border-forest text-forest-darkest font-black text-xs">
                <Clock className="w-3.5 h-3.5" /> 15 min
              </span>
              <span className="font-mono font-black text-xs text-muted">PART 05</span>
            </div>

            <h3 className="font-black text-xl text-forest-darkest mb-3">
              Test Your Knowledge & Challenge
            </h3>

            <ul className="space-y-2 mb-6">
              {[
                'Interactive multi-choice quiz testing core concepts',
                'Frontend vs Backend architectural check',
                'When to use an AI Chatbot vs a Coding Agent',
                'Why Git & GitHub are foundational for deployment',
                'Code review challenge: Identifying AI logic bugs',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-muted">
                  <span className="w-4 h-4 rounded-full bg-forest/10 text-forest flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onOpenQuiz}
            className="w-full py-2.5 rounded-xl bg-neon text-forest-darkest font-black text-xs border-2 border-forest shadow-brutal-sm hover:bg-neon-light transition-all flex items-center justify-center gap-1.5"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Launch Interactive Quiz (6 Questions)</span>
          </button>
        </div>

        {/* Part 6 (15m) */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-forest shadow-brutal hover:shadow-brutal-hover transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon/20 border border-forest text-forest-darkest font-black text-xs">
                <Clock className="w-3.5 h-3.5" /> 15 min
              </span>
              <span className="font-mono font-black text-xs text-muted">PART 06</span>
            </div>

            <h3 className="font-black text-xl text-forest-darkest mb-3">
              Q&A: What's Next Beyond the Workshop?
            </h3>

            <ul className="space-y-2 mb-6">
              {[
                'Selecting your first personal project idea',
                'Building a software portfolio that impresses recruiters',
                'Exploring freelance, SaaS & digital business paths',
                'Continuous learning: How to keep building after today',
                'Live open Q&A with real-world developers',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-muted">
                  <span className="w-4 h-4 rounded-full bg-forest/10 text-forest flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 rounded-2xl bg-forest-surface border border-forest/15 text-xs font-bold text-forest-darkest">
            🎯 <strong>Goal:</strong> Formulate your roadmap for turning university learning into real opportunities.
          </div>
        </div>

      </div>
      </div>

    </section>
  );
};

