import ButtonComponent from '../Button/button.component.vue'

export default {
  name: 'button-pannel',
  components: {
    'base-button': ButtonComponent
  },
  methods: {
    clickOperator (operator) {
      console.log(11111, operator)
    },
    clickOperation (operation) {
      console.log(2222, operation)
    }
  }
}
