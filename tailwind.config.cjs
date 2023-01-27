/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors:{
        'main-500':" #F1A501",
        'main-200':"#FFF1DA",
        'secondary-500':"#DF6951",
        "dark-green":"#006380"
      },
      backgroundImage:{
        "gradient-secondary":"linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)",
        "book-gradient":"radial-gradient(closest-side,#59B1E6, #fff);"
      },
      fontFamily:{
        poppins:['Poppins', "sans-serif"],
        volkhov:['Volkhov', "serif"],
      } 

    },
  },
  plugins: [],
}