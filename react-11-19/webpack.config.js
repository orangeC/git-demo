var path = require('path');
var webpack = require("webpack");

console.log(webpack);

module.exports = {
    entry: ["webpack/hot/dev-server",
    path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath:"/build/"
    },
    devtool: 'cheap-module-source-map',
    devServer: {
    stats: { colors: true },
    port: 3000,
    inline: true,
    hot:true
  },
  plugins:[
  new webpack.HotModuleReplacementPlugin(),
  ],
  resolve:{
  	extensions:["",".js",".jsx"],
  },
  module: {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    
    {
      test: /\.(jpe?g|png)$/,
      loader: 'file-loader'
    },
    {
      test: /\.css/,
      loader: 'style!css'
    },
    {
      test: /\.(jpe?g|png)$/,
      loader: 'file-loader'
    }
    
  ]
}
};