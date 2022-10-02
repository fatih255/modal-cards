/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.tsx',
    './pages/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
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
          red:{
            500:'#EA0F0F'
          }
        }
      },
      dropShadow: {
        'primary': '0px 5px 10px  rgba(125, 74, 234, 0.5)',
      }
    },
  },
  plugins: [],
}