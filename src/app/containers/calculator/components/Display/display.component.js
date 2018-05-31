import { mapGetters } from 'vuex'

export default {
  name: 'display',
  computed: {
    ...mapGetters([
      'value',
    ]),
  }
}
