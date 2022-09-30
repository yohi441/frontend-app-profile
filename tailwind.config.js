/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryCrimson: '#B80934',
        primaryNavy: '#120C45',
      },
    },
  },
  plugins: [],
  prefix: 'tw-',
  corePlugins: {
    preflight: false
  },
  important: true,
  safelist: [
    'nav-link',
    'menu'
  ]
}
