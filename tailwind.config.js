/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  // dia langsung menimpa
  theme: {
    container:{
      center: true,
      padding: '16px',
    },

    extend: { // menambahkan fitur yg sudah dimiliki tailwind
      // add customize warna
      colors: {
        primary: '#14b8a6',
        darkblack: '#0f172a',
        secondary: '#64748b',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

