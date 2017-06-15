import path from 'path';
import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';

import * as common from './webpack.common.config';

export const cache = true;
export const devtool = 'eval';
export const entry = common.entry;
export const context = common.context;
export const resolve = common.resolve;

export const output = {
  path: common.buildPath,
  publicPath: '/',
  library: '[name]',
  filename: '[name].dll.js',
};

export const module = {
  loaders: [
    {
      test: /\.vue$/,
      include: [/src/],
      loader: 'vue-loader',
      exclude: [/node_modules/, /dist/, /server/],
    },
  ],
};

export const plugins = [
  new webpack.DllPlugin({
    path: path.join(common.dllPath, '[name]-manifest.json'),
    name: '[name]',
  }),
  new AssetsPlugin({
    path: common.buildPath,
    filename: 'webpack-assets.json',
    prettyPrint: true,
  }),
]
  .concat(common.plugins);
