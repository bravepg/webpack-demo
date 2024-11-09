const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // a: './src/a.js',
    b: './src/b.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    // jsonpFunction: '_**jsonp',
    clean: true,
  },
  optimization: {
    splitChunks: {
      minSize: 0,
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: false, // 禁用压缩
          mangle: false,
          format: {
            comments: false, // 禁止所有注释
            beautify: true, // 格式化代码，使其更易读
          },
        },
        extractComments: false, // 禁止将注释提取到单独的文件中
      }),
    ],
  },
  devtool: 'source-map',
};
