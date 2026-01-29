const { background } = require("./assets");

// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        moderniz: ['Moderniz', 'sans-serif'],
        bauhaus: ['Bauhaus93', 'sans-serif'],
      },
      keyframes: {
        bounceSmooth: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        bounceSmooth: 'bounceSmooth 1.2s ease-in-out infinite',
        marquee: 'marquee 18s linear infinite',
      },
      colors:{
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        title: "rgba(var(--title))",
        subtitle: "rgba(var(--subtitle))",
        overview: "rgba(var(--overview))",
        iconcolor: "rgba(var(--iconcolor))",
        description: "rgba(var(--description))",
      }
    },
  },
  plugins: [],
};