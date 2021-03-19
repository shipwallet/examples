const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
