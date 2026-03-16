/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['"Merriweather Sans"', 'sans-serif'],
        jakarta:      ['"Plus Jakarta Sans"', 'sans-serif'],
        inter:        ['Inter', 'sans-serif'],
        roboto:       ['Roboto', 'sans-serif'],
        segoe:        ['"Segoe UI"', 'sans-serif'],
      },
      colors: {
        brand:   '#42489E',
        'brand-light': '#E6E7F4',
        'brand-lighter': '#E6E7F3',
        pink:    '#BD1C6F',
        plum:    '#2D142D',
        orange:  '#F9A71E',
        page:    '#FFFDFF',
        ink:     '#131313',
        muted:   '#667085',
        subtle:  '#737373',
        grey2:   '#4B4B4B',
      },
    },
  },
  plugins: [],
}
