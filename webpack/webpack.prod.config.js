import path from 'path'
import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as common from './webpack.common.config'

export const cache = true
export const devtool = 'cheap-module-source-map'
export const context = common.context
export const resolve = common.resolve

export const entry = {
  app: common.clientPath,
  vendor: common.entry.vendor
}

export const output = {
  path: common.buildPath,
  publicPath: '/',
  library: '[name]',
  filename: '[name].[hash].js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[name].[hash].chunk.js',
}

export const module = {
  rules: [
    {
      test: /\.css/,
      exclude: /node_modules/,

      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]-[hash:base64:4]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => common.postcss
            }
          }
        ]
      })
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        extractCSS: true
      }
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        common.resolvePath('src'),
      ],
      exclude: [/node_modules/, /dist/, /assets/],

    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
      },
    }
  ]
}

export const plugins = [
  new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}),
  new CopyWebpackPlugin([{ from: 'src/app/assets', to: '../dist/assets' }]),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.optimize.UglifyJsPlugin({compressor: { warnings: false }, output: {comments: false}}),
  new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),
  // new HtmlWebpackPlugin({
  //   title: 'Vue Base',
  //   template: 'index.html'
  // })
].concat(common.plugins)
