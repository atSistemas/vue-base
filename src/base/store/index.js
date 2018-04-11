import Vue from 'vue/dist/vue'
import Vuex from 'vuex'
import Reducers from '../reducers'
import createLogger from '../wp-plugins/logger'
import { env } from '../shared/Env'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: Reducers,
    strict: env === 'development',
    plugins: env === 'development' ? [createLogger()] : []
  })
}
