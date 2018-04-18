import { expect } from 'chai'
import HomeContainer from '../home.container.vue'

describe('HomeContainer', () => {
  it('sets the correct name', () => {
    expect(typeof HomeContainer.name).to.be.a('string')
    const name = HomeContainer.name
    expect(name).to.be.equal('HomeMain')
  })
})
