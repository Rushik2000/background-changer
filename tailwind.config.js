/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        noto: ['"Noto Sans Devanagari"', 'sans-serif'],
        hind: ['"Hind"', 'sans-serif'],
        mukta: ['"Mukta"', 'sans-serif'],
        baloo: ['"Baloo Bhaijaan 2"', 'cursive'],
        tiro: ['"Tiro Devanagari Marathi"', 'serif'],
      },
    },
  },
  plugins: [],
}

