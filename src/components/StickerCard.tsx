import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { animate } from 'animejs';
import { StickerItem } from '../data/stickersData';

interface StickerCardProps {
  sticker: StickerItem;
  isAnimated: boolean;
  onSelect?: (sticker: StickerItem) => void;
  size?: 'sm' | 'md' | 'lg';
}

export const StickerCard: React.FC<StickerCardProps> = ({
  sticker,
  isAnimated,
  onSelect,
  size = 'md',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const sizeClass = {
    sm: 'w-[84px] xs:w-[88px] sm:w-28 md:w-32',
    md: 'w-20 xs:w-28 sm:w-40 md:w-44',
    lg: 'w-24 xs:w-36 sm:w-48 md:w-52',
  }[size];

  const handleClick = () => {
    // Anime.js v4 spring wobble on click for physical sticker tactile feel
    if (cardRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animate(cardRef.current, {
        rotate: [
          sticker.tiltDeg,
          sticker.tiltDeg - 8,
          sticker.tiltDeg + 6,
          sticker.tiltDeg - 3,
          sticker.tiltDeg,
        ],
        scale: [1, 1.12, 0.96, 1.02, 1],
        duration: 650,
        ease: 'outElastic(1, .45)',
      });
    }

    onSelect?.(sticker);
  };

  return (
    <div
      className={`relative inline-block gpu-layer ${
        isAnimated ? sticker.floatAnimation : ''
      }`}
      style={{
        animationDelay: sticker.floatDelay,
        animationPlayState: isAnimated && !isHovered ? 'running' : 'paused',
        contain: 'layout style',
      }}
    >
      <motion.div
        ref={cardRef}
        className="relative inline-block die-cut-sticker cursor-pointer select-none gpu-layer group"
        initial={{ rotate: sticker.tiltDeg, scale: 1, y: 0 }}
        whileHover={{
          rotate: sticker.hoverTiltDeg,
          scale: 1.08,
          y: -8,
          transition: { type: 'spring', stiffness: 450, damping: 22 },
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          filter: isHovered
            ? 'drop-shadow(0 18px 24px rgba(6, 26, 12, 0.28)) drop-shadow(0 0 16px rgba(118, 245, 18, 0.5))'
            : 'drop-shadow(0 8px 12px rgba(6, 26, 12, 0.16))',
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        title={`${sticker.title} — ${sticker.role}`}
      >
        {renderWorkshopSticker(sticker.id, sizeClass)}

        {/* Tactile Popover Tagline Badge via Motion AnimatePresence */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.9, x: '-50%' }}
              animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
              exit={{ opacity: 0, y: 4, scale: 0.9, x: '-50%' }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              className="absolute -bottom-8 left-1/2 z-30 pointer-events-none whitespace-nowrap bg-forest-darkest text-neon text-[11px] font-black px-3 py-1 rounded-full shadow-brutal border border-neon"
            >
              {sticker.tagline}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// Render each workshop tool die-cut sticker
function renderWorkshopSticker(id: string, sizeClass: string) {
  switch (id) {
    case 'opencode':
      return (
        <svg
          viewBox="0 0 190 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${sizeClass} h-auto select-none`}
        >
          {/* Thick White Die-Cut Contour */}
          <path
            d="M 28 14 C 28 8, 34 2, 42 2 L 148 2 C 156 2, 162 8, 162 14 L 162 90 C 174 94, 184 104, 184 116 C 184 130, 172 140, 156 140 L 34 140 C 18 140, 6 130, 6 116 C 6 104, 16 94, 28 90 Z"
            fill="#FFFFFF"
            stroke="#093316"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <rect x="36" y="12" width="118" height="78" rx="12" fill="#093316" stroke="#093316" strokeWidth="3.5" />
          <circle cx="50" cy="24" r="3.5" fill="#76F512" />
          <circle cx="61" cy="24" r="3.5" fill="#76F512" />
          <circle cx="72" cy="24" r="3.5" fill="#76F512" />
          <line x1="38" y1="32" x2="152" y2="32" stroke="#0D421C" strokeWidth="2" />
          <path d="M 75 44 L 59 56 L 75 68" stroke="#76F512" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 87 72 L 103 40" stroke="#76F512" strokeWidth="5" strokeLinecap="round" />
          <path d="M 115 44 L 131 56 L 115 68" stroke="#76F512" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="95" y="124" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="21" letterSpacing="0.06em" fill="#061A0C">
            OPENCODE
          </text>
        </svg>
      );

    case 'vscode':
      return (
        <svg
          viewBox="0 0 180 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${sizeClass} h-auto select-none`}
        >
          {/* Die-Cut Neon Lime Contour */}
          <path
            d="M 32 18 C 22 24, 18 36, 24 48 L 42 76 C 34 84, 20 92, 20 106 C 20 126, 36 138, 62 138 L 122 138 C 148 138, 164 126, 164 106 C 164 92, 154 84, 144 76 L 158 50 C 164 36, 154 18, 134 10 L 92 4 C 68 0, 44 6, 32 18 Z"
            fill="#76F512"
            stroke="#093316"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <g transform="translate(54, 14) scale(3.0)">
            <path
              d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
              fill="#093316"
              stroke="#093316"
              strokeWidth="0.5"
            />
          </g>
          <text x="90" y="126" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="21" letterSpacing="0.08em" fill="#061A0C">
            VSCODE
          </text>
        </svg>
      );

    case 'claude':
      return (
        <svg
          viewBox="0 0 170 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${sizeClass} h-auto select-none`}
        >
          <path
            d="M 44 14 C 32 20, 20 38, 22 56 C 16 66, 12 84, 18 98 C 24 116, 40 134, 68 134 L 102 134 C 130 134, 146 116, 152 98 C 158 84, 154 66, 148 56 C 150 38, 138 20, 126 14 C 106 4, 64 4, 44 14 Z"
            fill="#76F512"
            stroke="#093316"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <g transform="translate(48, 16) scale(3.1)">
            <path
              d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
              fill="#093316"
            />
          </g>
          <text x="85" y="120" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="22" letterSpacing="0.08em" fill="#061A0C">
            CLAUDE
          </text>
        </svg>
      );

    case 'react':
      return (
        <svg
          viewBox="0 0 170 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${sizeClass} h-auto select-none`}
        >
          {/* Die-Cut White Contour */}
          <path
            d="M 36 14 C 20 22, 12 40, 12 60 C 12 80, 20 98, 36 106 L 50 114 C 60 134, 80 140, 100 140 C 124 140, 146 128, 156 108 C 166 94, 166 76, 160 56 C 154 36, 138 18, 116 10 C 94 2, 54 4, 36 14 Z"
            fill="#FFFFFF"
            stroke="#093316"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* React Atom Symbol */}
          <g transform="translate(85, 52) scale(2.2)">
            <ellipse cx="0" cy="0" rx="16" ry="6" stroke="#093316" strokeWidth="2.2" fill="none" />
            <ellipse cx="0" cy="0" rx="16" ry="6" stroke="#093316" strokeWidth="2.2" fill="none" transform="rotate(60)" />
            <ellipse cx="0" cy="0" rx="16" ry="6" stroke="#093316" strokeWidth="2.2" fill="none" transform="rotate(120)" />
            <circle cx="0" cy="0" r="3.5" fill="#76F512" stroke="#093316" strokeWidth="1.5" />
          </g>
          <text x="85" y="124" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="22" letterSpacing="0.08em" fill="#061A0C">
            REACT
          </text>
        </svg>
      );

    case 'supabase':
      return (
        <svg
          viewBox="0 0 175 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${sizeClass} h-auto select-none`}
        >
          {/* Die-Cut Neon Lime Contour */}
          <path
            d="M 34 16 C 18 26, 10 46, 12 66 C 14 86, 26 104, 46 116 L 68 136 C 88 144, 112 140, 130 130 C 148 118, 160 98, 162 76 C 164 54, 152 32, 134 18 C 114 4, 60 4, 34 16 Z"
            fill="#76F512"
            stroke="#093316"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Supabase Lightning Bolt Vector */}
          <g transform="translate(54, 12) scale(2.8)">
            <path
              d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"
              fill="#093316"
              stroke="#093316"
              strokeWidth="0.5"
            />
          </g>
          <text x="88" y="126" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="19" letterSpacing="0.06em" fill="#061A0C">
            SUPABASE
          </text>
        </svg>
      );

    case 'git':
      return (
        <svg
          viewBox="0 0 175 105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${sizeClass} h-auto select-none`}
        >
          <path
            d="M 44 6 L 80 42 L 95 32 C 105 24, 120 22, 140 22 C 160 22, 172 32, 172 50 C 172 68, 160 80, 140 80 L 95 80 L 80 94 L 44 98 L 8 62 C 0 54, 0 42, 8 34 Z"
            fill="#76F512"
            stroke="#093316"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <g transform="translate(18, 18) scale(2.8)">
            <path
              d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
              fill="#093316"
              stroke="#093316"
              strokeWidth="0.5"
            />
          </g>
          <text x="126" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="30" letterSpacing="0.06em" fill="#061A0C">
            GIT
          </text>
        </svg>
      );

    case 'github':
      return (
        <svg
          viewBox="0 0 160 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${sizeClass} h-auto select-none`}
        >
          <path
            d="M 40 10 C 56 2, 104 2, 120 10 C 142 22, 150 48, 150 68 C 150 94, 142 110, 126 122 C 112 130, 48 130, 34 122 C 18 110, 10 94, 10 68 C 10 48, 18 22, 40 10 Z"
            fill="#FFFFFF"
            stroke="#093316"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <rect x="18" y="14" width="124" height="104" rx="52" fill="#093316" stroke="#093316" strokeWidth="2" />
          <g transform="translate(53, 20) scale(2.25)">
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="#FFFFFF"
            />
          </g>
          <text x="80" y="102" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="18" letterSpacing="0.06em" fill="#FFFFFF">
            GITHUB
          </text>
        </svg>
      );

    case 'netlify':
      return (
        <svg
          viewBox="0 0 170 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${sizeClass} h-auto select-none`}
        >
          {/* Die-Cut Neon Lime Contour */}
          <path
            d="M 38 14 C 20 24, 12 44, 12 66 C 12 88, 22 108, 42 120 L 64 136 C 84 144, 110 142, 128 130 C 146 118, 158 98, 160 76 C 162 54, 150 32, 132 18 C 112 4, 60 4, 38 14 Z"
            fill="#76F512"
            stroke="#093316"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Netlify Logo Vector */}
          <g transform="translate(50, 16) scale(2.9)">
            <path
              d="M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z"
              fill="#093316"
              stroke="#093316"
              strokeWidth="0.5"
            />
          </g>
          <text x="85" y="124" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="20" letterSpacing="0.06em" fill="#061A0C">
            NETLIFY
          </text>
        </svg>
      );

    default:
      return null;
  }
}
