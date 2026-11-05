import React from 'react';

export const FooterBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 gpu-layer" style={{ contain: 'strict' }}>
      
      {/* 1. Top Edge Subtle Lime Glow Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px] opacity-80"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #76FF03 30%, #76FF03 70%, transparent 100%)'
        }}
      />

      {/* 2. Top-Right Connecting Wave (Merging from Outcomes' bottom-right shape) */}
      <svg
        className="absolute -top-10 -right-10 w-64 sm:w-80 h-auto z-0 opacity-20"
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 120 0 
             C 180 40, 240 80, 300 100 
             C 360 120, 390 140, 400 200 
             L 400 0 
             Z"
          fill="#76FF03"
        />
      </svg>

      {/* 3. Subtle Dark Micro-Dot Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#76FF03" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-dots)" />
        </svg>
      </div>

      {/* 4. Left-Edge Faint Concentric Circles */}
      <div className="absolute -bottom-10 -left-10 z-0 opacity-15">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="40" stroke="#76FF03" strokeWidth="1.5" />
          <circle cx="90" cy="90" r="70" stroke="#76FF03" strokeWidth="1.5" />
        </svg>
      </div>

    </div>
  );
};

