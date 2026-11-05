import React from 'react';

export const BackgroundDecorations: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 gpu-layer" style={{ contain: 'strict' }}>
      {/* =================================================================== */}
      {/* 1. TOP-LEFT ORGANIC LIME BLOB (Subtle on mobile, full on desktop)    */}
      {/* =================================================================== */}
      <svg
        className="absolute top-0 -left-12 sm:-left-16 w-64 sm:w-96 md:w-[32rem] h-auto z-0 opacity-40 sm:opacity-100"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Organic Lime Blob with smooth continuous curves */}
        <path
          d="M 0 0 
             C 120 0, 280 20, 380 90 
             C 450 140, 480 230, 420 300 
             C 360 370, 270 330, 220 400 
             C 170 470, 90 490, 0 460 
             Z"
          fill="#87FB2B"
        />

        {/* 4x5 White Dot Matrix */}
        <g fill="#FFFFFF">
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={75 + col * 26}
                cy={80 + row * 26}
                r="4.5"
              />
            ))
          )}
        </g>

        {/* Tilted White Diamond (Desktop only) */}
        <rect
          x="280"
          y="130"
          width="26"
          height="26"
          rx="5"
          transform="rotate(25 280 130)"
          fill="#FFFFFF"
          stroke="#092610"
          strokeWidth="3.5"
          className="hidden sm:block"
        />

        {/* Floating Accent Plus (Desktop only) */}
        <path
          d="M 230 250 L 230 268 M 221 259 L 239 259"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          className="hidden sm:block"
        />
      </svg>

      {/* =================================================================== */}
      {/* 2. BOTTOM-RIGHT ORGANIC LIME BLOB (BEHIND CHAIR & DEVELOPER)       */}
      {/* =================================================================== */}
      <svg
        className="absolute bottom-4 right-0 sm:bottom-6 w-72 sm:w-[36rem] md:w-[46rem] h-auto z-0 pointer-events-none opacity-30 sm:opacity-100"
        viewBox="0 0 700 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 700 10 
             C 630 80, 610 160, 560 220 
             C 490 290, 420 270, 350 320 
             C 280 370, 240 430, 280 470 
             C 330 510, 440 520, 540 490 
             C 620 460, 670 430, 700 390 
             Z"
          fill="#76FF03"
        />

        {/* White </> Code bracket on far right green blob (Desktop only) */}
        <g transform="translate(580, 220)" className="hidden md:block">
          <text
            x="0"
            y="0"
            fontFamily="monospace"
            fontWeight="900"
            fontSize="32"
            fill="#092610"
            opacity="0.8"
          >
            &lt;/&gt;
          </text>
        </g>

        {/* White Plus Sign */}
        <path
          d="M 620 310 L 620 328 M 611 319 L 629 319"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          className="hidden md:block"
        />
      </svg>

      {/* =================================================================== */}
      {/* 3. BOTTOM-LEFT FAINT GRID & 3D CHALK CYLINDER PILL (Desktop only)   */}
      {/* =================================================================== */}
      <div className="absolute bottom-8 left-4 sm:bottom-12 sm:left-10 z-0 hidden md:block">
        <svg
          width="240"
          height="220"
          viewBox="0 0 240 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Faint Square Coordinate Grid */}
          <g stroke="#D9D9D9" strokeWidth="1.5" opacity="0.85">
            <line x1="10" y1="20" x2="170" y2="20" />
            <line x1="10" y1="55" x2="170" y2="55" />
            <line x1="10" y1="90" x2="170" y2="90" />
            <line x1="10" y1="125" x2="170" y2="125" />
            <line x1="10" y1="160" x2="170" y2="160" />

            <line x1="10" y1="20" x2="10" y2="160" />
            <line x1="45" y1="20" x2="45" y2="160" />
            <line x1="80" y1="20" x2="80" y2="160" />
            <line x1="115" y1="20" x2="115" y2="160" />
            <line x1="150" y1="20" x2="150" y2="160" />
          </g>

          {/* 3D Tilted Green/White Chalk Cylinder Pill */}
          <g transform="translate(68, 55) rotate(-42)">
            <rect
              x="0"
              y="0"
              width="44"
              height="16"
              rx="4"
              fill="#FFFFFF"
              stroke="#092610"
              strokeWidth="3.5"
            />
            <rect
              x="22"
              y="0"
              width="22"
              height="16"
              rx="2"
              fill="#76FF03"
              stroke="#092610"
              strokeWidth="3"
            />
            <ellipse
              cx="0"
              cy="8"
              rx="4"
              ry="8"
              fill="#76FF03"
              stroke="#092610"
              strokeWidth="3"
            />
          </g>

          {/* Concentric Grey Circles on Bottom-Left Edge */}
          <g stroke="#D9D9D9" strokeWidth="1.8" fill="none" opacity="0.85">
            <circle cx="85" cy="140" r="35" />
            <circle cx="85" cy="140" r="55" />
            <circle cx="85" cy="140" r="75" />
          </g>
        </svg>
      </div>

      {/* =================================================================== */}
      {/* 4. TOP CONCENTRIC GREY CIRCLES (Desktop only)                       */}
      {/* =================================================================== */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 z-0 hidden md:block">
        <svg
          width="220"
          height="120"
          viewBox="0 0 220 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#D9D9D9" strokeWidth="2" fill="none" opacity="0.8">
            <circle cx="110" cy="-10" r="45" />
            <circle cx="110" cy="-10" r="75" />
            <circle cx="110" cy="-10" r="105" />
          </g>
        </svg>
      </div>

      {/* =================================================================== */}
      {/* 5. BOTTOM-CENTER LIME CIRCLE & HAND-DRAWN CURVED BLACK ARROW       */}
      {/* HIDDEN ON MOBILE (<= 768px) so it never crosses buttons/illustration*/}
      {/* =================================================================== */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 sm:translate-x-[-30%] md:translate-x-[-15%] z-10 hidden md:block pointer-events-none">
        <svg
          width="320"
          height="150"
          viewBox="0 0 320 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="65" cy="85" r="42" fill="#76FF03" />
          <circle cx="130" cy="70" r="10" fill="#76FF03" />
          <path
            d="M 125 90 
               C 170 95, 205 75, 215 50 
               C 220 35, 230 25, 245 20"
            fill="none"
            stroke="#092610"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 230 16 L 248 19 L 244 36"
            fill="none"
            stroke="#092610"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* =================================================================== */}
      {/* 6. SCATTERED ACCENTS (+ SIGNS, STARS, DOTS) (Desktop only)          */}
      {/* =================================================================== */}
      <div className="absolute top-16 left-[48%] hidden sm:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M 12 4 L 12 20 M 4 12 L 20 12" stroke="#87FB2B" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute top-80 left-[34%] hidden md:block">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M 11 3 L 11 19 M 3 11 L 19 11" stroke="#092610" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute bottom-44 left-[14%] hidden sm:block">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M 10 2 L 10 18 M 2 10 L 18 10" stroke="#87FB2B" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute bottom-56 left-[48%] hidden lg:block">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M 10 2 L 10 18 M 2 10 L 18 10" stroke="#092610" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute top-36 left-[38%] w-3 h-3 rounded-full bg-neon hidden sm:block" />
      <div className="absolute bottom-72 left-[28%] w-2.5 h-2.5 rounded-full bg-neon/80 hidden sm:block" />
    </div>
  );
};
