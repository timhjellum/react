const path = require("path")

module.exports = {
  entry: "./app/Main.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "app"),
    filename: "bundled.js"
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "app"),
    hot: true,
    historyApiFallback: { index: "index.html" }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      }
    ]
  }
}

/*
const path = require('path')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]

module.exports = {
  entry: './src/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'src')
  },
  devServer: {
    before: function(src, server) {
	  server._watch('./src/*
	  */
/*.html')
    },
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
      }
    ]
  }
}
*/
