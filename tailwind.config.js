/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'smbelow': { max: '639px' },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        barriecito: ['Barriecito', 'cursive'],
        handjet: ['Handjet', 'cursive'],
        Rubik: ['Rubik'],
        Rajdhani: ['Rajdhani', 'cursive'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 600,
        extraBold: 800
      },
    },
  },
  plugins: [],
}
