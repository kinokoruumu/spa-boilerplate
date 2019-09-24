const webpack = require("webpack");
const path = require("path");
const WebpackBar = require("webpackbar");
// const ManifestPlugin = require("webpack-manifest-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const IS_PRODUCTION = process.env.NODE_ENV === "production";
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

/**
 * @type import('webpack').Configuration
 */
module.exports = {
  target: "web",
  mode: IS_PRODUCTION ? "production" : "development",
  entry: path.resolve(__dirname, "./src/index.tsx"),
  devtool: "#source-map",
  // output: {
  //   path: path.resolve(__dirname, "./public"),
  //   filename: "[name].[hash].js",
  //   publicPath: "/",
  //   chunkFilename: "[name].[hash].js",
  //   sourceMapFilename: "[name].[hash].js.map"
  // },
  output: {
    path: path.resolve(__dirname, "./public"),
    publicPath: "/"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, "./public"),
    watchContentBase: true,
    hot: true,
    open: true,
    historyApiFallback: true,
    host: HOST,
    port: PORT
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
              transpileOnly: true,
              happyPackMode: true
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBar({
      name: "bootstrap"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
      }
    }),
    new HtmlWebpackPlugin({
      template: "src/html/index.html"
      // chunks: ["app"]
    })
    // new ManifestPlugin({
    //   // fileName: path.join(__dirname, "./build/chunk-manifest.json"),
    //   // filter: file => file.isChunk && file.name && file.name.endsWith(".js"),
    //   // map: file => {
    //   //   file.name = file.name.replace(/\.js$/, "");
    //   //   return file;
    //   // }
    // })
  ]
};
