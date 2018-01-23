import MainActionTypes from '../action-types';

export const mutations = {
  [MainActionTypes.INCREMENT] (state, number) {
    state.counter = state.counter + parseInt(number);
  },

  [MainActionTypes.DECREMENT] (state, number) {
    state.counter = state.counter - parseInt(number);
  }
}