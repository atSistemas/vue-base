import path from 'path'
import chalk from 'chalk'
import AssetsPlugin from 'assets-webpack-plugin'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import baseWpPlugins from '../src/base/wp-plugins'

export const mainPath = path.resolve(__dirname, '..')
export const context = path.resolve(__dirname, '../')
export const buildPath = path.resolve(__dirname, '..', 'dist')
export const basePath = path.resolve(__dirname, '../src/base')
export const dllPath = path.resolve(__dirname, '../dist/dlls')
export const clientPath = path.resolve(__dirname, '../src/base/client/entry-client')
export const manifestPath = buildPath
export const devtool = process.env.NODE_ENV === 'production' ? false : '#cheap-module-source-map'

export const output = {
  path: path.resolve(__dirname, '../dist'),
  publicPath: (process.env.NODE_ENV === 'production' ? '/' : '/dist/'),
  filename: '[name].[hash].js'
}

export const performance = {
  maxEntrypointSize: 300000,
  hints: process.env.NODE_ENV === 'production' ? 'warning' : false
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
        path.join(__dirname, '..', 'src'),
      ],
      query: {
        presets: ['es2015']
      },
      exclude: [/node_modules/, /dist/, /assets/],
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
      },
    },
  ]
}

export const resolve = {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    'public': path.resolve(__dirname, '../public'),
    'app': path.resolve(__dirname, '../src/app'),
    'base': path.resolve(__dirname, '../src/base'),
    'store': path.resolve(__dirname, '../src/base/store'),
    'mocks': path.resolve(__dirname, '../server/api/mocks'),
    'containers': path.resolve(__dirname, '../src/app/containers'),
    'components': path.resolve(__dirname, '../src/app/components'),
  }
}

export const plugins = [
  // new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify(process.env.NODE_ENV) || 'development'}}),
  new ProgressBarPlugin({
    format: `[BASE] ${chalk.blue('i')} Bundling... [:bar] ${chalk.green(':percent')} (:elapsed seconds)`,
    clear: true,
    summary: false,
  }),
  new AssetsPlugin({
    path: buildPath,
    filename: 'webpack-assets.json',
    prettyPrint: true
  }),
  new baseWpPlugins.CompileInfoPlugin()
]
