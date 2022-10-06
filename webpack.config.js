const path = require('path');
module.exports = {
    mode: 'development',
    entry: "./forbundle/script.ts",
    output: {
        filename: "script.js",
        path: path.resolve(__dirname, 'public'),
        libraryTarget:'umd', 
        library:'modalCard',
        umdNamedDefine: true,
        libraryExport: 'default' 
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    },
    module: {
        rules: [{ test: /\.ts$/, loader: "ts-loader" }]
    }
}