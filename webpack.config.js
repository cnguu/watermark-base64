const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/watermark-base64.js',
  output: {
    filename: 'watermark-base64.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'watermark-base64',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
    }],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: { warnings: false },
    }),
  ],
}
