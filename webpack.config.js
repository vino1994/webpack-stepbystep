/**
 * 废弃
 */

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // webpack5
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    static:{
      directory: path.resolve(__dirname, './dist')
    },
    compress: true,
    port: 9000,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin()
  ],
  module: {
    rules: [
      
    ]
  }
}