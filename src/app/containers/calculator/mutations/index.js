/* eslint-disable no-param-reassign */
import ActionTypes from '../actionTypes'

export const mutations = {
  [ActionTypes.SUM] (state, stations) {
    state.stations = stations
  }
}
