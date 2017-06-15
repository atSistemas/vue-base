<template>
  <div>
    <div>
    Contador: {{counter}}
    </div>
    <button @click="increment()">suma 2</button>
    <button @click="decrement()">resta 2</button>
  </div>
  
</template>

<script>
import store from 'base/store';
import * as mainActions from '../../actions';

export default {
  name: 'main-component',
  data() {
    return {
      counter: this.$select('mainState.counter as counter'),
    };
  },
  methods: {
    increment() {
      store.dispatch(mainActions.increment(2));
    },
    decrement() {
      store.dispatch(mainActions.decrement(2));
    },
  },
};
</script>
