/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E9F0EA',
          100: '#D3E1D5',
          200: '#A8C3AB',
          300: '#7CA580',
          400: '#518656',
          500: '#2F5233', // Main primary color
          600: '#264229',
          700: '#1D321F',
          800: '#142115',
          900: '#0A110A',
        },
        secondary: {
          50: '#E9F3F6',
          100: '#D3E7ED',
          200: '#A7CFDB',
          300: '#7BB7C8',
          400: '#4F9FB6',
          500: '#4A90A4', // Main secondary color
          600: '#3B7383',
          700: '#2C5662',
          800: '#1E3A42',
          900: '#0F1D21',
        },
        accent: {
          50: '#FEF4ED',
          100: '#FCE9DB',
          200: '#F9D4B8',
          300: '#F6BE94',
          400: '#F3A971',
          500: '#F78C49', // Main accent color
          600: '#C6703A',
          700: '#94542C',
          800: '#63381D',
          900: '#311C0E',
        },
        background: '#F2F2F2',
        foreground: '#333333',
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        'screen-75': '75vh',
        'screen-80': '80vh',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};