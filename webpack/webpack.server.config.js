import path from 'path'
import webpack from 'webpack'
import * as common from './webpack.base.config'
import VueSSRServerPlugin from 'vue-server-renderer/server-plugin'
import nodeExternals from 'webpack-node-externals'

export const target = 'node'
export const mode = (process.env.NODE_ENV === 'production' ? 'production' : 'development')
export const cache = true
export const devtool = '#source-map'
export const context = common.context
export const entry = path.resolve(__dirname, '../src/base/client/entry-server')

export const output = Object.assign({
  libraryTarget: 'commonjs2',
  filename: 'server-bundle.js',
}, common.output)

export const module = common.module

export const externals = nodeExternals({
  // do not externalize CSS files in case we need to import it from a dep
  whitelist: /\.css$/
})

export const resolve = common.resolve

export const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.VUE_ENV': '"server"'
  }),
  new VueSSRServerPlugin()
].concat(common.plugins)
