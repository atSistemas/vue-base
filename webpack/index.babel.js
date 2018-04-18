import env from '../src/base/shared/Env'

import * as development from './webpack.dev.config'
import * as production from './webpack.prod.config'
import * as testing from './webpack.test.config'

switch (env) {
  case 'development':
    module.exports = development
    break
  case 'production':
    module.exports = production
    break
  case 'testing':
    module.exports = testing
    break

  default:
    break
}
