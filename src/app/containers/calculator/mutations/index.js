import ActionTypes from '../actionTypes'

export const mutations = {
  [ActionTypes.INPUT_NUMBER] (state, data) {
    const selectedValue = data.value
    const newValue = state.newValue
    const prevValue = (newValue) ? state.nextValue : state.prevValue
    const value = parseFloat(`${prevValue}${selectedValue}`)
    state.display = value
    state.resetDisplay = false
    if (newValue) state.nextValue = value
    else state.prevValue = value
  },
  [ActionTypes.INPUT_DECIMAL] (state, data) {
    const value = `${state.prevValue}.`
    console.log(4444444444, value, data)
    state.display = value
    state.newValue = false
    state.prevValue = value
  },
  [ActionTypes.INPUT_OPERATOR] (state, operator) {
    const currentOperator = operator
    const prevOperator = state.operator
    const prevValue = state.prevValue
    const nextValue = state.nextValue
    const newValue = state.newValue
    const results = newValue ? calculate(prevOperator, prevValue, nextValue) : prevValue

    state.nextValue = 0
    state.newValue = true
    state.display = results
    state.prevValue = results
    state.resetDisplay = true
    state.operator = currentOperator
  },
  [ActionTypes.INPUT_OPERATION] (state, operation) {
    let value = 0
    const prevValue = state.prevValue
    switch (operation) {
      case ActionTypes.PERCENT:
        value = prevValue / 100
        state.display = value
        state.prevValue = value
        break
      case ActionTypes.CLEAN:
        value = 0
        state.display = value
        state.prevValue = value
        state.nextValue = value
        state.newValue = false
        state.resetDisplay = true
        break
      case ActionTypes.CHANGE_SIGN:
        value = (Math.sign(prevValue) === 1)
          ? -Math.abs(prevValue) : Math.abs(prevValue)
        state.display = value
        state.prevValue = value
        break
      default:
        break
    }
  },
}

const calculate = (operator, prevValue, nextValue) => {
  const handlerOperator = {
    [ActionTypes.SUM]: () => prevValue + nextValue,
    [ActionTypes.DIVIDE]: () => prevValue / nextValue,
    [ActionTypes.MULTIPLY]: () => prevValue * nextValue,
    [ActionTypes.SUBSTRACT]: () => prevValue - nextValue
  }
  return operator ? handlerOperator[operator]() : prevValue
}
