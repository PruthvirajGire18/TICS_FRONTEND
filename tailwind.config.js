/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003BA4',
          dark: '#002A7A',
          light: '#0048C7'
        },
        secondary: {
          DEFAULT: '#00A2FF',
          dark: '#003BA4',
          light: '#00B8FF'
        },
        accent: {
          DEFAULT: '#00FFC4',
          dark: '#00CC9D',
          light: '#33FFD1'
        },
        cloud: {
          white: '#F5F8FF',
          gray: '#E8EDF5',
          dark: '#1A1F2E'
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'Poppins', 'sans-serif'],
        body: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00A2FF 0%, #003BA4 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00FFC4 0%, #00A2FF 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(0, 162, 255, 0.3) 0%, transparent 70%)',
        'gradient-accent-glow': 'radial-gradient(circle at center, rgba(0, 255, 196, 0.4) 0%, transparent 70%)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'glass-dark': 'linear-gradient(135deg, rgba(0, 59, 164, 0.1) 0%, rgba(0, 59, 164, 0.05) 100%)',
        'network': 'radial-gradient(circle, rgba(0, 255, 196, 0.1) 1px, transparent 1px)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 162, 255, 0.4)',
        'glow-lg': '0 0 40px rgba(0, 162, 255, 0.5)',
        'glow-accent': '0 0 30px rgba(0, 255, 196, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'premium': '0 20px 60px rgba(0, 59, 164, 0.15)',
        'premium-lg': '0 30px 80px rgba(0, 59, 164, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-accent': 'glow-accent 3s ease-in-out infinite alternate',
        'slide': 'slide 30s linear infinite',
        'slide-fast': 'slide 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 162, 255, 0.4)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 162, 255, 0.6)' },
        },
        'glow-accent': {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 196, 0.4)' },
          '100%': { boxShadow: '0 0 50px rgba(0, 255, 196, 0.7)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(-10px) scaleY(1.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}

