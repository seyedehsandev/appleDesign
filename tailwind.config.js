/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
       "navbg" : "rgba(22, 22, 23, .8)" , 
       "btncolor" : "#0071e3"
       
      } , 
      screens: {

        'md': '834px',
      } ,
      backgroundImage: {
        'hero-pattern': "url('./images/iphone16.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}