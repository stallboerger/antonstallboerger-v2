/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.mdx',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'titan': {
          '50': '#f2f2f2',
          '100': '#e6e6e6',
          '200': '#cccccc',
          '300': '#b3b3b3',
          '400': '#999999',
          '500': '#808080',
          '600': '#666666',
          '700': '#4d4d4d',
          '800': '#333333',
          '900': '#1a1a1a',
          '950': '#0d0d0d',
        },
        'sand': {
          '100': '#fdfdfc',
          '200': '#f9f9f8',
          '300': '#f1f0ef',
          '400': '#e9e8e6',
          '500': '#e2e1de',
          '600': '#dad9d6',
          '700': '#cfceca',
          '800': '#bcbbb5',
          '900': '#8d8d86',
          '1000': '#82827c',
          '1100': '#63635e',
          '1200': '#21201c',
        },
        'sand-dark': {
          '100': '#111110',
          '200': '#191918',
          '300': '#222221',
          '400': '#2a2a28',
          '500': '#31312e',
          '600': '#3b3a37',
          '700': '#494844',
          '800': '#62605b',
          '900': '#6f6d66',
          '1000': '#7c7b74',
          '1100': '#b5b3ad',
          '1200': '#eeeeec',
        }, 
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        sans: ['soehne', 'sans-serif'],
        serif: ['Bradford Trial', 'serif']
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
}
