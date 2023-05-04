const tailwindcss = require('tailwindcss')
const eachInMap = require('postcss-each-in-map')

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-each': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': false 
      },
    },
  },
}
