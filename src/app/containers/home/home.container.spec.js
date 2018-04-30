import { mount } from '@vue/test-utils'
import HomeContainer from './home.container.vue'

describe('HomeContainer', () => {
  it('sets the correct name', () => {
    expect(typeof HomeContainer.name).toEqual('string')
    const name = HomeContainer.name
    expect(name).toEqual('HomeMain')
  })

  // Mount an instance and inspect the render output
  it('renders the correct logo', () => {
    const wrapper = mount(HomeContainer)

    expect(wrapper.contains('img')).toEqual(true)
  })
})
