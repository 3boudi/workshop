import React from 'react';

export const TaskFlowBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 gpu-layer" style={{ contain: 'strict' }}>
      
      {/* 1. SaaS Dashboard Ambient Spotlight */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(237, 255, 229, 0.8) 0%, rgba(248, 255, 244, 0.35) 60%, transparent 85%)'
        }}
      />

      {/* 2. Left-Side SaaS Technical Node Grid & Dashed Data Connectors */}
      <div className="absolute top-20 left-4 sm:top-24 sm:left-10 z-0">
        <svg
          width="260"
          height="280"
          viewBox="0 0 260 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric Radar Circles */}
          <g stroke="#E2ECE4" strokeWidth="1.6" fill="none" opacity="0.85">
            <circle cx="60" cy="140" r="45" />
            <circle cx="60" cy="140" r="80" />
            <circle cx="60" cy="140" r="115" />
          </g>

          {/* Dashed Data Stream Line */}
          <path
            d="M 60 40 L 60 240 M 120 70 L 120 210"
            stroke="#76FF03"
            strokeWidth="2"
            strokeDasharray="6 4"
            opacity="0.75"
          />

          {/* Glowing Green Data Nodes */}
          <circle cx="60" cy="95" r="4.5" fill="#76FF03" stroke="#093316" strokeWidth="2" />
          <circle cx="60" cy="185" r="4.5" fill="#76FF03" stroke="#093316" strokeWidth="2" />
          <circle cx="120" cy="140" r="4" fill="#093316" />

          {/* Floating Minimal Diamond */}
          <rect
            x="160"
            y="125"
            width="18"
            height="18"
            rx="3.5"
            transform="rotate(35 160 125)"
            fill="#FFFFFF"
            stroke="#093316"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      {/* 3. Right-Side Smooth Self-Contained Organic Shape */}
      <svg
        className="absolute top-1/3 right-0 w-64 sm:w-80 md:w-[26rem] h-auto z-0"
        viewBox="0 0 450 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Closed curve from right edge (x=450) */}
        <path
          d="M 450 40 
             C 360 40, 270 100, 220 180 
             C 170 250, 210 320, 290 350 
             C 360 370, 410 360, 450 340 
             Z"
          fill="#76FF03"
          opacity="0.9"
        />

        {/* White Plus Sign */}
        <path
          d="M 340 180 L 340 198 M 331 189 L 349 189"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* White Code Bracket Tag */}
        <g transform="translate(300, 270)">
          <text
            x="0"
            y="0"
            fontFamily="monospace"
            fontWeight="900"
            fontSize="22"
            fill="#FFFFFF"
            opacity="0.9"
          >
            &lt;/&gt;
          </text>
        </g>
      </svg>

      {/* 4. Lower-Left Subtle Organic Accent Shape */}
      <svg
        className="absolute bottom-12 left-0 w-60 sm:w-76 md:w-[22rem] h-auto z-0"
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 40 
             C 80 40, 160 90, 200 150 
             C 240 210, 200 270, 130 290 
             C 70 310, 30 300, 0 290 
             Z"
          fill="#76FF03"
          opacity="0.85"
        />
        {/* Small White Plus */}
        <path
          d="M 100 170 L 100 186 M 92 178 L 108 178"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* 5. Scattered Technical Accents */}
      <div className="absolute top-1/4 right-[28%] hidden lg:block">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M 9 2 L 9 16 M 2 9 L 16 9" stroke="#76FF03" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-[18%] hidden sm:block">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M 8 2 L 8 14 M 2 8 L 14 8" stroke="#093316" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
        </svg>
      </div>

    </div>
  );
};
