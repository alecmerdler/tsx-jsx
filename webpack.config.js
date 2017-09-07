const webpack = require('webpack');
const path = require('path');

const entryFile = process.argv[3];

const config = {
    entry: {
        app: entryFile,
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
              // loader: 'ts-loader',
              loader: 'awesome-typescript-loader',
              // options: {
              //     entryFileIsJs: /.jsx$/.test(entryFile),
              // }
          },
        ]
    },
    devtool: 'cheap-module-source-map',
};

module.exports = config;
