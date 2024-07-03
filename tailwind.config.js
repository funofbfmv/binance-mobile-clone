/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        binanceBackground: '#181A20',
      },
      fontFamily: {
        'regular': ['BinancePlex-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}