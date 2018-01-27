'use strict';

const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoader = new ExtractTextPlugin({
    filename: 'styles/[name].[hash].css',
    allChunks: true,
});

const walk = (dir, filelist = []) => {
    fs.readdirSync(dir)
        .map(file => fs.statSync(path.join(dir, file)).isDirectory()?
        walk(path.join(dir, file), filelist) :
            filelist.push(path.join(dir, file)));
    return filelist;
}

function addStyles() {
    const styleDir = path.join(__dirname, 'assets/styles');
    const indexFile = path.join(__dirname, 'src/index.tsx');
    return walk(styleDir, [indexFile]);
}

module.exports = {
    entry: addStyles(),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'js/[name].js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 3000
    },

    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.tsx'] // json и scss не надо резолвить. вообще в этом массиве должно быть как можно меньше элементов.
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ },
            {
                test: /\.s?[c|a]ss$/,
                use: cssLoader.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                sourceMap: true, //тут можно прикрутить переменные среди или же почитай вот тут https://webpack.js.org/guides/environment-variables/
                            }
                        },
                        {
                            loader: 'resolve-url-loader', //sass-loader не резолвит url https://www.npmjs.com/package/resolve-url-loader
                            options: {
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            }
                        }
                    ]
                }),
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(path.join(__dirname, 'build')),
        cssLoader,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'assets/index.html'),
            favicon: path.join(__dirname, 'assets/favicon.ico'),
            showErrors: true,
            hash: true
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                ecma: 8
            },
            exclude: /\/node_modules/
        })
    ]
};