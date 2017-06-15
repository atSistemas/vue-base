import MainActionTypes from '../action-types';

const initialState = {
  counter: 0,
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case MainActionTypes.INCREMENT:
      return Object.assign({}, state, {
        counter: state.counter + action.payload,
      });

    case MainActionTypes.DECREMENT:
      return Object.assign({}, state, {
        counter: state.counter - action.payload,
      });

    default:
      return state;
  }
}
