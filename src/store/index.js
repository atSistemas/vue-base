import Vue from 'vue';
import Revue from 'revue';
import { createStore } from 'redux';

import baseReducers from '../reducers';

const baseStore = createStore(baseReducers);
const store = new Revue(Vue, baseStore);

export default store;
