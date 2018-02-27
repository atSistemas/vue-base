import CounterActionTypes from '../action-types';

export const actions = {
  increment({ commit }, number) {
    commit(CounterActionTypes.INCREMENT, number);
  },
  decrement({ commit }, number) {
    commit(CounterActionTypes.DECREMENT, number);
  },
};
