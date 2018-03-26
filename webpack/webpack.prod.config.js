import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as common from './webpack.common.config'

export const mode = 'production'
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
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
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
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new CopyWebpackPlugin([{ from: 'src/app/assets', to: '../dist/assets' }]),
  new webpack.NoEmitOnErrorsPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  }),
  // new HtmlWebpackPlugin({
  //   title: 'Vue Base',
  //   template: 'index.html'
  // })
].concat(common.plugins)
