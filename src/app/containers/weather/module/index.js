import { getters } from '../getters'
import * as actions from '../actions'
import { mutations } from '../mutations'

const state = {
  stations: [],
  forecasts: [],
}

export default {
  state,
  getters,
  actions,
  mutations
}
