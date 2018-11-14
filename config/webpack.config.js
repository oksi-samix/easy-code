const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const package = require('../package.json');

let cleanOptions = {
  root:     '/public',
  verbose:  true,
  dry:      false
};

let pathsToClean = [
  'public'
];

module.exports = {
  entry: {
    main: './index.js'
  },

  context: path.resolve(__dirname, '../src'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public')
  },

  mode: 'development',

  watch: true,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new HtmlWebpackPlugin({
      title:package.name,
      version: package.version,
      template:'./index.html'
    })
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

};


