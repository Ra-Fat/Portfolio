// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'moderniz': ['Moderniz', 'sans-serif'],
        'bauhaus': ['Bauhaus93', 'sans-serif'],
      },
      keyframes: {
        bounceSmooth: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12%)' },
        },
      },
      animation: {
        bounceSmooth: 'bounceSmooth 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
