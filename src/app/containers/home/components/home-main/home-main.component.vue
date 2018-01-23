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

import HomeActionTypes from '../../action-types';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'home-main',
  computed: {
    ...mapGetters([
      'counter'
    ])
  },
  methods: {
    increment(number) {
      this.$store.commit(HomeActionTypes.INCREMENT, number);
    },
    decrement(number) {
      this.$store.commit(HomeActionTypes.DECREMENT, number);
    },
  },
  data () {
    return {
      number: 1
    };
  },
  created () {
    console.log('component created');
  }

};
</script>
