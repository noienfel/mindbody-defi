/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Correct wildcard syntax to scan all files in subdirectories
  ],
  theme: {
    extend: {
      colors: {
        verdeBotao: '#87D68D',
        corTexto: '#8491A3',
        cardColor: '#BCEBCB',
        footerBg: '#8491A3',
        copyright:'#545C67'
      },
    },
  },
  daisyui: {
    themes: ["light"]
  },
  variants: {},
  plugins: [
    require('daisyui'),
  ],
}
