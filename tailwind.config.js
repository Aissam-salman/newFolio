/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-to-156':
            'linear-gradient(156deg, rgba(33,0,60,1) 0%, rgba(56,4,96,1) 43%, rgba(74,0,196,0.9317927854735644) 100%);',
      })
    },
  },
  plugins: [],
}

