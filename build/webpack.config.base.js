const path = require("path");
const webpack = require("webpack");
const nodeExcternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpackconfig = {
  target: "node",
  entry: {
    server: path.resolve(__dirname, "../src"),
  },
  resolve: {
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
    extensions: [".js", ".json"],
    alias: {
      src: path.resolve(__dirname, "../src"),
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: [path.join(__dirname, "/node_modules")],
      },
    ],
  },
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
  ],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true,
  },
};

module.exports = webpackconfig;
