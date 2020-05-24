module.exports = {
  plugins: {
    autoprefixer: {},
    // "postcss-px2rem": {
    //   remUnit: 75
    // }
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"]
    }
  }
};
