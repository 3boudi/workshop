import React from 'react';

export const JourneyBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 gpu-layer" style={{ contain: 'strict' }}>
      
      {/* 1. Ambient Mint Lighting Layer */}
      <div 
        className="absolute inset-0 opacity-65"
        style={{
          background: 'radial-gradient(circle at 25% 45%, rgba(237, 255, 229, 0.75) 0%, rgba(248, 255, 244, 0.3) 55%, transparent 80%)'
        }}
      />

      {/* 2. Left-Side Smooth Self-Contained Organic Blob */}
      <svg
        className="absolute top-1/4 left-0 w-64 sm:w-80 md:w-[26rem] h-auto z-0"
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Closed curve from left edge (x=0) */}
        <path
          d="M 0 40 
             C 90 40, 190 100, 240 180 
             C 290 260, 250 320, 170 350 
             C 100 370, 40 360, 0 340 
             Z"
          fill="#76FF03"
          opacity="0.92"
        />

        {/* White Accent Cross */}
        <path
          d="M 120 180 L 120 196 M 112 188 L 128 188"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>

      {/* 3. Right-Side Journey Coordinate Grid & 3D Chalk Cylinder */}
      <div className="absolute top-16 right-4 sm:top-20 sm:right-10 z-0">
        <svg
          width="260"
          height="220"
          viewBox="0 0 260 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Faint Coordinate Grid */}
          <g stroke="#E2ECE4" strokeWidth="1.5" opacity="0.8">
            <line x1="20" y1="20" x2="240" y2="20" />
            <line x1="20" y1="60" x2="240" y2="60" />
            <line x1="20" y1="100" x2="240" y2="100" />
            <line x1="20" y1="140" x2="240" y2="140" />
            <line x1="20" y1="180" x2="240" y2="180" />

            <line x1="50" y1="20" x2="50" y2="180" />
            <line x1="100" y1="20" x2="100" y2="180" />
            <line x1="150" y1="20" x2="150" y2="180" />
            <line x1="200" y1="20" x2="200" y2="180" />
          </g>

          {/* 3D Tilted Green/White Chalk Cylinder Pill */}
          <g transform="translate(130, 85) rotate(-38)">
            <rect
              x="0"
              y="0"
              width="42"
              height="15"
              rx="4"
              fill="#FFFFFF"
              stroke="#093316"
              strokeWidth="3.2"
            />
            <rect
              x="21"
              y="0"
              width="21"
              height="15"
              rx="2"
              fill="#76FF03"
              stroke="#093316"
              strokeWidth="2.8"
            />
            <ellipse
              cx="0"
              cy="7.5"
              rx="4"
              ry="7.5"
              fill="#76FF03"
              stroke="#093316"
              strokeWidth="2.8"
            />
          </g>
        </svg>
      </div>

      {/* 4. Center Concentric Milestone Rings */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 z-0 hidden lg:block">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#E2ECE4" strokeWidth="1.8" fill="none" opacity="0.8">
            <circle cx="100" cy="100" r="40" />
            <circle cx="100" cy="100" r="75" />
            <circle cx="100" cy="100" r="105" />
          </g>
          {/* Milestone Target Dot */}
          <circle cx="100" cy="100" r="5" fill="#76FF03" stroke="#093316" strokeWidth="2.5" />
        </svg>
      </div>

      {/* 5. Lower-Right Organic Accent Shape */}
      <svg
        className="absolute bottom-16 right-0 w-64 sm:w-80 md:w-[26rem] h-auto z-0"
        viewBox="0 0 450 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 450 40 
             C 360 40, 270 90, 210 160 
             C 150 230, 190 300, 270 330 
             C 340 350, 400 340, 450 320 
             Z"
          fill="#76FF03"
          opacity="0.9"
        />

        {/* White Plus Sign */}
        <path
          d="M 330 180 L 330 198 M 321 189 L 339 189"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Floating White Diamond */}
        <rect
          x="260"
          y="230"
          width="18"
          height="18"
          rx="3.5"
          transform="rotate(22 260 230)"
          fill="#FFFFFF"
          stroke="#093316"
          strokeWidth="2.8"
        />
      </svg>

      {/* 6. Scattered Coding Symbols */}
      <div className="absolute top-1/3 left-[45%] hidden sm:block">
        <span className="font-mono font-black text-xl text-forest/20 select-none">
          &lt;/&gt;
        </span>
      </div>
      <div className="absolute bottom-1/4 left-[20%] hidden md:block">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M 9 2 L 9 16 M 2 9 L 16 9" stroke="#76FF03" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

    </div>
  );
};
