
export default {
  name: 'base-button',
  props: {
    type: {
      type: String
    },
    value: {
      type: String,
    },
    methods: {
      greet () {
        console.log(4444444)
        this.$emit('clicked')
      }
    }
  }
}
