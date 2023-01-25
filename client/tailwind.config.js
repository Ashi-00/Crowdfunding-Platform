/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
        navbar: '10px 10px 20px rgba(2, 2, 2, 0.80)',
      },
      backgroundImage: {
        campaignProgress: "url(https://media.tenor.com/aV0h3VAHWUAAAAAC/gradient.gif)",
      },
      screens: {
        'tiny': { 
          'max': '390px' 
        },
        'mobile': { 
          'max': '425px' 
        },
        'mobile-s': { 
          'max': '320px' 
        },
        'mobile-m': { 
          'max': '375px' 
        },
        'tablet': { 
          'min': '768px' 
        },
        'laptop': { 
          'min': '1024px' 
        },
        'laptop-l': { 
          'min': '1140px' 
        },
        '4k': { 
          'max': '2560px' 
        },
        'mobile2': { 
          'min': '641px', 'max': '1028px' 
        },
        'mobile3': { 
          'min': '641px', 'max': '767px' 
        },
      },
    },
  },
  plugins: [],
}
