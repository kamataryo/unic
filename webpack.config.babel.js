/**
 * Webpack Configuration
 * @type {file}
 */

import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import GitRevisionPlugin from 'git-revision-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const gitRevisionPlugin = new GitRevisionPlugin()

const __NODE_ENV__ = JSON.stringify(process.env.NODE_ENV) || 'development'
const __DEBUG__ = JSON.stringify(process.env.DEBUG) === '"true"'
const __TEST__ =
  JSON.stringify(process.env.TEST) === '"true"' ||
  JSON.stringify(process.env.NODE_ENV) === '"test"'
const __COMMITHASH__ = JSON.stringify(gitRevisionPlugin.commithash())

// entry point
const mainEntry = ['./src/main.jsx']

const devEntries = [
  // activate HMR for React
  'react-hot-loader/patch',
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint
  'webpack-dev-server/client?http://localhost:4000',
  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates
  'webpack/hot/only-dev-server',
]

export default {
  entry: __DEBUG__ ? mainEntry.concat(devEntries) : mainEntry,

  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  devtool: __DEBUG__ ? 'source-map' : void 0,

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /.jsx?$/,
        use: [{ loader: 'babel-loader?compact=false' }],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: 'style-loader' }, // creates style nodes from JS strings
          { loader: 'css-loader' }, // translates CSS into CommonJS
          { loader: 'sass-loader' }, // compiles Sass to CSS
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    // do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin(),

    // Copy html
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    // coppy assets
    new CopyWebpackPlugin([{ from: './public/assets', to: 'assets' }]),

    // embed env info to global
    new webpack.DefinePlugin({
      __NODE_ENV__,
      __DEBUG__,
      __TEST__,
      __COMMITHASH__,
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    compress: true,
    host: 'localhost',
    port: 4000,

    // respond to 404s with index.html
    historyApiFallback: true,

    // enable HMR on the server
    hot: true,
  },
}
