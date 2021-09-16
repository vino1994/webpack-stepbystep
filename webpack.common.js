const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    app: './src/index.js',
    ts_app: './src/ts_index.ts'
  },
  output: {
    clean: true,
    filename: '[name].[fullhash:8].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash:8][ext][query]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-study',
      template: 'index.html',
      filename: 'index.html'
    }),
    new DashboardPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? 'css/[name].css' : 'css/[name].[fullhash:8].css',
      chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[fullhash:8].css',
    }),
    new SpeedMeasurePlugin(),
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
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/dist/css'
            }
          },
          // 'style-loader', // 与 MiniCssExtractPlugin.loader 冲突
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource'
        // use: [{
        //   loader: 'url-loader',
        //   options: {
        //     limit: 10240,
        //     name: 'images/[name].[ext]'
        //   },
        // }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024
          },
        }]
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'] // 自动不全识别后缀
  }
}