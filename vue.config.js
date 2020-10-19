
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/',
  //配置路径别名
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        "@assets": resolve("src/assets")
      }
    }
  },
}