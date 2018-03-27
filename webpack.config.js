const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  watch: true,
  entry: "./client-src/index.js",
  output: {
    path: __dirname + "/client",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["react"]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: "css-loader",
          options: {
            modules: true
          }
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        query: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },

  plugins: [new ExtractTextPlugin("style.css")],

  resolve: {
    extensions: [".js", ".json", ".jsx"]
  }
};
