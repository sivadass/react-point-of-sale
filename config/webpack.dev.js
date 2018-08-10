const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackCommon = require('./webpack.common');

module.exports = merge.smart(webpackCommon, {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    overlay: true,
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0'
  },
  devtool: "cheap-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
