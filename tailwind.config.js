/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      'lg': '1162px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

     
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Bagelfat: ['"Bagel Fat One"', 'cursive'],
        Kanit: ['Kanit', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif']
      },
      boxShadow: {
        '3xl-inset': ' inset 0px -32px 11px -6px rgba(0,0,0,1)',
        'sm-inset': '0px 0px 200px 2rem black inset',
      }
    },
  },
  plugins: [],
}
