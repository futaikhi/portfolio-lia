module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'oklch-color-function': true
      }
    })
  ]
};
