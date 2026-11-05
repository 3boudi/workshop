import React from 'react';

export const ObjectivesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 gpu-layer" style={{ contain: 'strict' }}>
      
      {/* 1. Subtle Center Ambient Green Glow */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{
          background: 'radial-gradient(circle at 55% 45%, rgba(237, 255, 229, 0.6) 0%, rgba(248, 255, 244, 0.25) 55%, transparent 80%)'
        }}
      />

      {/* 2. Top-Right Geometric Coordinate Grid & 3D Chalk Cylinder */}
      <div className="absolute top-12 right-4 sm:top-16 sm:right-12 z-0">
        <svg
          width="260"
          height="200"
          viewBox="0 0 260 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Faint Coordinate Grid */}
          <g stroke="#E2ECE4" strokeWidth="1.5" opacity="0.85">
            <line x1="20" y1="20" x2="220" y2="20" />
            <line x1="20" y1="55" x2="220" y2="55" />
            <line x1="20" y1="90" x2="220" y2="90" />
            <line x1="20" y1="125" x2="220" y2="125" />
            <line x1="20" y1="160" x2="220" y2="160" />

            <line x1="20" y1="20" x2="20" y2="160" />
            <line x1="60" y1="20" x2="60" y2="160" />
            <line x1="100" y1="20" x2="100" y2="160" />
            <line x1="140" y1="20" x2="140" y2="160" />
            <line x1="180" y1="20" x2="180" y2="160" />
            <line x1="220" y1="20" x2="220" y2="160" />
          </g>

          {/* 3D Tilted Green/White Chalk Cylinder Pill */}
          <g transform="translate(130, 75) rotate(-35)">
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

      {/* 3. Center-Right Smooth Self-Contained Organic Shape */}
      <svg
        className="absolute top-1/3 right-0 w-64 sm:w-80 md:w-[26rem] h-auto z-0"
        viewBox="0 0 500 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Closed curve from right edge (x=500) */}
        <path
          d="M 500 50 
             C 410 40, 310 100, 250 180 
             C 190 260, 230 330, 320 370 
             C 390 390, 460 380, 500 360 
             Z"
          fill="#76FF03"
          opacity="0.9"
        />

        {/* White Plus Sign */}
        <path
          d="M 380 180 L 380 198 M 371 189 L 389 189"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Small White Floating Circle */}
        <circle cx="310" cy="230" r="6" fill="#FFFFFF" opacity="0.9" />
      </svg>

      {/* 4. Center-Left Concentric Rings */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 z-0 hidden md:block">
        <svg
          width="180"
          height="240"
          viewBox="0 0 180 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#E2ECE4" strokeWidth="1.8" fill="none" opacity="0.8">
            <circle cx="0" cy="120" r="45" />
            <circle cx="0" cy="120" r="80" />
            <circle cx="0" cy="120" r="115" />
          </g>
        </svg>
      </div>

      {/* 5. Lower-Left Minimalist Diamond Accent */}
      <div className="absolute bottom-20 left-12 z-0 hidden sm:block">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect
            x="10"
            y="10"
            width="18"
            height="18"
            rx="3.5"
            transform="rotate(25 10 10)"
            fill="#FFFFFF"
            stroke="#093316"
            strokeWidth="2.8"
          />
        </svg>
      </div>

      {/* 6. Scattered Minimalist Code Accents */}
      <div className="absolute top-1/3 left-[28%] hidden lg:block">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M 9 2 L 9 16 M 2 9 L 16 9" stroke="#76FF03" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-[38%] hidden sm:block">
        <span className="font-mono font-black text-xl text-forest/20 select-none">
          &lt;/&gt;
        </span>
      </div>

    </div>
  );
};
