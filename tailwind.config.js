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
        'hero-mini': "url('./images/16promini.jpg')",
        'iphone': "url('/images/ooo.jpg')",
        'iphone16mini': "url('/images/iphone16mini.jpg')",
        'watch': "url('/images/watch.jpg')",
        'airpod': "url('/images/airpodmini.jpg')",
        'watchmobile': "url('/images/watchmobile.jpg')",




        
      }
    },
  },
  plugins: [],
}