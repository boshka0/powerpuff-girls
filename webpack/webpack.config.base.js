const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '..', 'src');
const BUILD_DIR = path.resolve(__dirname, '..', 'dist');

const entry = path.join(APP_DIR, 'index.js');
const output = { path: BUILD_DIR, filename: 'bundle.js' };

module.exports = {
  entry: ['babel-polyfill', entry],
  output,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(APP_DIR, 'index.html'),
      filename: './index.html'
    }),
  ]
};
