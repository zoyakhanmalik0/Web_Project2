/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
<<<<<<< HEAD
        sans: ['Inter', 'system-ui', 'sans-serif'],
=======
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
>>>>>>> 29315eba2c5bc29fd4346b14f556d43799944b1e
      },
      colors: {
        default: '#EF4444',
        blackfade2: '#212121',
        'blackfade2-40': 'rgba(33, 33, 33, 0.4)',
        'blackfade2-70': 'rgba(33, 33, 33, 0.7)',
      },
      animation: {
        'spin-grow': 'spin-grow 2s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'float-1': 'float-1 6s ease-in-out infinite',
        'float-2': 'float-2 8s ease-in-out infinite',
        'float-3': 'float-3 10s ease-in-out infinite',
      },
      keyframes: {
        'spin-grow': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'float-1': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(-180deg)' },
        },
        'float-3': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};