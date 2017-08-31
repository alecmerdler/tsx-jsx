const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    app:  './app.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /(\.jsx?)|(\.tsx?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          entryFileIsJs: true,
        }
      },
    ]
  },
  devtool: 'cheap-module-source-map',
};

module.exports = config;
