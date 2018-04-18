import { services } from '../services'
import WeatherActionTypes from '../action-types'

export const onSelectStation = ({ commit }, station) => {
  const id = station.getIn(['id'])
  const lat = station.getIn(['coord', 'Lat'])
  const lon = station.getIn(['coord', 'Lon'])
  commit(WeatherActionTypes.SELECT_STATION, id)
  services.getStations({ lat, lon })
    .then((data) => {
      console.log('data', data)
      commit(WeatherActionTypes.SET_STATION_INFO, data)
    })
}

export const getStations = ({ commit }) => (
  services.getStations()
    .then(stations => commit(WeatherActionTypes.SET_STATION, stations && stations.list))
)
