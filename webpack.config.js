const  webpack = require("webpack")

module.exports = {
    entry:  __dirname + "/src/index.js",
    output: {
      path: __dirname + "/demo",
      filename: "websdk.js"
    },
    module: {
        loaders: [
          { test: /\.js$/,loader: "babel-loader" }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: "./demo",
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
    ] 
}