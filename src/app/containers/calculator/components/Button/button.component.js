
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
      leches: function () {
        console.log(4444444)
        // this.$emit('leches')
      }
    }
  }
}
