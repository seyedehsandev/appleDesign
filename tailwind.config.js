/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
       navbg : "rgba(22, 22, 23, .8)"
      } , 
      screens: {

        'md': '834px',
      }
    },
  },
  plugins: [],
}