/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        primaryColor: '#05014a',
        seconderyColor: '#ee6e17',
      },
      fontFamily: {
        lobster: ["Lobster", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    }, // Close extend here
  }, // Close theme here
  plugins: [
    require('daisyui'),
  ],
}
