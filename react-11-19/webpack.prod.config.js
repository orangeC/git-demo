var path = require('path');
// var webpack = require("webpack");

console.log(webpack);

module.exports = {
    entry: ["webpack/hot/dev-server",
    path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath:"./build/"
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