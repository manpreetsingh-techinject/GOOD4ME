/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1400px',
        'sm2': '780px',
        'sm11': '1195px',
        'lg11': '1107px',
        'sm9': '930px',
        'sm8': '800px',
        'sm59': '590px',
        'sm52': '520px',
        'sm42': '420px',
        'sm12': '1225px',
      },
    },
  },
  plugins: [],
}

