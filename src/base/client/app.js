import Vue from 'vue/dist/vue'
import App from 'app/App.vue'

import { createRouter } from '../routes'
import { createStore } from '../store'
import { sync } from 'vuex-router-sync'

export function createApp () {
  // create router instance
  const router = createRouter()
  const store = createStore()

  // sync so that route state is available as part of the store
  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
