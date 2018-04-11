import AssetsPlugin from 'assets-webpack-plugin'
import VueSSRServerPlugin from 'vue-server-renderer/server-plugin'

import * as common from './webpack.common.config'

export const cache = true
export const devtool = 'eval'
export const entry = common.entry
export const context = common.context
export const resolve = common.resolve
export const target = 'node'

export const output = {
  path: common.buildPath,
  filename: 'server-bundle.js',
  libraryTarget: 'commonjs2'
}

export const module = {
  loaders: [
    {
      test: /\.vue$/,
      include: [/src/],
      loader: 'vue-loader',
      exclude: [/node_modules/, /dist/, /server/],
    },
  ],
}

export const plugins = [
  // new webpack.DllPlugin({
  //   path: path.join(common.dllPath, '[name]-manifest.json'),
  //   name: '[name]',
  // }),
  new AssetsPlugin({
    path: common.buildPath,
    filename: 'webpack-assets.json',
    prettyPrint: true,
  }),
  new VueSSRServerPlugin()
]
  .concat(common.plugins)
