import StationInfoComponent from '../station-info/station-info.component.vue'

export default {
  name: 'StationMarker',
  components: {
    'weather-station-info': StationInfoComponent,
  },
  props: {
    stationSelected: {
      type: Number,
      default: 0
    },
    station: {
      type: Object,
      default: Object
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      isHovered: false,
      info: this.station.main
    }
  },
  computed: {
    position () {
      const { coord = {} } = this.station
      return {
        lat: coord.Lat,
        lng: coord.Lon,
      }
    },
    infoWindowID () {
      return `iw-${this.index}`
    }
  },
  methods: {
    onSelectStation () {
      this.$emit('selectStation', this.station)
    },
    showInfoWindow (event) {
      this.isHovered = true
    },
    hideInfoWindow ({ target: marker }) {
      this.isHovered = false
    },
  }
}
