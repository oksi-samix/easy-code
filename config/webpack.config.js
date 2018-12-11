const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const package = require('../package.json');
const webpack = require('webpack');
const argv = process.argv;

let cleanOptions = {
  root: '/public',
  verbose: true,
  dry: false
};

let pathsToClean = [
  'public',
  'vendors~main.bundle'
];

const isFileCss = argv.includes('--styles');
const timestamp = Date.now();

const isHash = true;

let cssFileName = isHash ? '[name]-[hash].css' : `style-${timestamp}.css`;

const plugins = [
  // new CleanWebpackPlugin(pathsToClean, cleanOptions),
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    title: package.name,
    version: package.version,
    template: './index.html'
  }),
  new MiniCssExtractPlugin({filename: cssFileName}),
  new webpack.ProvidePlugin({
    React: 'react',
    Component: ['react', 'Component']
  })
];

module.exports = {
  entry: {
    main: './app.js'
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
            presets: ['@babel/preset-env', "@babel/preset-react"],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader,
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      }
    ]
  },

  plugins,

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    publicPath: '/',
    port: 3000
  },

  devtool: "inline-source-map"

};


