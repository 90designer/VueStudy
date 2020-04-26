const path = require("path");
let CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  // 入口文件
  entry: "./src/main.js",
  // 出口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 加载图片时，小于limit，则图片以base64的方式加载。
              // 超过限制，会默认使用file-loader加载，但是会打包到dist,生成一个新的图片，需要修改output配置的publicPath
              limit: 44000,

              // 配置生成文件的名字
              // name: "img/[name].[hash:8].[ext]",

              // 可以是一个函数
              name(file) {
                return "[name][hash:4].[ext]";
              },
            },
          },
        ],
      },
      {
        // 将es6转为es5
        test: /\.js$/,
        // 排除 （include 包含）
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
};
