import React from 'react';

interface AchievementBurstProps {
  isAnimated: boolean;
}

export const AchievementBurst: React.FC<AchievementBurstProps> = ({ isAnimated }) => {
  return (
    <svg
      viewBox="0 0 900 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-visible gpu-layer"
      style={{
        filter: 'drop-shadow(0 6px 10px rgba(9, 38, 16, 0.12))',
      }}
    >
      <defs>
        <style>
          {`
            @keyframes burstFloatAnim {
              0%, 100% { transform: translate3d(0, 0px, 0) rotate(0deg); }
              50% { transform: translate3d(0, -6px, 0) rotate(0.8deg); }
            }
            @keyframes burstPulseAnim {
              0%, 100% { transform: scale3d(1, 1, 1); }
              50% { transform: scale3d(1.05, 1.05, 1); }
            }
            .burst-float {
              will-change: transform;
              transform-box: fill-box;
              animation: ${isAnimated ? 'burstFloatAnim 4.6s ease-in-out infinite' : 'none'};
            }
            .burst-pulse {
              will-change: transform;
              transform-box: fill-box;
              transform-origin: center;
              animation: ${isAnimated ? 'burstPulseAnim 3.8s ease-in-out infinite' : 'none'};
            }
          `}
        </style>
      </defs>

      {/* ================================================================= */}
      {/* 1. RADIATING DYNAMIC BURST RAYS (UPWARD FROM BEHIND MONITORS)     */}
      {/* ================================================================= */}
      <g stroke="#87FB2B" strokeWidth="3" opacity="0.45" strokeDasharray="14 10">
        <line x1="430" y1="260" x2="260" y2="40" />
        <line x1="440" y1="260" x2="350" y2="15" />
        <line x1="460" y1="260" x2="470" y2="5" />
        <line x1="480" y1="260" x2="570" y2="10" />
        <line x1="490" y1="260" x2="680" y2="50" />
        <line x1="500" y1="260" x2="780" y2="110" />
      </g>

      {/* ================================================================= */}
      {/* 2. GIANT CENTRAL GREEN UPWARD GROWTH ARROW                       */}
      {/* ================================================================= */}
      <g className="burst-float">
        <path
          d="M 445 220 
             L 445 75 
             L 424 75 
             L 465 14 
             L 506 75 
             L 485 75 
             L 485 220 
             Z"
          fill="#87FB2B"
          stroke="#092610"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <line x1="465" y1="22" x2="465" y2="210" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" opacity="0.65" />
      </g>

      {/* Big 5-Point Star right at the tip of the central arrow */}
      <g className="burst-pulse" transform="translate(465, 42)">
        <polygon
          points="0,-26 8,-9 26,-8 12,6 17,24 0,14 -17,24 -12,6 -26,-8 -8,-9"
          fill="#87FB2B"
          stroke="#092610"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </g>

      {/* ================================================================= */}
      {/* 3. SECONDARY UPWARD GROWTH ARROW (TOP-RIGHT)                     */}
      {/* ================================================================= */}
      <g className="burst-float" style={{ animationDelay: '1.2s' }}>
        <path
          d="M 610 200 
             L 665 75 
             L 646 66 
             L 712 28 
             L 718 102 
             L 699 94 
             L 648 215 
             Z"
          fill="#87FB2B"
          stroke="#092610"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </g>

      {/* ================================================================= */}
      {/* 4. BULLSEYE TARGET WITH ARROW (TOP LEFT OF BURST)                */}
      {/* ================================================================= */}
      <g className="burst-float" style={{ animationDelay: '0.4s' }} transform="translate(230, 20)">
        <circle cx="48" cy="48" r="38" fill="#87FB2B" stroke="#092610" strokeWidth="5" />
        <circle cx="48" cy="48" r="26" fill="#FFFFFF" stroke="#092610" strokeWidth="4.5" />
        <circle cx="48" cy="48" r="14" fill="#87FB2B" stroke="#092610" strokeWidth="4" />
        <circle cx="48" cy="48" r="6" fill="#092610" />

        <g transform="translate(14, 14) rotate(-45)">
          <line x1="0" y1="0" x2="40" y2="0" stroke="#092610" strokeWidth="5" strokeLinecap="round" />
          <path d="M 0 0 L -14 -9 L -7 0 L -14 9 Z" fill="#87FB2B" stroke="#092610" strokeWidth="3.5" />
        </g>
      </g>

      {/* ================================================================= */}
      {/* 5. TWO CHECKLIST CLIPBOARDS                                      */}
      {/* ================================================================= */}
      <g className="burst-float" style={{ animationDelay: '0.8s' }} transform="translate(295, 115) rotate(-10)">
        <rect x="0" y="8" width="58" height="76" rx="8" fill="#FFFFFF" stroke="#092610" strokeWidth="4.5" />
        <rect x="18" y="2" width="22" height="12" rx="3" fill="#87FB2B" stroke="#092610" strokeWidth="4" />
        <circle cx="29" cy="8" r="2.5" fill="#092610" />
        <path d="M 10 28 L 16 34 L 26 24" fill="none" stroke="#87FB2B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="32" y1="28" x2="48" y2="28" stroke="#092610" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 10 46 L 16 52 L 26 42" fill="none" stroke="#87FB2B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="32" y1="46" x2="48" y2="46" stroke="#092610" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 10 64 L 16 70 L 26 60" fill="none" stroke="#87FB2B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="32" y1="64" x2="48" y2="64" stroke="#092610" strokeWidth="3.5" strokeLinecap="round" />
      </g>

      <g className="burst-float" style={{ animationDelay: '1.6s' }} transform="translate(605, 55) rotate(7)">
        <rect x="0" y="8" width="54" height="72" rx="8" fill="#FFFFFF" stroke="#092610" strokeWidth="4.5" />
        <rect x="17" y="2" width="20" height="12" rx="3" fill="#87FB2B" stroke="#092610" strokeWidth="4" />
        <circle cx="27" cy="8" r="2.5" fill="#092610" />
        <path d="M 10 26 L 15 31 L 24 22" fill="none" stroke="#87FB2B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="30" y1="26" x2="44" y2="26" stroke="#092610" strokeWidth="3" strokeLinecap="round" />
        <path d="M 10 42 L 15 47 L 24 38" fill="none" stroke="#87FB2B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="30" y1="42" x2="44" y2="42" stroke="#092610" strokeWidth="3" strokeLinecap="round" />
        <path d="M 10 58 L 15 63 L 24 54" fill="none" stroke="#87FB2B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="30" y1="58" x2="44" y2="58" stroke="#092610" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* ================================================================= */}
      {/* 6. THREE ROSETTE AWARD MEDALS / RIBBONS                          */}
      {/* ================================================================= */}
      <g className="burst-float" style={{ animationDelay: '0.6s' }} transform="translate(365, 75)">
        <path d="M 20 44 L 10 86 L 26 76 L 34 86 L 30 44" fill="#87FB2B" stroke="#092610" strokeWidth="4" strokeLinejoin="round" />
        <path d="M 44 44 L 38 86 L 52 76 L 66 86 L 54 44" fill="#87FB2B" stroke="#092610" strokeWidth="4" strokeLinejoin="round" />

        <g>
          {Array.from({ length: 12 }).map((_, idx) => {
            const angle = (idx * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            const cx = 37 + Math.cos(rad) * 27;
            const cy = 37 + Math.sin(rad) * 27;
            return (
              <circle
                key={idx}
                cx={cx}
                cy={cy}
                r="10.5"
                fill="#87FB2B"
                stroke="#092610"
                strokeWidth="4"
              />
            );
          })}
        </g>

        <circle cx="37" cy="37" r="25" fill="#87FB2B" stroke="#092610" strokeWidth="4.5" />
        <circle cx="37" cy="37" r="19" fill="#FFFFFF" stroke="#092610" strokeWidth="3" />

        <polygon
          points="37,22 40,30 48,31 42,37 44,45 37,41 30,45 32,37 26,31 34,30"
          fill="#87FB2B"
          stroke="#092610"
          strokeWidth="2.5"
        />
      </g>

      <g className="burst-float" style={{ animationDelay: '1.4s' }} transform="translate(525, 15)">
        <path d="M 16 38 L 8 76 L 22 68 L 30 76 L 26 38" fill="#87FB2B" stroke="#092610" strokeWidth="4" strokeLinejoin="round" />
        <path d="M 38 38 L 32 76 L 46 68 L 58 76 L 48 38" fill="#87FB2B" stroke="#092610" strokeWidth="4" strokeLinejoin="round" />

        <g>
          {Array.from({ length: 10 }).map((_, idx) => {
            const angle = (idx * 360) / 10;
            const rad = (angle * Math.PI) / 180;
            const cx = 32 + Math.cos(rad) * 24;
            const cy = 32 + Math.sin(rad) * 24;
            return (
              <circle
                key={idx}
                cx={cx}
                cy={cy}
                r="10"
                fill="#87FB2B"
                stroke="#092610"
                strokeWidth="4"
              />
            );
          })}
        </g>

        <circle cx="32" cy="32" r="22" fill="#87FB2B" stroke="#092610" strokeWidth="4" />
        <circle cx="32" cy="32" r="16" fill="#FFFFFF" stroke="#092610" strokeWidth="3" />

        <path
          d="M 24 32 L 29 37 L 40 25"
          fill="none"
          stroke="#092610"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <g className="burst-float" style={{ animationDelay: '1.8s' }} transform="translate(525, 95)">
        <path d="M 15 38 L 8 72 L 22 64 L 28 72 L 24 38" fill="#87FB2B" stroke="#092610" strokeWidth="4" strokeLinejoin="round" />
        <path d="M 36 38 L 30 72 L 42 64 L 54 72 L 44 38" fill="#87FB2B" stroke="#092610" strokeWidth="4" strokeLinejoin="round" />

        <g>
          {Array.from({ length: 10 }).map((_, idx) => {
            const angle = (idx * 360) / 10;
            const rad = (angle * Math.PI) / 180;
            const cx = 30 + Math.cos(rad) * 22;
            const cy = 30 + Math.sin(rad) * 22;
            return (
              <circle
                key={idx}
                cx={cx}
                cy={cy}
                r="9"
                fill="#87FB2B"
                stroke="#092610"
                strokeWidth="4"
              />
            );
          })}
        </g>

        <circle cx="30" cy="30" r="20" fill="#87FB2B" stroke="#092610" strokeWidth="4" />
        <circle cx="30" cy="30" r="14" fill="#FFFFFF" stroke="#092610" strokeWidth="2.5" />
        <polygon
          points="30,21 32,26 37,27 33,31 34,36 30,33 26,36 27,31 23,27 28,26"
          fill="#87FB2B"
          stroke="#092610"
          strokeWidth="2"
        />
      </g>

      {/* ================================================================= */}
      {/* 7. CIRCULAR CHECKMARK BADGE (✓)                                  */}
      {/* ================================================================= */}
      <g className="burst-pulse" transform="translate(370, 185)">
        <circle cx="20" cy="20" r="20" fill="#87FB2B" stroke="#092610" strokeWidth="4.5" />
        <path
          d="M 11 20 L 18 27 L 30 13"
          fill="none"
          stroke="#092610"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* ================================================================= */}
      {/* 8. TROPHY CUP (FAR RIGHT)                                        */}
      {/* ================================================================= */}
      <g className="burst-float" style={{ animationDelay: '1.5s' }} transform="translate(710, 80)">
        <path
          d="M 16 18 C 0 18, 0 40, 16 42"
          fill="none"
          stroke="#092610"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M 52 18 C 68 18, 68 40, 52 42"
          fill="none"
          stroke="#092610"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        <path
          d="M 14 12 L 54 12 L 50 48 C 48 62, 20 62, 18 48 Z"
          fill="#87FB2B"
          stroke="#092610"
          strokeWidth="4.5"
          strokeLinejoin="round"
        />

        <polygon
          points="34,24 36,29 41,29 37,33 39,38 34,35 29,38 31,33 27,29 32,29"
          fill="#FFFFFF"
          stroke="#092610"
          strokeWidth="2.5"
        />

        <rect x="30" y="54" width="8" height="14" fill="#87FB2B" stroke="#092610" strokeWidth="4" />

        <path
          d="M 20 68 L 48 68 L 52 78 L 16 78 Z"
          fill="#87FB2B"
          stroke="#092610"
          strokeWidth="4.5"
          strokeLinejoin="round"
        />
      </g>

      {/* ================================================================= */}
      {/* 9. SCATTERED BURST STARS & PLUS SIGNS                            */}
      {/* ================================================================= */}
      <g className="burst-pulse" transform="translate(340, 45)">
        <polygon
          points="0,-14 4,-4 14,-4 6,3 9,12 0,7 -9,12 -6,3 -14,-4 -4,-4"
          fill="#87FB2B"
          stroke="#092610"
          strokeWidth="3.5"
        />
      </g>
      <g className="burst-pulse" style={{ animationDelay: '1s' }} transform="translate(585, 30)">
        <polygon
          points="0,-15 4,-5 15,-5 6,3 9,13 0,8 -9,13 -6,3 -15,-5 -4,-5"
          fill="#87FB2B"
          stroke="#092610"
          strokeWidth="4"
        />
      </g>
      <g className="burst-pulse" style={{ animationDelay: '0.7s' }} transform="translate(675, 95)">
        <polygon
          points="0,-12 3,-4 12,-4 5,2 7,10 0,6 -7,10 -5,2 -12,-4 -3,-4"
          fill="#87FB2B"
          stroke="#092610"
          strokeWidth="3"
        />
      </g>

      <path d="M 405 60 L 405 74 M 398 67 L 412 67" stroke="#092610" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 645 25 L 645 39 M 638 32 L 652 32" stroke="#87FB2B" strokeWidth="4" strokeLinecap="round" />
      <path d="M 760 170 L 760 184 M 753 177 L 767 177" stroke="#092610" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
};
