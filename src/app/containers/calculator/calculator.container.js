import DisplayComponent from './components/Display/display.component.vue'
import ButtonPannelComponent from './components/ButtonPannel/button-pannel.component.vue'

export default {
  name: 'calculator-container',
  components: {
    'display': DisplayComponent,
    'button-pannel': ButtonPannelComponent
  },
  data () {
    return {
      title: 'hola',
    }
  }
}
