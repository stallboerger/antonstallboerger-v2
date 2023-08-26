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
