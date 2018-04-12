const nodeExternals = require('webpack-node-externals')
const path = require('path')
const common = require('./webpack.common.config')

module.exports = {
  target: 'node',
  node: 'node',
  devtool: 'cheap-module-source-map',
  resolve: common.resolve,

  module: {
    rules: [
      {
        // this loader will compile vue files
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        options: {
          presets: [ 'es2015', 'stage-2' ] // stage-2 if required
        }
      }
    ]
  },

  plugins: [
  ],
  externals: [
    nodeExternals()
  ],
  performance: {
    hints: false
  }
}
