/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.tsx',
    './components/**/**/*.tsx',
    './stories/**/*.tsx',
    './pages/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#7D4AEA',
        design: {
          gray: {
            100: '#F5F5F5',
            200: '#EAEAEA',
            300: '#D2DAE3',
            400: '#BBBBBB',
            500: '#DDDDDD',
            900: '#777777',
          },
          red: {
            500: '#EA0F0F',
          },
        },
      },
      dropShadow: {
        primary: '0px 5px 10px  rgba(125, 74, 234, 0.5)',
      },
      keyframes: {
        modalfadeIn: {
          '0%': { opacity: 0, transform: 'scale(0)' },
          '50%': { opacity: 0.7, transform: 'scale(1.14)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        modalfadeOut: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '30%': { opacity: 0.7, transform: 'scale(1.14)' },
          '100%': { opacity: 0, transform: 'scale(0)' },
        },
      },
      animation: {
        'fade-in': 'modalfadeIn 1s ease forwards ',
        'fade-out': 'modalfadeOut .6s ease forwards  ',
      },
    },
  },
  plugins: []
}
