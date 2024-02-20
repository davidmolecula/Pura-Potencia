/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '28rem',
        '85': '21rem'
      },
      
        colors: {
          'gris': '#333333',
          'gris-oscuro': '#232323',
          'glow':'#586597'
      },
      keyframes:{
        rebote: {
          '0%, 100%': { transform: 'translateY(-50px)' },
          '50%': { transform: 'translateY(0px)' },
        }
      }
    },
  },
  plugins: [],
}

