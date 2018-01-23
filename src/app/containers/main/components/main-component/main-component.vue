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

import * as mainActions from '../../actions';
import MainActionTypes from '../../action-types';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'main-component',
  computed: {
    ...mapGetters([
      'counter'
    ])
  },
  methods: {
    increment(number) {
      this.$store.commit(MainActionTypes.INCREMENT, number);
    },
    decrement(number) {
      this.$store.commit(MainActionTypes.DECREMENT, number);
    },
  },
  data () {
    return {
      number: 0
    };
  },
  created () {
    console.log('component created');
  }

};
</script>
