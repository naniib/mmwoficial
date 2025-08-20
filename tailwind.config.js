
// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Hacemos que 'Poppins' sea la fuente por defecto de todo el proyecto
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}