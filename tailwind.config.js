/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        fontFamily: {
          pthin: ["Poppins-Thin", "sans-serif"],
          pextralight: ["Poppins-ExtraLight", "sans-serif"],
          plight: ["Poppins-Light", "sans-serif"],
          pregular: ["Poppins-Regular", "sans-serif"],
          pbold: ["Poppins-Bold", "sans-serif"],
          pblack: ["Poppins-Black", "sans-serif"],
        },  
      }
    },
  },
  plugins: [],
}

