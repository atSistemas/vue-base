import path from 'path'
import webpack from 'webpack'
import * as common from './webpack.base.config'
import VueSSRClientPlugin from 'vue-server-renderer/client-plugin'
// import SWPrecachePlugin from 'sw-precache-webpack-plugin'
import AssetsPlugin from 'assets-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import RobotstxtPlugin from 'robotstxt-webpack-plugin'

export const mode = (process.env.NODE_ENV === 'production' ? 'production' : 'development')
export const cache = true
export const devtool = 'cheap-module-source-map'
export const context = common.context

export const entry = {
  app: path.resolve(__dirname, '../src/base/client/entry-client.js')
}

export const output = common.output

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
        path.resolve(__dirname, 'src'),
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

export const resolve = common.resolve

export const plugins = [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify(process.env.NODE_ENV)}}),
  new AssetsPlugin({
    path: common.buildPath,
    filename: 'webpack-assets.json',
    prettyPrint: true
  }),
  new CopyWebpackPlugin([
    { from: 'src/app/assets', to: '../dist/assets' },
    { from: './manifest.json', to: '../dist/' }
  ]),
  new RobotstxtPlugin({}),
  new webpack.HotModuleReplacementPlugin(),
  new VueSSRClientPlugin(),
  // (process.env.NODE_ENV === 'production')
  //   ? new SWPrecachePlugin({
  //     cacheId: 'vue-base',
  //     filename: 'service-worker.js',
  //     minify: true,
  //     dontCacheBustUrlsMatching: /./,
  //     staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
  //     runtimeCaching: [
  //       {
  //         urlPattern: '/',
  //         handler: 'networkFirst'
  //       },
  //       {
  //         urlPattern: /\/(top|new|show|ask|jobs)/,
  //         handler: 'networkFirst'
  //       },
  //       {
  //         urlPattern: '/item/:id',
  //         handler: 'networkFirst'
  //       },
  //       {
  //         urlPattern: '/user/:id',
  //         handler: 'networkFirst'
  //       }
  //     ]
  //   })
  //   : null
]
  .concat(common.plugins)
