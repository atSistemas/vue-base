import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import { mapGetters } from 'vuex'
import StationMarkerComponent from '../station-marker/station-marker.component.vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDCNAQelN8Ug0jxWzpoZz_PFW_SKBTHcJs',
    v: '3',
    libraries: 'places'
  }
})

export default {
  name: 'WeatherMap',
  components: {
    'weather-station-marker': StationMarkerComponent,
  },
  data () {
    return {
      zoom: 6,
      lat: 40.4047789,
      lng: -3.653974,
      options: {
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
      }
    }
  },
  computed: {
    center () {
      const { lat, lng } = this
      return { lat, lng }
    },
    ...mapGetters([
      'stations',
    ]),
  },
  methods: {
    onLoad () {
      this.$emit('loadMap', true)
    },
    onSelectStation (station) {
      this.$emit('selectStation', station)
    },
  }
}
