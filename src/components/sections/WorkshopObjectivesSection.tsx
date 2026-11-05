import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { ObjectivesBackground } from '../background/ObjectivesBackground';

export const WorkshopObjectivesSection: React.FC = () => {
  const objectives = [
    {
      num: '01',
      title: 'Connect Fundamentals to Real Software',
      desc: 'Bridge academic concepts (loops, logic, functions) directly to interactive software components and system architecture.',
    },
    {
      num: '02',
      title: 'Understand How Web Apps & SaaS Work',
      desc: 'Learn how browsers communicate over HTTP with cloud servers to fetch data, authenticate accounts, and render interfaces.',
    },
    {
      num: '03',
      title: 'Identify Frontend, Backend, APIs & DBs',
      desc: 'Clear mental model of who does what: React (UI), Supabase (DB/Auth), REST/GraphQL APIs (glue), and Postgres (data).',
    },
    {
      num: '04',
      title: 'See How Modern Tech Connects Together',
      desc: 'Understand the end-to-end glue: state management, environment keys, fetch calls, serverless routes, and schemas.',
    },
    {
      num: '05',
      title: 'Harness AI Coding Agents as Pair Programmers',
      desc: 'Learn how terminal agents like OpenCode read files, execute tasks, refactor components, and speed up building 5x.',
    },
    {
      num: '06',
      title: 'Generate, Understand, Modify & Debug Code with AI',
      desc: 'Master prompt engineering for coding: passing context, verifying outputs, understanding diffs, and catching edge cases.',
    },
    {
      num: '07',
      title: 'Follow the Full Workflow of a Small SaaS App',
      desc: 'Step-by-step from blank folder to a deployed, multi-user TaskFlow application with dynamic data persistence.',
    },
    {
      num: '08',
      title: 'Master Git & GitHub for Real Project Control',
      desc: 'Track every commit, collaborate, manage branches, handle merge conflicts, and link repositories to CI/CD pipelines.',
    },
    {
      num: '09',
      title: 'Deploy Apps from Localhost to the World',
      desc: 'Understand build outputs, DNS, SSL, environment variables, and zero-downtime deployment on modern cloud CDNs like Netlify.',
    },
    {
      num: '10',
      title: 'Unlock Opportunities Beyond Homework',
      desc: 'Recognize your ability as an independent developer to launch digital businesses, client projects, SaaS, and portfolios.',
    },
  ];

  return (
    <section id="objectives" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Decorative Background Layer */}
      <ObjectivesBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-surface border-2 border-forest text-forest text-xs font-black mb-3">
          <span className="w-2 h-2 rounded-full bg-neon" />
          <span>Part 2 · Learning Outcomes</span>
        </div>
        <h2 className="font-sans font-black text-3xl sm:text-5xl text-forest-darkest tracking-tight mb-4">
          10 Core <span className="text-neon bg-forest px-3 py-0.5 rounded-lg border-2 border-forest">Objectives</span> You Will Master
        </h2>
        <p className="text-muted text-base sm:text-lg max-w-2xl font-semibold">
          Every minute of the 150-minute workshop is intentionally structured to build these practical engineering competencies.
        </p>
      </div>

      {/* 10-Item Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {objectives.map((obj, idx) => (
          <div
            key={obj.num}
            className={`relative bg-white rounded-3xl p-6 sm:p-7 border-2 border-forest shadow-brutal hover:shadow-brutal-hover transition-all flex flex-col justify-between group ${
              idx === 0 || idx === 6 ? 'sm:col-span-2 lg:col-span-1 bg-forest-surface' : ''
            }`}
          >
            <div>
              {/* Badge & Number */}
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-neon text-forest-darkest border-2 border-forest flex items-center justify-center font-mono font-black text-base shadow-sm group-hover:scale-105 transition-transform">
                  {obj.num}
                </span>
                <span className="w-2 h-2 rounded-full bg-neon group-hover:scale-150 transition-transform" />
              </div>

              <h3 className="font-black text-lg text-forest-darkest leading-snug mb-2 group-hover:text-forest transition-colors">
                {obj.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
                {obj.desc}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-muted-border/60 flex items-center gap-2 text-xs font-black text-forest">
              <CheckCircle2 className="w-3.5 h-3.5 text-neon-dark" />
              <span>Measurable Lab Skill</span>
            </div>
          </div>
        ))}
      </div>
      </div>

    </section>
  );
};

