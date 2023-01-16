const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extends: {
      fontFamily: {
        'sans': ['Inter'],
        'display': ['Titillium Web'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}