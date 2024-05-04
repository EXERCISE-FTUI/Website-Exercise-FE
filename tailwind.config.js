/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
          "white" : "FAFAFA"
        }
      },
      fontFamily: {
        poppins : ["Poppins", "sans-serif"],
        inter : ["Inter", ""]
      },
    },
  },
  plugins: [],
}