const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  entry: '/client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  devServer: {
    open: true,
    'static': {
      directory: './client/dist'
    }
  }
};

module.exports = config;