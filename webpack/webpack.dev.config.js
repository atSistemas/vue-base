import webpack from 'webpack'
import * as common from './webpack.common.config'

export const mode = 'development'
export const cache = true
export const devtool = 'cheap-source-map'
export const context = common.context
export const resolve = common.resolve
export const entry = {
  app: [
    common.clientPath,
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
  ],
}

export const output = {
  path: common.buildPath,
  publicPath: '/',
  library: '[name]',
  filename: '[name].js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[name].chunk.js',
}

export const module = {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
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
  ],
}

export const plugins = [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"development"'}}),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DllReferencePlugin({
    context: common.context,
    manifest: require(`${common.dllPath}/vendor-manifest.json`)
  }),
]
  .concat(common.plugins)
