const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts', 
    devtool: 'inline-source-map',
    externals: {
        d3: 'd3',
        science: 'science',
        express: 'express'
    },
    plugins: [
        new CircularDependencyPlugin({
            exclude: /a\.js|node_modules/,
            failOnError: true,
            cwd: process.cwd(),
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts|\.tsx$/,
                use: 'ts-loader',
                include: __dirname
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        library: "networkcube",
        libraryTarget: "umd",
        filename: 'vistorian-vis.js',
        path: path.resolve(__dirname, 'lib')
    }
};