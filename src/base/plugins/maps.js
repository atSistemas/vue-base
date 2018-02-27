import Vue from 'vue'
const VueGoogleMaps = require('vue2-google-maps')

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDCNAQelN8Ug0jxWzpoZz_PFW_SKBTHcJs',
    v: '3',
    libraries: 'places'
  }
})
