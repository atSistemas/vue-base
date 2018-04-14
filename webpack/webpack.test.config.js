import nodeExternals from 'webpack-node-externals'
import common from './webpack.common.config'

export const target = 'node'
export const node = 'node'
export const resolve = common.resolve
export const module = {
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
}

export const externals = [
  nodeExternals()
]
