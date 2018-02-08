var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular']  
    },
    output: {
        path: __dirname + '/js',
        filename: 'app.bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '.'),
        compress: true,
        port: 9000
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ]
};