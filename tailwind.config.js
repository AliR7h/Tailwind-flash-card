const { initFlowbite } = require('flowbite');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  darkMode : "class",
  theme: {

    fontFamily : {
      "dana" : "Dana",
      "danaBold" : "Dana Bold"
    },
    screens : {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      spacing: {
        "22" :"88px"
      },
      colors: {
        "primary": {
          DEFAULT :"#f1c40f",
          100:"#e67e22",
          200:"#d35400",
          "LIGHTER" :"#e74c3c"
        }
      }
    },
  },
  plugins: [
    require ('flowbite/plugin')
    ],
}

