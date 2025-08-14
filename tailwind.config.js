// tailwind.config.js
module.exports = {
  theme: {
    extend: {
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
}
