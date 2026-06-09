/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brandColor: '#002454',
      },
      keyframes: {
        'gradient-flow': {
          '0%': { 'background-position': '200% center' },
          '100%': { 'background-position': '0% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }, // 위로 6px만큼 부드럽게 들려 올라감
        }
      },
      animation: {
        'gradient-flow': 'gradient-flow 3s linear infinite',
        'bounce-slow': 'float 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}