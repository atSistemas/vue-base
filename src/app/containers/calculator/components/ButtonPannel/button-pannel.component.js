import ButtonComponent from '../Button/button.component.vue'

export default {
  name: 'button-pannel',
  components: {
    'base-button': ButtonComponent
  },
  data () {
    return {
      title: 'hola',
    }
  }
}
