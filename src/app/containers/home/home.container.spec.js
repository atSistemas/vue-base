import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import HomeContainer from './home.container.vue'

describe('HomeContainer', () => {
  it('sets the correct name', () => {
    expect(typeof HomeContainer.name).to.be.a('string')
    const name = HomeContainer.name
    expect(name).to.be.equal('HomeMain')
  })

  // Mount an instance and inspect the render output
  it('renders the correct logo', () => {
    const wrapper = mount(HomeContainer)

    expect(wrapper.contains('img')).to.be.equal(true)
  })
})
