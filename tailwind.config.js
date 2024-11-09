/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple' : '#1E0342',
        'button-color': '#212121',
        'my-yellow' : '#FBCA1F',
        'my-green' : '#0a9b18'
      }
    },
  },
  plugins: [],
}