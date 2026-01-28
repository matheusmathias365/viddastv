/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        viddas: {
          blue: '#4B3621', // Marrom Café
          light: '#8D6E63', // Bronze/Marrom Claro
          accent: '#D4AF37', // Dourado
          gray: '#F5F5DC', // Bege
        }
      }
    }
  },
  plugins: [],
}