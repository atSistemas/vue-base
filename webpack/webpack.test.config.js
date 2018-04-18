import { NodePathReplacePlugin } from '../src/base/wp-plugins/nodePathReplacePlugin'
import nodeExternals from 'webpack-node-externals'
import * as common from './webpack.common.config'

const isCoverage = process.env.TEST_COVERAGE === 'coverage'

export const target = 'node'
export const node = common.node
export const devtool = 'inline-cheap-module-source-map'
export const module = {
  rules: [
    {
      // this loader will compile vue files
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        optimizeSSR: false
      }
    },
    {
      test: /(?!spec)\.js$/,
      loader: 'babel-loader',
      include: [
        common.resolvePath('src'),
      ],
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

// export const externals = [
//   nodeExternals()
// ]
