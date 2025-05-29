/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        pink: {
          500: '#EC4899',
          600: '#DB2777',
        },
      },
    },
  },
  plugins: [],
}

