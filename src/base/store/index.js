import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from '../wp-plugins/logger'

import WeatherModule from '../../app/containers/weather/module'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    weather: WeatherModule,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
