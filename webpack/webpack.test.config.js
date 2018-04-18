import { NodePathReplacePlugin } from '../src/base/wp-plugins/nodePathReplacePlugin'
import * as common from './webpack.common.config'

export const target = 'node'
export const node = common.node
export const devtool = 'cheap-module-source-map'
export const module = {
  rules: [
    {
      // this loader will compile vue files
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /(?!spec)\.js$/,
      loader: 'babel-loader',
      include: [
        common.resolvePath('src'),
      ],
      exclude: [/node_modules/, /dist/],
    }
  ]
}
export const resolve = common.resolve

export const plugins = [
  new NodePathReplacePlugin()
]

export const performance = {
  hints: false
}
