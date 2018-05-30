import { getters } from '../getters'
import * as actions from '../actions'
import { mutations } from '../mutations'
import { calculatorModel } from '../models'

const state = calculatorModel

export default { state, getters, actions, mutations }
