const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /node_modules/
      })
    ]
  },
  plugins: [
    new ParallelUglifyPlugin({
      uglifyJS: {
        output: {
          comments: false, // 是否保留代码中的注释，默认为保留
        },
        warnings: true, // 是否在UglifyJS删除没有用到的代码输出警告信息，默认为false
        compress:{
          drop_console: true, // 是否删除代码中所有的console语句，默认为false
          collapse_vars: true, // 是否内嵌虽然已经定义，但是只用到一次的变量，默认为false
          reduce_vars: true, // 是否提取出现了多次但是没有定义成变量去引用的静态值，默认为false
        }
      },
      cacheDir: '', // 用作缓存的可选绝对路径，如果未提供，则不使用缓存
      sourceMap: false // 是否为压缩后的代码生成对应的source Map（浏览器可以再调试代码时定位到源码位置），会减慢编译速度
    }),
    //   // 默认配置的具体配置项
    // new BundleAnalyzerPlugin({
    //     analyzerMode: 'server',
    //     analyzerHost: '127.0.0.1',
    //     analyzerPort: '8888',
    //     reportFilename: 'report.html',
    //     defaultSizes: 'parsed',
    //     openAnalyzer: true,
    //     generateStatsFile: false,
    //     statsFilename: 'stats.json',
    //     statsOptions: null,
    //     excludeAssets: null,
    //     logLevel: info
    // })
  ]
})