const path = require('path')

module.exports = {
  // 部署应用包的url
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 输入出文件目录
  outputDir: 'dist',
  // eslint 是否在保存的时候校验
  lintOnSave: false,
  // 生产环境是否生成sourcemap包
  productionSourceMap: false,
    // sourceMap: {
    //   version: 3, // SourceMap 的版本
    //   sources: [], // 转换前的文件，可能存在多个文件
    //   names: [], // 转换前的所有变量名和属性名
    //   mappings: 'AACvB,gBAAb,EddF', //记录位置信息的字符串  VLQ编码
    //   file: 'out.js', // 转换后的文件名
    //   sourcesContent: ['\t// THe module cache\n', 'xxx'], // 转换前的文件内容列表 与sources列表对应
    //   sourceRoot: '' // 转换前的文件所在目录  如果与转换前的文件在同一目录 则为空
    // },
    // mappings
    // 第一位，表示这个位置在【转换后代码】的第几列。
    // 第二位，表示这个位置属于【sources属性】中的哪一个文件。
    // 第三位，表示这个位置属于【转换前代码】的第几行。
    // 第四位，表示这个位置属于【转换前代码】的第几列。
    // 第五位，表示这个位置属于【names属性】的哪一个变量。
  // 生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  integrity: false,
  // webpack相关配置
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('vue$', 'vue/dist/vue.esm.js')
  //     .set('@', path.resolve(__dirname, './src'))
  // },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境
      config.mode = 'production'
    } else {
      // 开发环境
      config.mode = 'development'
    }
  },
  // css相关配置
  css: {
    // 是否分离css（插件ExtractTextPlugin）
    extract: true,
    // 是否开启 CSS source maps
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 是否启用 CSS modules for all css / pre-processor files.
    modules: false
  },

  // 是否使用 thread-loader
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: false,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    // http 代理配置
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:3000/api',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // },
    before: (app) => {}
  },
  // 第三方插件配置
  pluginOptions: {

  }
}
