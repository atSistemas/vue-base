/* eslint-disable no-param-reassign */
import ActionTypes from '../actionTypes'

export const mutations = {
  [ActionTypes.INPUT_NUMBER] (state, data) {
    const selectedValue = data.value
    const newValue = state.newValue
    const prevValue = (newValue) ? state.nextValue : state.prevValue
    const value = parseFloat(`${prevValue}${selectedValue}`)
    state.display = value
    state.resetDisplay = false
    state[newValue ? 'nextValue' : 'prevValue'] = value
  },
  [ActionTypes.INPUT_OPERATOR] (state, stations) {
    console.log(455555555)
    state.stations = stations
  },
  [ActionTypes.INPUT_OPERATION] (state, stations) {
    console.log(455555555)
    state.stations = stations
  },
  [ActionTypes.RESULT] (state, stations) {
    console.log(455555555)
    state.stations = stations
  }
}
