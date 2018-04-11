import { createBundleRenderer } from 'vue-server-renderer'
import LRU from 'lru-cache'
import path from 'path'

export default function createRenderer (bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    // for component caching
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    // this is only needed when vue-server-renderer is npm-linked
    basedir: path.resolve(__dirname, '../../dist'),
    // recommended for performance
    runInNewContext: false
  }))
}
