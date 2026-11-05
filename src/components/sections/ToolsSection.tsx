import React, { useState } from 'react';
import { WORKSHOP_STICKERS, StickerItem } from '../../data/stickersData';
import { StickerCard } from '../StickerCard';
import { AlertCircle, ExternalLink, ShieldCheck, Terminal } from 'lucide-react';
import { ToolsBackground } from '../background/ToolsBackground';

export const ToolsSection: React.FC = () => {
  const [activeTool, setActiveTool] = useState<StickerItem>(WORKSHOP_STICKERS[0]);

  return (
    <section id="tools" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Decorative Background Layer */}
      <ToolsBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-surface border-2 border-forest text-forest text-xs font-black mb-3">
          <span className="w-2 h-2 rounded-full bg-neon" />
          <span>Part 3 · Production Stack</span>
        </div>
        <h2 className="font-sans font-black text-3xl sm:text-5xl text-forest-darkest tracking-tight mb-4">
          The 8 Tools in Your <span className="text-neon bg-forest px-3 py-0.5 rounded-lg border-2 border-forest">AI Toolchain</span>
        </h2>
        <p className="text-muted text-base sm:text-lg max-w-2xl font-semibold">
          Carefully chosen to provide industry-grade software capabilities with zero upfront cost and low-friction setup.
        </p>
      </div>

      {/* 8 Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {WORKSHOP_STICKERS.map((tool) => {
          const isSelected = activeTool.id === tool.id;
          return (
            <div
              key={tool.id}
              onClick={() => setActiveTool(tool)}
              className={`relative bg-white rounded-3xl p-6 border-2 border-forest cursor-pointer transition-all flex flex-col justify-between group ${
                isSelected ? 'shadow-brutal-hover bg-forest-surface border-neon ring-2 ring-forest' : 'shadow-brutal hover:shadow-brutal-hover'
              }`}
            >
              {/* Corner Sticker Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black px-2.5 py-1 rounded-full bg-forest-surface border border-forest/20 text-forest uppercase tracking-wider">
                  {tool.category.split(' ')[0]}
                </span>
                <img
                  src={tool.iconPath}
                  alt={tool.name}
                  className="w-8 h-8 object-contain filter drop-shadow group-hover:scale-110 transition-transform"
                />
              </div>

              {/* Title & Role */}
              <div className="mb-4">
                <h3 className="font-black text-xl text-forest-darkest mb-1 group-hover:text-forest transition-colors">
                  {tool.title}
                </h3>
                <p className="text-xs font-bold text-forest-mid mb-2">
                  {tool.role}
                </p>
                <p className="text-xs text-muted font-medium line-clamp-3">
                  {tool.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-3 border-t border-muted-border/60 flex items-center justify-between text-xs font-black text-forest">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-neon-dark" /> Verified
                </span>
                <span className="text-[11px] text-muted">Click to inspect</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Tool Spotlight Banner */}
      <div className="relative bg-forest-surface rounded-3xl p-6 sm:p-8 border-2 border-forest shadow-brutal mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-white border-2 border-forest flex items-center justify-center p-3 shadow-brutal-sm flex-shrink-0">
            <img src={activeTool.iconPath} alt={activeTool.name} className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono font-black text-xs px-2 py-0.5 rounded bg-neon text-forest-darkest border border-forest">
                ACTIVE SPOTLIGHT
              </span>
              <span className="text-xs font-bold text-muted">{activeTool.category}</span>
            </div>
            <h4 className="font-black text-xl sm:text-2xl text-forest-darkest">
              {activeTool.title} — {activeTool.tagline}
            </h4>
            <p className="text-xs sm:text-sm text-forest-darkest/80 font-medium max-w-2xl mt-1">
              {activeTool.description}
            </p>
          </div>
        </div>

        <div className="flex-shrink-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-forest text-neon font-black text-xs border border-neon shadow-sm">
            <Terminal className="w-3.5 h-3.5" /> Hands-On in Lab
          </span>
        </div>
      </div>

      {/* Accessible Tools Notice Banner */}
      <div className="relative rounded-2xl bg-white p-5 sm:p-6 border-2 border-neon shadow-sm flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-neon/20 border-2 border-forest flex items-center justify-center text-forest-darkest flex-shrink-0 mt-0.5">
          <AlertCircle className="w-5 h-5 text-forest" />
        </div>
        <div>
          <h4 className="font-black text-sm sm:text-base text-forest-darkest mb-1">
            Important Note on Tool Access & Pricing
          </h4>
          <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
            The workshop focuses on accessible tools and low-cost development. Free tiers have limitations, and using a free coding tool does not necessarily mean that every AI model or service is free. We will show you how to maximize free developer tiers responsibly and affordably.
          </p>
        </div>
      </div>
      </div>

    </section>
  );
};

