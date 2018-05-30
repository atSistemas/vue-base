import { mapMutations } from 'vuex'
import ActionTypes from '../../actionTypes'
import ButtonComponent from '../Button/button.component.vue'

export default {
  name: 'button-pannel',
  components: {
    'base-button': ButtonComponent
  },
  methods: {
    clickOperator (operator) {
      console.log(11111)
      let actionType
      switch (operator.value) {
        case '÷': actionType = ActionTypes.DIVIDE; break
        case 'x': actionType = ActionTypes.MULTIPLY; break
        case '-': actionType = ActionTypes.SUBSTRACT; break
        case '+': actionType = ActionTypes.SUM; break
        default: break
      }
      this[ActionTypes.INPUT_OPERATOR](actionType)
    },
    clickOperation (operation) {
      console.log(22222)
      let actionType
      switch (operation) {
        case 'C': actionType = ActionTypes.CLEAN; break
        case '+/-': actionType = ActionTypes.CHANGE_SIGN; break
        case '%': actionType = ActionTypes.PERCENT; break
        default: break
      }
      this[ActionTypes.INPUT_OPERATION](actionType)
    },
    clickNumber (number) {
      this[ActionTypes.INPUT_NUMBER](number)
    },
    clickDecimal (decimal) {
      this[ActionTypes.INPUT_DECIMAL](decimal)
    },
    clickResult (result) {
      this[ActionTypes.RESULT](result)
    },
    ...mapMutations([
      ActionTypes.INPUT_OPERATOR,
      ActionTypes.INPUT_OPERATION,
      ActionTypes.INPUT_NUMBER,
      ActionTypes.INPUT_DECIMAL,
      ActionTypes.RESULT
    ])
  }
}
