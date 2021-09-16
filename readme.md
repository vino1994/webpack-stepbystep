### 参考的部分资料

* https://segmentfault.com/a/1190000016799146 // webpack配置入门
* https://segmentfault.com/a/1190000016807803 // Webpack面试题
* https://www.huaweicloud.com/articles/b56ddb05aad92e077813c643cd605dea.html  // 本地文件推送到远程仓库
### 用到的部分插件

* webpack
* webpack-cli
* clean-webpack-plugin  // 清理dist目录
* html-webpack-plugin   // 拷贝index.html至dist目录
* webpack-dev-server    // 开发工具
* webpack.HotModuleReplacementPlugin  // 简单模块热更新(HMR)
* webpack-merge         // 提取公共配置，减少重复配置代码
* url-loader            // 依赖于file-loader
* postcss postcss-loader        // 扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀
* terser-webpack-plugin // 支持压缩 ES6 (Webpack4以上)
* webpack-parallel-uglify-plugin  // 多进程执行代码压缩，提升构建速度
* speed-measure-webpack-plugin  // 简称smp，分析webpack打包过程中loader和plugin的耗时，有助于找到构建过程中的性能瓶颈（webpack5和webpack4不一致）
* size-plugin // 监控资源体积变化（不支持webpack5）
* webpack-bundle-analyzer // 生成 bundle 的模块组成图，显示所占体积（另外bundlesize工具包可以进行自动化资源体积监控）