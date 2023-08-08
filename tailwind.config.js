/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#ffcc00',
        darkPrimary: '#ff8100',
        semiDark: '#272726',
        dark: '#1a1a19',
        white: '#ffffff',
        darkenWhite: '#ededed',
      },
    },
    fontFamily: {
      signature: ["OCRAExtended"],
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    // ...
    scrollbar: ['dark']
  }
}
