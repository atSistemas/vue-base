import { createBundleRenderer } from 'vue-server-renderer'
import LRU from 'lru-cache'
import path from 'path'

const resolve = file => path.resolve(__dirname, file)

export default function createRenderer (bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    // for component caching
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    // this is only needed when vue-server-renderer is npm-linked
    basedir: resolve('../../dist'),
    // recommended for performance
    runInNewContext: false
  }))
}
