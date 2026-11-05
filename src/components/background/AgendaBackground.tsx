import React from 'react';

export const AgendaBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 gpu-layer" style={{ contain: 'strict' }}>
      
      {/* 1. Soft Green Ambient Lighting */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(ellipse at 70% 35%, rgba(237, 255, 229, 0.75) 0%, rgba(248, 255, 244, 0.3) 60%, transparent 85%)'
        }}
      />

      {/* 2. Right-Side Workflow Timeline Grid & Target Rings */}
      <div className="absolute top-16 right-4 sm:top-20 sm:right-10 z-0">
        <svg
          width="280"
          height="240"
          viewBox="0 0 280 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Faint Timeline Coordinate Grid */}
          <g stroke="#E2ECE4" strokeWidth="1.5" opacity="0.8">
            <line x1="20" y1="20" x2="260" y2="20" />
            <line x1="20" y1="65" x2="260" y2="65" />
            <line x1="20" y1="110" x2="260" y2="110" />
            <line x1="20" y1="155" x2="260" y2="155" />
            <line x1="20" y1="200" x2="260" y2="200" />

            <line x1="60" y1="20" x2="60" y2="200" />
            <line x1="120" y1="20" x2="120" y2="200" />
            <line x1="180" y1="20" x2="180" y2="200" />
            <line x1="240" y1="20" x2="240" y2="200" />
          </g>

          {/* Concentric Target Rings */}
          <g stroke="#76FF03" strokeWidth="2" fill="none" opacity="0.6">
            <circle cx="150" cy="110" r="35" />
            <circle cx="150" cy="110" r="65" />
            <circle cx="150" cy="110" r="95" stroke="#E2ECE4" />
          </g>

          {/* Center Target Dot */}
          <circle cx="150" cy="110" r="5" fill="#093316" />
        </svg>
      </div>

      {/* 3. Center-Left Floating Decorative Diamond */}
      <div className="absolute top-1/2 left-6 z-0 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect
            x="20"
            y="20"
            width="20"
            height="20"
            rx="4"
            transform="rotate(30 20 20)"
            fill="#FFFFFF"
            stroke="#093316"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* 4. Lower-Right Smooth Self-Contained Organic Shape */}
      <svg
        className="absolute bottom-16 right-0 w-72 sm:w-88 md:w-[28rem] h-auto z-0"
        viewBox="0 0 500 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Closed curve from right edge (x=500) */}
        <path
          d="M 500 40 
             C 410 40, 310 100, 250 180 
             C 190 260, 230 330, 320 370 
             C 390 390, 460 380, 500 360 
             Z"
          fill="#76FF03"
          opacity="0.94"
        />

        {/* 4x4 White Dot Matrix */}
        <g fill="#FFFFFF">
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <circle
                key={`agenda-dot-${row}-${col}`}
                cx={360 + col * 24}
                cy={150 + row * 24}
                r="4"
              />
            ))
          )}
        </g>

        {/* White Plus Sign */}
        <path
          d="M 300 280 L 300 298 M 291 289 L 309 289"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>

      {/* 5. Scattered Crosses */}
      <div className="absolute top-1/3 left-[32%] hidden lg:block">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M 9 2 L 9 16 M 2 9 L 16 9" stroke="#76FF03" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-[46%] hidden sm:block">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M 8 2 L 8 14 M 2 8 L 14 8" stroke="#093316" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
        </svg>
      </div>

    </div>
  );
};
