const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require("path");

// 引入全局 less 样式
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor:"less",
      patterns: [path.resolve(__dirname, "./src/styles/common.less")],
    }
  },
};