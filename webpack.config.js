var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "[name].js",
    publicPath:'/'
  },
  plugins: [
    new HtmlWebpackPlugin({
    template:path.resolve(__dirname+'/src/index.html'),
    filename:"index.html",
    inject:'body'
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.css$/, loader: "style-loader!css-loader"
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  },
  resolve:{
    extensions:['.js','.jsx']
  },
  devServer: {
    contentBase : './dist',
    inline:true,
    historyApiFallback: true,
    port: 6127
  }
};
