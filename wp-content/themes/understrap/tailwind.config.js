/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: require('fast-glob').sync([
    "./*.php",
    "./page-templates/*.php",
    "./partials/**/*.php",
    "./js/**/*.{js, vue}"
  ]),
  theme: {
    screens: {

    },
    fontFamily: {
      'sans': ['OpenSans-Regular', ...defaultTheme.fontFamily.sans],
      'open-bold': ['OpenSans-SemiBold'],
      'montserrat-regular': ['montserrat-regular'],
      'montserrat-regular': ['montserrat-medium'],
      'montserrat-bold': ['montserrat-bold'],
      'montserrat-semibold': ['montserrat-semibold'],
      'montserrat-extrabold': ['montserrat-extrabold'],
    },
    colors: {
      'transparent': '#0000',
      current: 'currentColor',
      'black': '#222222',
      'white': '#ffffff',
      'bright-white': '#F4F9FF',
      'arctic-ice': '#BFC7D6',
      'cerulian': '#9BB7D4',
      'velvet-morning': '#60688D',
      'black-beauty': '#27272A',
      'viva-magenta': {
        light: '#d94567',
        DEFAULT: '#bb2649',
        dark: '#7f1a32'
      }
    },
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '954px',
        'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1536px',
      }
    },
  },
  plugins: [
    
  ],
}
