import fetch from 'isomorphic-fetch';
import { OWM_API_FORECAST, OWM_API_STATION } from '../config/open-weather-map.config';

export const services = {
  getStations () {
    return fetch(OWM_API_STATION())
      .then(res => res.json());
  },
  getForecast (coords) {
    return fetch(OWM_API_FORECAST(coords))
      .then(res => res.json());
  },
};
