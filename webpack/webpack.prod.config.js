import path from 'path';
import webpack from 'webpack';
import copyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import * as common from './webpack.common.config';

export const cache = true;
export const devtool = 'cheap-module-source-map';
export const context = common.context;
export const resolve = common.resolve;

export const entry = {
  app: common.clientPath,
  vendor: common.entry.vendor
};

export const output = {
  path: common.buildPath,
  publicPath: '/',
  library: '[name]',
  filename: '[name].[hash].js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[name].[hash].chunk.js',
};

export const module = {
  rules: common.module.rules.concat([
    {
      test: /\.css/,
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: ['style-loader'],
        use: ['css-loader?-importLoaders=1&minimize=true&sourceMap=true']
      }),
    },
  ])
};

export const plugins = [
  new webpack.DefinePlugin({'process.env': { NODE_ENV: JSON.stringify('production')}}),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname),
    manifest: require(`${common.dllPath}/vendor-manifest.json`)
  }),
  new CommonsChunkPlugin({
    name: 'vendor',
    chunks: ['app'],
    minChunks: module => /node_modules/.test(module.resource)
  }),
  new HtmlWebpackPlugin({
    inject: 'body',
    title: 'Base App',
    filename: 'index.html',
    template: 'server/templates/index.ejs',
    chunks: ['vendor', 'app'],
    //FIXME
    chunksSortMode: function (a, b) {
      const order = ['vendor', 'app'];
      if (order.indexOf(a.names[0]) > order.indexOf(b.names[0])) {
        return 1;
      }
      if (order.indexOf(a.names[0]) < order.indexOf(b.names[0])) {
        return -1;
      }
      return 0;
    }
  }),
  new CopyWebpackPlugin([{ from: 'src/app/assets', to: 'assets' }]),
  new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),
  //FIXME
  /*
  new webpack.optimize.UglifyJsPlugin(
    { compressor: { warnings: false, screw_ie8 : true },
    output: {comments: false, beautify: false},
    mangle: { screw_ie8 : true }
  }),*/
  new webpack.NoEmitOnErrorsPlugin()
].concat(common.plugins);
