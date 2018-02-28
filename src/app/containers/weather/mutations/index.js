/* eslint-disable no-param-reassign */
import WeatherActionTypes from '../action-types';

export const mutations = {
  [WeatherActionTypes.SET_STATION] (state, stations) {
    state.stations = stations;
  }
};
