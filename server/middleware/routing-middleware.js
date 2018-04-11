// import { match } from 'react-router'

import { fetchRequiredActions, context } from 'base'
// import routes from '../../src/base/routes'
import renderPage from '../lib/renderPage'
import renderContainer from '../lib/renderContainer'
import configureServerStore from '../lib/configureStore'
import { createApp } from '../../src/base/routes'

export default function routingMiddleware (req, res) {
  const { app, router, store } = createApp()
  // const store = configureServerStore()

  // match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
  //   if (error) return res.status(500).send(error.message)
  //   if (redirectLocation) return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
  //   if (renderProps == null) return res.status(404).send('Not found')
  //   fetchRequiredActions(store.dispatch, renderProps.components, renderProps.params, context.context)
  //     .then(() => {
  //       const routeMatch = renderProps.location.pathname
  //       const renderedContainer = renderContainer(store, renderProps)
  //       const page = renderPage(routeMatch, renderedContainer, store)
  //       return res.status(200).send(page)
  //     })
  //     .catch(err => res.end(err.message))
  // })
  // this assumes App.vue template root element has `id="app"`
  console.log(router)
  router.onReady(() => {
    console.log('router ready')
    // Add router hook for handling asyncData.
    // Doing it after initial route is resolved so that we don't double-fetch
    // the data that we already have. Using router.beforeResolve() so that all
    // async components are resolved.
    router.beforeResolve((to, from, next) => {
      console.log(to)
      const matched = router.getMatchedComponents(to)
      const prevMatched = router.getMatchedComponents(from)
      let diffed = false
      const activated = matched.filter((c, i) => {
        return diffed || (diffed = (prevMatched[i] !== c))
      })
      const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
      if (!asyncDataHooks.length) {
        return next()
      }

      Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))
        .then(() => {
          next()
        })
        .catch(next)
    })

    // actually mount to DOM
    app.$mount('#app')
  })
}
