module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|svg|jfif|jpg)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      });
  },
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:4463/',
  //       changeOrigin: true,
  //       pathRewrite: { '^/api': '' },
  //     },
  //   }
  // }
};
