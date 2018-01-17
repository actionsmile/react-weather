'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
        path: __dirname + '/build',
        filename: 'js/bundle.js'
    },

    devServer: {
      contentBase: path.join(__dirname, '/build'),
      port: 3000
    },

    devtool: 'source-map',

    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
                test:/\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'less-loader']
                })
            },
            { test: /\.woff(\?.+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?.+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?.+)?$/, use: 'file-loader' },
            { test: /\.eot(\?.+)?$/, use: 'file-loader' },
            { test: /\.svg(\?.+)?$/, use: 'file-loader' },
            { test: /\.png$/, use: 'url-loader?mimetype=image/png' },
            { test: /\.gif$/, use: 'url-loader?mimetype=image/gif' }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/assets/index.html'),
            favicon: path.join(__dirname, 'src/assets/favicon.ico'),
            showErrors: true,
            hash: true
        }),
        new ExtractTextPlugin({
            filename: 'styles/main.css'
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                ecma: 8
            },
            exclude: /\/node_modules/
        })
    ]
};