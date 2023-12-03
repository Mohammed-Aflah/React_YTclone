/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bgyt':'#0f0f0f',
        'tag':'#272727'
      }
    },
    // screens:{
    //   'tb':'660px'
    // }
  },
  plugins: [],
}