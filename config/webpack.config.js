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
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        title: package.name,
        version: package.version,
        template: './index.html'
    }),
    new MiniCssExtractPlugin({filename: cssFileName})
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
        port: 3001
    }

};


