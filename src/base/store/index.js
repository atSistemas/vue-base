import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from '../wp-plugins/logger';

import HomeReducer from '../../app/containers/home/reducers';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home: HomeReducer
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
