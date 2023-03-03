/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    container: {
        center:true,
        padding: '16px',
      },  
    extend: {
      width: {
        '90': '21.5rem',
        '110': '34rem',
      },
      height: {
        '90': '12,125rem',
        '110': '19,125rem',
      },
      colors: {
        'premier': '#181C25',
        'graan':'#2DCAA7',
        'graan2': '#2BAA8E',
      },
      fontFamily: {
        IBM : "'IBM Plex Mono', monospace",
        IBMS : "'IBM Plex Sans', sans-serif",
      },
    },
  },
  plugins: [],
}
