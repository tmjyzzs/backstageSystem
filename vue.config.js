const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //transpileDependencies: true,
  lintOnSave: false, //关闭语法检查

  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: "http://localhost:8899",
        pathRewrite: { '^/api': '' }
      }
    }
  }
})
