/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryCrimson: '#B80934',
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
    'nav-link'
  ]
}
