import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EF3A33',
          dark: '#D42F28',
          soft: '#E87570', // Softer red for CTA sections
        },
        black: '#1A1A1A',
        charcoal: '#2D2D2D',
        vapor: '#F7FAFC',
        grey: '#666666',
        gold: {
          DEFAULT: '#E5C576', // Brighter, more vibrant gold
          light: '#F0D999', // Light gold for gradients
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['60px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['42px', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['22px', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '4rem',
        'xl': '8rem',
      },
      /* Design System Border Radius */
      borderRadius: {
        'main': '32px',        // Primary cards, containers
        'button': '12px',      // All buttons
        'card': '32px',        // Service/capability cards
        'overlay': '32px',     // Image overlays
        'cta': '32px',         // CTA containers
        'input': '12px',       // Form inputs
        'small': '8px',        // Small elements
        // Keep legacy values for backwards compatibility
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
      },
      /* Card System for Consistent Symmetry */
      minHeight: {
        'card': '280px',       // Ensures all cards have minimum height
        'card-tall': '360px',  // For cards needing more vertical space
      },
      aspectRatio: {
        'card': '1.5',         // 3:2 ratio for consistent card proportions
      },
      transitionDuration: {
        'fast': '200ms',
        'medium': '400ms',
        'slow': '800ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(180deg, #1A1A1A 0%, #2D2D2D 100%)',
        'red-gradient': 'linear-gradient(135deg, #EF3A33 0%, #D42F28 100%)',
      },
    },
  },
  plugins: [],
}

export default config
