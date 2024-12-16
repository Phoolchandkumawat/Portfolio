/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Leckerli":["Satisfy"], 
        "Vollkorn":["Vollkorn"], 
        "Garamond":["EB Garamond"],
        
      }
    },
  },
  plugins: [],
}