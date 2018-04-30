import { mount } from '@vue/test-utils'
import ForecastDetail from './forecast-detail.component.vue'

describe('ForecastDetail', () => {
  it('sets the correct name', () => {
    expect(typeof ForecastDetail.name).toEqual('string')
    const name = ForecastDetail.name
    expect(name).toEqual('ForecastDetail')
  })
})
