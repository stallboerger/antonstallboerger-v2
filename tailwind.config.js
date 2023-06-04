/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.mdx',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        sans: ['Space-Grotesk', 'sans-serif'],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
}
