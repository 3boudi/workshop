import React from 'react';
import { WORKSHOP_STICKERS, StickerItem } from '../data/stickersData';
import { StickerCard } from './StickerCard';

interface StickerGridProps {
  isAnimated: boolean;
  onSelectSticker?: (sticker: StickerItem) => void;
  columns?: 2 | 3;
  size?: 'sm' | 'md' | 'lg';
}

export const StickerGrid: React.FC<StickerGridProps> = ({
  isAnimated,
  onSelectSticker,
  columns = 3,
  size = 'sm',
}) => {
  if (columns === 3) {
    // 6 Primary Stickers in 2 balanced rows of 3:
    // Top Row: OpenCode (0), VSCode (1), Claude (2)
    // Bottom Row: React (3), Supabase (4), GitHub (6)
    const rowTop = [WORKSHOP_STICKERS[0], WORKSHOP_STICKERS[1], WORKSHOP_STICKERS[2]];
    const rowBottom = [WORKSHOP_STICKERS[3], WORKSHOP_STICKERS[4], WORKSHOP_STICKERS[6]];

    return (
      <div className="relative w-full max-w-xl mx-auto z-20 py-1">
        <div className="grid grid-cols-3 gap-x-2 sm:gap-x-4 md:gap-x-5 gap-y-2.5 sm:gap-y-4 items-center justify-items-center">
          {rowTop.map((sticker) => (
            <div key={sticker.id} className="transform transition-transform">
              <StickerCard
                sticker={sticker}
                size={size}
                isAnimated={isAnimated}
                onSelect={onSelectSticker}
              />
            </div>
          ))}
          {rowBottom.map((sticker) => (
            <div key={sticker.id} className="transform transition-transform">
              <StickerCard
                sticker={sticker}
                size={size}
                isAnimated={isAnimated}
                onSelect={onSelectSticker}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default 2-column layout
  const colLeft = [WORKSHOP_STICKERS[0], WORKSHOP_STICKERS[2], WORKSHOP_STICKERS[4]]; // OpenCode, Claude, Supabase
  const colRight = [WORKSHOP_STICKERS[1], WORKSHOP_STICKERS[6], WORKSHOP_STICKERS[3]]; // VSCode, GitHub, React

  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0 z-20 py-2">
      <div className="absolute inset-0 bg-gradient-to-br from-neon/10 via-transparent to-transparent rounded-3xl -z-10 blur-xl opacity-60 pointer-events-none" />

      {/* Staggered 2-Column Grid */}
      <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 md:gap-x-8 gap-y-4 sm:gap-y-6 items-center justify-items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-y-4 sm:gap-y-7 items-center justify-center">
          {colLeft.map((sticker) => (
            <div key={sticker.id} className="transform transition-transform">
              <StickerCard
                sticker={sticker}
                size={size}
                isAnimated={isAnimated}
                onSelect={onSelectSticker}
              />
            </div>
          ))}
        </div>

        {/* Right Column (staggered offset) */}
        <div className="flex flex-col gap-y-4 sm:gap-y-7 items-center justify-center pt-3 sm:pt-6">
          {colRight.map((sticker) => (
            <div key={sticker.id} className="transform transition-transform">
              <StickerCard
                sticker={sticker}
                size={size}
                isAnimated={isAnimated}
                onSelect={onSelectSticker}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
