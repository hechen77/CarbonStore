const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer:{
    proxy:"http://localhost:3000"
  },

  pwa: {
    name: '碳中和商城'
  }
})
