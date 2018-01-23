import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from '../wp-plugins/logger';

import MainReducer from '../../app/containers/main/reducers';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    main: MainReducer
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
