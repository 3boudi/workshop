import React, { useEffect, useState } from 'react';

interface DeveloperIllustrationProps {
  speed: number;
  isAnimated: boolean;
}

export const DeveloperIllustration: React.FC<DeveloperIllustrationProps> = ({
  speed,
  isAnimated,
}) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    // Fetch the high-fidelity animated developer SVG from public/assets with cache-busting
    fetch(`/assets/ai-developer-typing.svg?t=${Date.now()}`)
      .then((res) => res.text())
      .then((text) => {
        // Strip xml declaration if present so it embeds cleanly inline
        const cleanSvg = text.replace(/<\?xml.*?\?>/i, '');
        setSvgContent(cleanSvg);
      })
      .catch((err) => {
        console.error('Failed to load developer SVG:', err);
      });
  }, []);

  return (
    <div className="relative w-full max-w-2xl lg:max-w-3xl mx-auto flex items-center justify-center select-none gpu-layer">
      {/* Character, Dual Monitors, Goal Burst & Grounding Line Vector Layer */}
      <div
        className="relative z-10 w-full h-auto drop-shadow-xl transition-all"
        style={{
          // Pass the dynamic typing speed into the SVG CSS variable
          ['--spd' as any]: isAnimated ? speed : 0.001,
        }}
      >
        {svgContent ? (
          <div
            className="w-full h-auto svg-container"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        ) : (
          /* Fallback image while loading */
          <img
            src="/assets/ai-developer-typing.svg?v=4"
            alt="AI Developer Typing Illustration"
            className="w-full h-auto"
          />
        )}
      </div>

      {/* Foreground Code Bracket Symbol near Desk */}
      <div className="absolute bottom-6 left-12 sm:left-20 z-20 pointer-events-none">
        <span className="font-mono font-black text-2xl sm:text-3xl text-forest select-none opacity-85">
          &lt;/&gt;
        </span>
      </div>
    </div>
  );
};

