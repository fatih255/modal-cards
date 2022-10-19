const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './forbundle/script.ts',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'public'),
    libraryTarget: 'umd',
    library: 'modalCard',
    umdNamedDefine: true,
    libraryExport: 'default',
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-typescript', '@babel/preset-env'],
        },
      },
    ],
  },
}
