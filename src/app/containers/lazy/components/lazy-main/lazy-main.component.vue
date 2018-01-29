<template>
  <div>
    <p v-once>{{ message }}</p>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';

export default {
  name: 'lazy-main',
  data () {
    return {
      message: 'Lazy loaded container'
    };
  },
};
</script>
