/** @type {import('tailwindcss').Config} */
require('tailwind-scrollbar')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobsm: '200px',
      mobmd: '350px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      display: {
        unhid: ''
      },
    },
    extend: {
      "colors":{
        "exer": {
          "charcoal" : "#0D2734",
          "gunmetal" : "#15394A",
          "darkelectricblue" : "#1C465C",
          "grayblue" : "#527182",
          "gray" : "#BFC8CE",
          "whitegray" : "#D9D9D9",
          "whiteaccent" : "#F5F5F5",
          "white" : "#FAFAFA"
        }
      },
      fontFamily: {
        poppins : ["Poppins", "sans-serif"],
        inter : ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}