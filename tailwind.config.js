/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d1dbe7',
          300: '#a7bcd3',
          400: '#7797bc',
          500: '#5478a3',
          600: '#1a365d',
          700: '#162e4d',
          800: '#142943',
          900: '#12243a',
          950: '#0c1725',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};