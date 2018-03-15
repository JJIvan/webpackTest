// webpack.config.js
var path = require('path')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'], // 在 index 檔案後的 .js 副檔名是可選的
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }, 
  plugins: [
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
   module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}