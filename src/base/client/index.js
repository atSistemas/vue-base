import Vue from 'vue/dist/vue'
import App from 'app/App.js'

import { createRouter } from '../routes'
import { createStore } from '../store'
import { sync } from 'vuex-router-sync'

// const router = createRouter()
// const store = createStore()

// // sync so that route state is available as part of the store
// sync(store, router)

// export default new Vue({
//   router,
//   store,
//   render: h => h(App)
// })

export function createApp () {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
