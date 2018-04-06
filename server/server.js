import base from 'base/'
import express from 'express'
import favicon from 'serve-favicon'
import path from 'path'
import compression from 'compression'
import microcache from 'route-cache'

import httpServer from './httpServer'
import applyStaticsPaths from './statics'
// import applyEnvMiddleWare from './middleware'
import applyServerRouting from './routing'

const useMicroCache = process.env.MICRO_CACHE !== 'false'
const resolve = file => path.resolve(__dirname, file)
const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && process.env.NODE_ENV === 'production' ? 1000 * 60 * 60 * 24 * 30 : 0
})

const app = express()

app.use(microcache.cacheSeconds(1, req => useMicroCache && req.originalUrl))
app.use(favicon('./public/logo-48.png'))
app.use(compression({ threshold: 0 }))
app.use('/assets', serve('./src/app/assets', true))
app.use('/dist', serve('./dist', true))
app.use('/public', serve('./public', true))
app.use('/manifest.json', serve('./manifest.json', true))
// app.use('/service-worker.js', serve('./dist/service-worker.js'))

const launchServer = () => {
  base.console.info('Checking static paths...')
  applyStaticsPaths(app)
  base.console.info('Checking server routing...')
  applyServerRouting(app)
  base.console.info('Setting up server...')
  httpServer(app)
}

launchServer()
