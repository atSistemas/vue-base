import express from 'express'

import base from 'base/'
import httpServer from './httpServer'
import applyStaticsPaths from './statics'
import applyEnvMiddleWare from './middleware'
import applyServerRouting from './routing'

const app = express()

const launchServer = () => {
  applyEnvMiddleWare(app)
    .then(() => {
      base.console.info('Checking static paths...')
      applyStaticsPaths(app)
    })
    .then(() => {
      base.console.info('Checking server routing...')
      applyServerRouting(app)
    })
    .then(() => {
      base.console.info('Setting up server...')
      httpServer(app)
    })
    .catch((e) => {
      base.console.error(`Server Error ${e}...`)
    })
}

launchServer()
