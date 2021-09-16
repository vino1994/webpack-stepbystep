const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin') // webpack5
const path = require('path')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './dist')
    },
    compress: true,
    port: 9000,
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})