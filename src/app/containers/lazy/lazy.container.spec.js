import { mount } from '@vue/test-utils'
import LazyContainer from './lazy.container.vue'

describe('HomeContainer', () => {
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    const wrapper = mount(LazyContainer)

    expect(wrapper.find('p').text()).toEqual('Lazy loaded container')
  })
})
