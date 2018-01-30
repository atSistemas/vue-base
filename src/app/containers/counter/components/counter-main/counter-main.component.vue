<template>
  <div>
    <input type="number" v-model="number">
    <button @click="increment(number)">suma</button>
    <button @click="decrement(number)">resta</button>
    <div>
    Contador: {{ counter }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'counter-main',
  computed: {
    ...mapGetters([
      'counter'
    ])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement',
    ]),
  },
  data () {
    return {
      number: 1
    };
  }
};
</script>
