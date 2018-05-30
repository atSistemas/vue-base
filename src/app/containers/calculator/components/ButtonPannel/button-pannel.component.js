import ButtonComponent from '../Button/button.component.vue'

export default {
  name: 'button-pannel',
  components: {
    'base-button': ButtonComponent
  },
  methods: {
    leches2: function (operator) {
      console.log(11111, operator)
    },
    serverSelected (operation) {
      console.log(2222, operation)
    }
  }
}
