/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {
      sm: '375px',
      lg: '1440px'
    },
    extend: {
      colors: {
        primary: 'hsl(9, 100%, 63%)',
        secondary: 'hsl(204, 16%, 26%)',
        gradiantFrom: 'rgba(32, 43, 51, 0.4)',
        gradiantTo: 'rgba(32, 43, 51, 0.1)',
        focusColor: 'rgba(236, 46, 0, 0.5)',
      },
      fontFamily: {
        overPass: ['Overpass', 'sans-serif'],
      },
      fontWeight: {
        thin: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
}

