/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        user: 'repeat( auto-fit, minmax(400px, 1fr) )',
      },
    },
  },
  plugins: [],
};
