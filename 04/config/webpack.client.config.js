const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const base = require('./webpack.base.config');

module.exports = merge(base, {
  entry: {
    client: path.resolve(__dirname, '../src/entry-client.js')
  },

  plugins: [
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html'
    })
  ]
});