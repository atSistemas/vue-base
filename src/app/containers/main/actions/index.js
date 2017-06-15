import MainActionTypes from '../action-types';

export function increment(payload) {
  return {
    type: MainActionTypes.INCREMENT,
    payload,
  };
}

export function decrement(payload) {
  return {
    type: MainActionTypes.DECREMENT,
    payload,
  };
}
