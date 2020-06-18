const path = require("path")
const fs = require("fs")
const HtmlWebpackPlugin = require("html-webpack-plugin")

// App directory
const appDirectory = fs.realpathSync(process.cwd())

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath)

// Host
const host = process.env.HOST || "localhost"

// Required for babel-preset-react-app
process.env.NODE_ENV = "development"

module.exports = {
  //context: __dirname + "/src",
  //entry: "./index.js",
  entry: resolveAppPath("src"),
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "src"),
    // Development filename output
    filename: "static/js/bundle.js"
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    // Serve index.html as the base
    contentBase: resolveAppPath("public"),

    // Enable compression
    compress: true,

    // Enable hot reloading
    hot: true,

    host,

    port: 3000,

    // Public path is root of content base
    publicPath: "/",

    hot: true
    //historyApiFallback: { index: "index.html" }
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
  },
  plugins: [
    // Re-generate index.html with injected script tag.
    // The injected script tag contains a src value of the
    // filename output defined above.
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveAppPath("public/index.html")
    })
  ]
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
  entry: './src/assets/scripts/src.js',
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
