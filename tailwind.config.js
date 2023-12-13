/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'Primary': '#01204C',
    },
    fontFamily: {
      'sans': ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      'nunito': ["Nunito", 'sans-serif']
    },
  },
  plugins: [],
}

