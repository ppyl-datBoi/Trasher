module.exports = {
  devServer: {
    proxy: 'http://localhost:9000'
  },
  lintOnSave: false,
  outputDir: 'target/dist',
  assetsDir: 'static',
  transpileDependencies: [
    'vuetify',
  ],
};
