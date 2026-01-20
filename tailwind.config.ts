import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ... keep your existing colors, fonts, etc. ...
      colors: {
        primary: {
          DEFAULT: '#EF3A33',
          dark: '#D42F28',
          soft: '#E87570',
        },
        black: '#1A1A1A',
        charcoal: '#2D2D2D',
        vapor: '#F7FAFC',
        grey: '#666666',
        gold: {
          DEFAULT: '#E5C576',
          light: '#F0D999',
        },
      },
      // ... keep other settings ...
      
      // ADD THIS SECTION
      keyframes: {
        // Keep your existing keyframes if you want, but add blur-in
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // NEW BLUR ANIMATION
        'blur-in': {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
      },
      animation: {
        // Keep existing
        'fade-in': 'fadeIn 0.6s ease-out',
        // NEW ANIMATION UTILITY
        'blur-in': 'blur-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
    },
  },
  plugins: [],
}

export default config