import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from '../wp-plugins/logger'

import CounterReducer from '../../app/containers/counter/reducers'
import WeatherReducer from '../../app/containers/weather/reducers'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter: CounterReducer,
    weather: WeatherReducer,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
