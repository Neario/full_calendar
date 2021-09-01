module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: ['./main.js'],
  },
  prefix: 'tw-',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      display: ['checked', 'hover'],
    }
  },
  plugins: [],
}