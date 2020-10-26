module.exports = {
  plugins: {
    // px => rem
    autoprefixer: {
      // browsers: ['Android >= 4.4', 'iOS >= 8'],
    },
    'postcss-px-to-viewport': {
      viewportWidth: 375,
    },
  },
}