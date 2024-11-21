module.exports = {
  devServer: {
    proxy: {
      "/api": {
        /* 目标代理服务器地址 */
        target: "http://localzexishuhua.com",
        /* 允许跨域 */
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
