module.exports = {
  lintOnSave: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      less: {
        // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 直接覆盖变量
          "button-primary-background-color": "#111",
          "border-color": "#eee"
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
        }
      }
    }
  },
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "仿boss直聘"
    }
  },
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true
    // proxy: {
    //   "/api": {
    //     target: "<url>",
    //     ws: true,
    //     changeOrigin: true
    //   }
    // }
  }
};
