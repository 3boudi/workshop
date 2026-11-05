import React from 'react';
import { BookOpen, Rocket, ArrowRight, HelpCircle, CheckCircle, Lightbulb } from 'lucide-react';
import { IdeaBackground } from '../background/IdeaBackground';

export const WorkshopIdeaSection: React.FC = () => {
  const universityPoints = [
    'Writing C code, terminal outputs, and algorithms',
    'Variables, loops, arrays, pointers, functions',
    'Data structures, time complexity & exams',
    'Individual console exercises with static inputs',
  ];

  const productPoints = [
    'Interactive web interfaces that users love',
    'Cloud databases, user authentication & APIs',
    'SaaS platforms, dynamic dashboards & data storage',
    'Public online deployments accessible worldwide',
  ];

  const questions = [
    'How does a simple program become a full web application?',
    'How are modern SaaS platforms designed, built, and monetized?',
    'What exactly are Frontend, Backend, APIs, and Databases in real systems?',
    'Can one single student/developer build and launch an entire product independently?',
    'How do AI coding agents turn plain English into working software files?',
    'Where do my code files actually live and run when hosted online?',
    'How do I bridge the gap from solving textbook problems to creating real digital opportunities?',
  ];

  return (
    <section id="idea" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Decorative Background Layer */}
      <IdeaBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-surface border-2 border-forest text-forest text-xs font-black mb-3">
          <span className="w-2 h-2 rounded-full bg-neon" />
          <span>Part 1 · The Core Concept</span>
        </div>
        <h2 className="font-sans font-black text-3xl sm:text-5xl text-forest-darkest tracking-tight mb-4">
          What Happens <span className="text-neon bg-forest px-3 py-0.5 rounded-lg border-2 border-forest">Beyond</span> the Code?
        </h2>
        <p className="text-muted text-base sm:text-lg max-w-2xl font-semibold">
          Bridging the gap between university programming exercises and shipping software that users can access anywhere.
        </p>
      </div>

      {/* Main Contrast Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        
        {/* Card 1: University Programming */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-forest shadow-brutal hover:shadow-brutal-hover transition-all">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-surface border-2 border-forest flex items-center justify-center text-forest-darkest">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-xl text-forest-darkest">University Programming</h3>
                <span className="text-xs font-bold text-muted">Foundational Theory</span>
              </div>
            </div>
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-forest-surface border border-forest/20 text-forest">
              Foundation
            </span>
          </div>

          <p className="text-sm text-forest-darkest mb-6 leading-relaxed font-medium">
            You spend semesters learning variables, loops, memory pointers, and abstract algorithms. While essential, code often stays trapped in local terminal windows.
          </p>

          <ul className="space-y-3 mb-6">
            {universityPoints.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-muted">
                <span className="w-5 h-5 rounded-md bg-forest/10 text-forest flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                  ✓
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2: Real-World Product Development */}
        <div className="relative bg-forest-surface rounded-3xl p-6 sm:p-8 border-2 border-forest shadow-brutal hover:shadow-brutal-hover transition-all">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neon border-2 border-forest flex items-center justify-center text-forest-darkest shadow-sm">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-xl text-forest-darkest">Real-World Products</h3>
                <span className="text-xs font-bold text-forest">Production Engineering</span>
              </div>
            </div>
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-neon text-forest-darkest border-2 border-forest">
              The Reality
            </span>
          </div>

          <p className="text-sm text-forest-darkest mb-6 leading-relaxed font-medium">
            Modern software lives on the web: multi-user databases, secure authentication, reactive user interfaces, and automated AI assistance.
          </p>

          <ul className="space-y-3 mb-6">
            {productPoints.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-bold text-forest-darkest">
                <span className="w-5 h-5 rounded-md bg-neon text-forest-darkest border border-forest flex items-center justify-center flex-shrink-0 text-xs font-black mt-0.5">
                  ★
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* 7 Core Questions Grid */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-forest shadow-brutal mb-12">
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="w-6 h-6 text-neon-dark" />
          <h3 className="font-black text-xl sm:text-2xl text-forest-darkest">
            The 7 Big Questions This Workshop Answers
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.map((q, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 rounded-2xl bg-forest-surface border border-forest/15 hover:border-forest hover:bg-neon/10 transition-colors"
            >
              <span className="font-mono font-black text-xs px-2 py-1 rounded bg-forest text-neon flex-shrink-0 mt-0.5">
                0{idx + 1}
              </span>
              <p className="text-xs sm:text-sm font-bold text-forest-darkest leading-relaxed">
                {q}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Philosophy Highlight Card */}
      <div className="relative rounded-3xl bg-forest text-white p-8 sm:p-12 border-4 border-neon shadow-brutal-lg overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 rounded-full blur-3xl -z-0 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-16 h-16 rounded-2xl bg-neon text-forest-darkest border-2 border-forest flex items-center justify-center flex-shrink-0 shadow-brutal-sm">
            <Lightbulb className="w-8 h-8" />
          </div>
          <div>
            <span className="text-neon text-xs font-black uppercase tracking-wider block mb-2">
              Core Workshop Philosophy
            </span>
            <blockquote className="font-sans font-black text-lg sm:text-2xl text-white leading-snug">
              “Programming is not just about writing code to solve exercises. It is about using code to build products, solve real problems, and create opportunities.”
            </blockquote>
          </div>
        </div>
        </div>
      </div>

    </section>
  );
};

