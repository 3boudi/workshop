/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#76F512',
          light: '#8EF735',
          dark: '#5ED408',
        },
        forest: {
          DEFAULT: '#093316',
          darkest: '#061A0C',
          dark: '#0D421C',
          mid: '#144F24',
          leaf: '#1A6B32',
          emerald: '#228B40',
          lime: '#4ADE80',
          mint: '#BBF7D0',
          light: '#DCFCE7',
          surface: '#F6FBF4',
        },
        muted: {
          DEFAULT: '#4A5D50',
          light: '#6E8475',
          border: '#E2ECE4',
        },
        gray: {
          faint: '#F6FBF4',
          accent: '#E2ECE4',
        },
        gdgc: {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC04',
          green: '#34A853',
          dark: '#2E2D42',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'brutal': '0 8px 0 #061A0C',
        'brutal-lg': '0 12px 0 #061A0C',
        'brutal-sm': '0 4px 0 #061A0C',
        'brutal-hover': '0 12px 0 #061A0C, 0 0 20px rgba(118, 245, 18, 0.4)',
        'sticker': '0 10px 20px -2px rgba(6, 26, 12, 0.16), 0 4px 8px -2px rgba(6, 26, 12, 0.1)',
        'sticker-hover': '0 18px 28px -4px rgba(118, 245, 18, 0.35), 0 8px 12px -2px rgba(6, 26, 12, 0.2)',
      },
      keyframes: {
        floatA: {
          '0%, 100%': { transform: 'translate3d(0, 0px, 0) rotate(var(--tw-rotate, 0deg))' },
          '50%': { transform: 'translate3d(0, -8px, 0) rotate(var(--tw-rotate, 0deg))' },
        },
        floatB: {
          '0%, 100%': { transform: 'translate3d(0, 0px, 0) rotate(var(--tw-rotate, 0deg))' },
          '50%': { transform: 'translate3d(0, 8px, 0) rotate(var(--tw-rotate, 0deg))' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.85', transform: 'scale3d(1, 1, 1)' },
          '50%': { opacity: '1', transform: 'scale3d(1.04, 1.04, 1)' },
        },
      },
      animation: {
        'float-a': 'floatA 4.5s ease-in-out infinite',
        'float-b': 'floatB 5.2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
