/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.mdx',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
}
