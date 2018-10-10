const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',

  resolve: {
    extensions: ['.js', '.vue']
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000    // 10Kb
          }
        }
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ]
};