const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return {
    entry: path.resolve(__dirname, "src/index.js"),
    plugins: [
      new HtmlWebpackPlugin({
        title: "Jhosep Davila",
        template: "src/index.html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /^node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: 'file-loader'
        },
        {
          test: /\.(yaml|yml)$/,
          use: ['json-loader', 'yaml-loader']
        },
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: argv.mode === 'production' ? 'https://jhosep98.github.io/PorfolioJdb/' : '/',
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.resolve(__dirname, "dist")
    }
  }
}
