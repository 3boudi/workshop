import React from 'react';
import { CheckCircle2, ArrowRight, Award, Compass, HeartHandshake } from 'lucide-react';
import { OutcomesBackground } from '../background/OutcomesBackground';

interface OutcomesTakeawaysSectionProps {
  onJoinClick?: () => void;
}

export const OutcomesTakeawaysSection: React.FC<OutcomesTakeawaysSectionProps> = ({ onJoinClick }) => {
  const takeaways = [
    {
      num: '01',
      title: 'Fundamentals Are the Foundation',
      desc: 'The logic, loops, and data structures you learn at university are essential building blocks that make you understand how software thinks.',
    },
    {
      num: '02',
      title: 'There Is a World Beyond Writing Code',
      desc: 'Architecture, APIs, databases, authentication, user experience, and deployment turn basic code into living products.',
    },
    {
      num: '03',
      title: 'AI Changes the Development Workflow',
      desc: 'AI coding agents augment your speed, allowing you to design, build, and debug complex features that previously took weeks.',
    },
    {
      num: '04',
      title: "You Don't Need a Large Team to Start",
      desc: 'With modern tools like Supabase and AI assistants, a single determined student can build and launch a complete SaaS alone.',
    },
    {
      num: '05',
      title: 'Your Ideas Can Become Real Products',
      desc: 'You no longer have to wait until graduation or corporate employment to turn creative project concepts into functioning software.',
    },
    {
      num: '06',
      title: 'Building Is the Best Way to Learn',
      desc: 'Nothing accelerates technical intuition faster than wrestling with real API keys, deployment pipelines, and actual user feedback.',
    },
  ];

  const outcomes = [
    'A complete mental model of modern full-stack web and SaaS architecture.',
    'Hands-on experience using AI coding agents (OpenCode + Claude in VS Code).',
    'A functional full-stack TaskFlow SaaS app connected to Supabase Postgres.',
    'A published GitHub repository with structured Git commit history.',
    'A live public HTTPS deployment running worldwide on Netlify CDN.',
    'Practical debugging and code review instincts when collaborating with AI.',
    'Knowledge of zero-cost and low-cost development stacks for personal projects.',
    'A verified Workshop Certificate of Completion to showcase on your portfolio/LinkedIn.',
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Decorative Background Layer */}
      <OutcomesBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 6 Key Takeaways Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-surface border-2 border-forest text-forest text-xs font-black mb-3">
          <span className="w-2 h-2 rounded-full bg-neon" />
          <span>Part 6 · Core Takeaways</span>
        </div>
        <h2 className="font-sans font-black text-3xl sm:text-5xl text-forest-darkest tracking-tight mb-4">
          6 Key <span className="text-neon bg-forest px-3 py-0.5 rounded-lg border-2 border-forest">Takeaways</span> to Carry Forward
        </h2>
        <p className="text-muted text-base sm:text-lg max-w-2xl font-semibold">
          Principles that will transform how you approach your computer science studies and future career.
        </p>
      </div>

      {/* 6 Takeaways Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {takeaways.map((item) => (
          <div
            key={item.num}
            className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-forest shadow-brutal hover:shadow-brutal-hover transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-9 h-9 rounded-xl bg-neon text-forest-darkest border-2 border-forest flex items-center justify-center font-mono font-black text-sm shadow-sm">
                  {item.num}
                </span>
                <span className="text-xs font-black text-muted">KEY PRINCIPLE</span>
              </div>

              <h3 className="font-black text-xl text-forest-darkest mb-2 group-hover:text-forest transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-muted-border/60 flex items-center gap-1.5 text-xs font-black text-forest">
              <span>Future-Proof Thinking</span>
            </div>
          </div>
        ))}
      </div>

      {/* Expected Outcomes Card */}
      <div className="bg-forest-surface rounded-3xl p-6 sm:p-10 border-4 border-forest shadow-brutal-lg mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-forest text-neon flex items-center justify-center border-2 border-neon shadow-sm">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-black text-2xl text-forest-darkest">
              8 Tangible Outcomes You Walk Away With
            </h3>
            <p className="text-xs font-bold text-muted">What you will have in hand after attending the 2.5-hour workshop.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {outcomes.map((out, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border-2 border-forest/20">
              <CheckCircle2 className="w-5 h-5 text-neon-dark flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-bold text-forest-darkest leading-relaxed">
                {out}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Hero Callout Banner */}
      <div className="relative rounded-3xl bg-forest text-white p-8 sm:p-14 border-4 border-neon shadow-brutal-lg overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-80 h-80 bg-neon/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-neon text-forest-darkest font-black text-xs border border-forest mb-6">
            <Compass className="w-3.5 h-3.5" /> Final Workshop Message
          </span>

          <blockquote className="font-sans font-black text-lg sm:text-2xl lg:text-3xl text-white leading-relaxed mb-6">
            “You start by learning how to write code. Then you discover how software works. Then you learn how to build applications. And eventually, you realize that you can create products that solve real problems. Don't stop at learning how to code. Discover what you can build with it.”
          </blockquote>

          <div className="inline-block py-2 px-6 rounded-2xl bg-forest-dark border-2 border-neon text-neon font-black text-base sm:text-xl tracking-wider uppercase mb-8 shadow-sm">
            Beyond the Code. Think. Build. Deploy. Create.
          </div>

          <button
            onClick={onJoinClick}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-neon text-forest-darkest font-black text-base border-2 border-forest shadow-brutal hover:shadow-brutal-hover hover:bg-neon-light transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Join Free Live Workshop</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      </div>

    </section>
  );
};

