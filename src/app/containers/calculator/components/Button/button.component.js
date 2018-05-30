export default {
  name: 'base-button',
  props: {
    type: {
      type: String
    },
    value: {
      type: String,
    }
  },
  methods: {
    clickHandler: function () {
      this.$emit('buttonClick', {type: this.type, value: this.value})
    }
  }
}
