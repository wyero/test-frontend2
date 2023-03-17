/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Open-Sans', 'sans-serif']
      },
      fontWeight:{
        500: '500',
        600: '600',
        700: '700',
        800: '800'
      }
    },
  },
  plugins: [ require('@tailwindcss/line-clamp'),],
}
