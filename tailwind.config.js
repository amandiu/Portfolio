/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'hero-pattern': "url('./public/peakpx.jpg')",
        'footer-texture': "url('./public/peakpx.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

