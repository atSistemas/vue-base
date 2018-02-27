/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */

import TodoActionTypes from '../action-types';

export const mutations = {
  [TodoActionTypes.INCREMENT](state, number) {
    state.counter = state.counter + parseInt(number, 10);
  },

  [TodoActionTypes.DECREMENT](state, number) {
    state.counter = state.counter - parseInt(number, 10);
  }
};
