import HomeActionTypes from '../action-types';

export const mutations = {
  [HomeActionTypes.INCREMENT] (state, number) {
    state.counter = state.counter + parseInt(number);
  },

  [HomeActionTypes.DECREMENT] (state, number) {
    state.counter = state.counter - parseInt(number);
  }
}