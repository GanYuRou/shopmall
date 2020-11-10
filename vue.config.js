const path = require("path");

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  // 通过chainWebpack的API扩展或修改webpack的配置
  chainWebpack: (config) => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('assets', resolve('src/assets'))
    .set('components', resolve('src/components'))
    .set('views', resolve('src/views'))
  }
}
