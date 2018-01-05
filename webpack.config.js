'use strict';

const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
        filename: "bundle.js",
        path: __dirname + "/build"
    },

    devtool: "source-map",

    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};