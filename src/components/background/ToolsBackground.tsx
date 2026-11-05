import React from 'react';

export const ToolsBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 gpu-layer" style={{ contain: 'strict' }}>
      
      {/* 1. Subtle Ambient Green Lighting */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(ellipse at 80% 30%, rgba(237, 255, 229, 0.7) 0%, rgba(248, 255, 244, 0.25) 55%, transparent 80%)'
        }}
      />

      {/* 2. Left-Edge Smooth Organic Shape with Dot Matrix & Code Symbol */}
      <svg
        className="absolute top-1/4 left-0 w-72 sm:w-88 md:w-[28rem] h-auto z-0"
        viewBox="0 0 500 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Closed curve from left edge (x=0) */}
        <path
          d="M 0 50 
             C 100 40, 200 110, 260 190 
             C 310 270, 260 340, 170 380 
             C 100 400, 40 390, 0 370 
             Z"
          fill="#76FF03"
          opacity="0.94"
        />

        {/* 4x4 White Dot Matrix */}
        <g fill="#FFFFFF">
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <circle
                key={`tools-dot-${row}-${col}`}
                cx={50 + col * 24}
                cy={150 + row * 24}
                r="4"
              />
            ))
          )}
        </g>

        {/* White Code Bracket Motif */}
        <g transform="translate(150, 280)">
          <text
            x="0"
            y="0"
            fontFamily="monospace"
            fontWeight="900"
            fontSize="26"
            fill="#FFFFFF"
            opacity="0.9"
          >
            &lt;/&gt;
          </text>
        </g>
      </svg>

      {/* 3. Center-Right Concentric Circles */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-0 hidden lg:block">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#E2ECE4" strokeWidth="1.8" fill="none" opacity="0.85">
            <circle cx="100" cy="100" r="40" />
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="95" />
          </g>
          {/* Tilted Diamond in Center of Circles */}
          <rect
            x="92"
            y="92"
            width="16"
            height="16"
            rx="3"
            transform="rotate(25 92 92)"
            fill="#FFFFFF"
            stroke="#093316"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      {/* 4. Lower-Right Organic Accent Shape */}
      <svg
        className="absolute bottom-12 right-0 w-64 sm:w-80 md:w-[24rem] h-auto z-0"
        viewBox="0 0 450 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 450 40 
             C 370 50, 270 100, 220 170 
             C 170 240, 210 300, 290 330 
             C 360 350, 410 340, 450 320 
             Z"
          fill="#76FF03"
          opacity="0.9"
        />

        {/* Small White Plus */}
        <path
          d="M 330 180 L 330 196 M 322 188 L 338 188"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>

      {/* 5. Scattered Technical Crosses */}
      <div className="absolute top-20 left-[42%] hidden sm:block">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M 9 2 L 9 16 M 2 9 L 16 9" stroke="#76FF03" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-24 right-[25%] hidden md:block">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M 9 2 L 9 16 M 2 9 L 16 9" stroke="#093316" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
        </svg>
      </div>

    </div>
  );
};
