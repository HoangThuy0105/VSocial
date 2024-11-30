module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp|svg|jfif|jpg)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]",
      });
  },
  // devServer: {
  //   proxy: {
  //     "^/api": {
  //       // Proxy tất cả các request bắt đầu bằng /api
  //       target: "http://localhost:8888", // Backend server
  //       ws: true, // Hỗ trợ WebSocket (nếu cần)
  //       changeOrigin: true, // Đổi origin để tránh bị từ chối CORS
  //     },
  //   },
  // },
};
