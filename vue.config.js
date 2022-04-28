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

  pluginOptions: {
    i18n: {
      locale: 'zh-cn',
      fallbackLocale: 'zh-cn',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
};
