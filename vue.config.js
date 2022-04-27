module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://shelax-medical.dev.marvelconnect.com",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
