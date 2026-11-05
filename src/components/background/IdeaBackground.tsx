import React from 'react';

export const IdeaBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 gpu-layer" style={{ contain: 'strict' }}>
      
      {/* 1. Ambient Mint Lighting Layer */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(ellipse at 15% 45%, rgba(237, 255, 229, 0.75) 0%, rgba(248, 255, 244, 0.3) 55%, transparent 80%)'
        }}
      />

      {/* 2. Upper-Right Smooth Self-Contained Organic Blob */}
      <svg
        className="absolute top-12 right-0 w-64 sm:w-80 md:w-[26rem] h-auto z-0"
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Flawless continuous curve starting & ending on right edge (x=500) */}
        <path
          d="M 500 40 
             C 410 50, 310 110, 250 190 
             C 190 270, 240 330, 330 360 
             C 400 380, 460 370, 500 350 
             Z"
          fill="#76FF03"
          opacity="0.92"
        />
        {/* White Plus Sign */}
        <path
          d="M 390 190 L 390 208 M 381 199 L 399 199"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Subtle White Dot */}
        <circle cx="340" cy="160" r="5" fill="#FFFFFF" opacity="0.9" />
      </svg>

      {/* 3. Left-Center Concentric Rings & Coding Geometry */}
      <div className="absolute top-24 left-0 sm:left-4 z-0">
        <svg
          width="260"
          height="280"
          viewBox="0 0 260 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric Grey/Mint Rings */}
          <g stroke="#E2ECE4" strokeWidth="1.8" fill="none" opacity="0.85">
            <circle cx="20" cy="140" r="50" />
            <circle cx="20" cy="140" r="85" />
            <circle cx="20" cy="140" r="120" />
          </g>

          {/* Floating Tilted Diamond */}
          <rect
            x="110"
            y="70"
            width="22"
            height="22"
            rx="4"
            transform="rotate(28 110 70)"
            fill="#FFFFFF"
            stroke="#093316"
            strokeWidth="3"
          />

          {/* Code Bracket Symbol </> */}
          <text
            x="95"
            y="215"
            fontFamily="monospace"
            fontWeight="900"
            fontSize="26"
            fill="#093316"
            opacity="0.25"
          >
            &lt;/&gt;
          </text>
        </svg>
      </div>

      {/* 4. Lower-Left Smooth Self-Contained Organic Blob */}
      <svg
        className="absolute bottom-16 left-0 w-72 sm:w-88 md:w-[28rem] h-auto z-0"
        viewBox="0 0 500 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Flawless continuous curve starting & ending on left edge (x=0) */}
        <path
          d="M 0 50 
             C 90 40, 190 100, 250 180 
             C 310 260, 270 330, 180 370 
             C 100 390, 40 380, 0 360 
             Z"
          fill="#76FF03"
          opacity="0.94"
        />

        {/* 4x4 White Dot Matrix */}
        <g fill="#FFFFFF">
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <circle
                key={`idea-dot-${row}-${col}`}
                cx={55 + col * 24}
                cy={150 + row * 24}
                r="4"
              />
            ))
          )}
        </g>

        {/* White Accent Cross */}
        <path
          d="M 210 230 L 210 248 M 201 239 L 219 239"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>

      {/* 5. Scattered Plus Crosses & Accent Dots */}
      <div className="absolute top-1/2 right-[18%] hidden lg:block">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M 9 2 L 9 16 M 2 9 L 16 9" stroke="#76FF03" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-24 right-[28%] hidden md:block">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M 8 2 L 8 14 M 2 8 L 14 8" stroke="#093316" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
        </svg>
      </div>

    </div>
  );
};
