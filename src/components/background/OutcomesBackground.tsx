import React from 'react';

export const OutcomesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 gpu-layer" style={{ contain: 'strict' }}>
      
      {/* 1. Luminous Ambient Gradient (Stronger green presence for Final CTA) */}
      <div 
        className="absolute inset-0 opacity-75"
        style={{
          background: 'radial-gradient(ellipse at 50% 65%, rgba(237, 255, 229, 0.85) 0%, rgba(248, 255, 244, 0.4) 60%, transparent 85%)'
        }}
      />

      {/* 2. Left-Edge Smooth Organic Wave with 4x4 Dot Matrix */}
      <svg
        className="absolute top-1/4 left-0 w-72 sm:w-88 md:w-[28rem] h-auto z-0"
        viewBox="0 0 500 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 50 
             C 100 40, 190 100, 240 180 
             C 300 260, 260 330, 170 360 
             C 100 380, 40 370, 0 350 
             Z"
          fill="#76FF03"
          opacity="0.92"
        />

        {/* 4x4 White Dot Matrix */}
        <g fill="#FFFFFF">
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <circle
                key={`outcomes-dot-${row}-${col}`}
                cx={45 + col * 24}
                cy={150 + row * 24}
                r="4"
              />
            ))
          )}
        </g>
      </svg>

      {/* 3. Large Concentric Rings (Behind CTA Banner) */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-0">
        <svg
          width="480"
          height="320"
          viewBox="0 0 480 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#E2ECE4" strokeWidth="2" fill="none" opacity="0.8">
            <circle cx="240" cy="180" r="70" />
            <circle cx="240" cy="180" r="120" />
            <circle cx="240" cy="180" r="170" stroke="#76FF03" opacity="0.4" />
          </g>
        </svg>
      </div>

      {/* 4. Right-Edge Sweeping Self-Contained Organic Wave */}
      <svg
        className="absolute bottom-12 right-0 w-80 sm:w-96 md:w-[34rem] h-auto z-0"
        viewBox="0 0 600 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Closed curve from right edge (x=600) */}
        <path
          d="M 600 50 
             C 500 60, 380 120, 300 200 
             C 220 280, 260 360, 360 410 
             C 450 450, 540 430, 600 400 
             Z"
          fill="#76FF03"
          opacity="0.95"
        />

        {/* 5x5 White Dot Matrix */}
        <g fill="#FFFFFF">
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <circle
                key={`outcomes-dot-big-${row}-${col}`}
                cx={380 + col * 24}
                cy={180 + row * 24}
                r="4"
              />
            ))
          )}
        </g>

        {/* Floating White Diamond */}
        <rect
          x="300"
          y="310"
          width="24"
          height="24"
          rx="5"
          transform="rotate(25 300 310)"
          fill="#FFFFFF"
          stroke="#093316"
          strokeWidth="3.2"
        />

        {/* White </> Code bracket */}
        <g transform="translate(480, 150)">
          <text
            x="0"
            y="0"
            fontFamily="monospace"
            fontWeight="900"
            fontSize="28"
            fill="#093316"
            opacity="0.85"
          >
            &lt;/&gt;
          </text>
        </g>
      </svg>

      {/* 5. Scattered Floating Accents */}
      <div className="absolute top-1/4 right-[24%] hidden md:block">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M 10 2 L 10 18 M 2 10 L 18 10" stroke="#76FF03" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-40 left-[18%] hidden sm:block">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M 9 2 L 9 16 M 2 9 L 16 9" stroke="#093316" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
        </svg>
      </div>

    </div>
  );
};
