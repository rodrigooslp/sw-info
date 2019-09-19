import { mount, createLocalVue } from '@vue/test-utils'
import StarshipInfo from '@/components/StarshipInfo'

const starship = {
  name: 'X-wing',
  model: 'T-65 X-wing',
  manufacturer: 'Incom Corporation',
  cost_in_credits: '149999',
  length: '12.5',
  max_atmosphering_speed: '1050',
  crew: '1',
  passengers: '0',
  cargo_capacity: '110',
  consumables: '1 week',
  hyperdrive_rating: '1.0',
  MGLT: '100',
  starship_class: 'Starfighter'
}

describe('StarshipInfo.vue', () => {
  let wrapper

  beforeEach(() => {
    const localVue = createLocalVue()

    wrapper = mount(StarshipInfo, {
      localVue,
      propsData: {
        starship
      }
    })
  })

  it('model should have the correct value', () => {
    expect(wrapper.find('#model').text()).toMatch(`Model: ${starship.model}`)
  })

  it('manufacturer should have the correct value', () => {
    expect(wrapper.find('#manufacturer').text()).toMatch(`Manufacturer: ${starship.manufacturer}`)
  })

  it('cost_in_credits should have the correct value', () => {
    expect(wrapper.find('#cost_in_credits').text()).toMatch(`Cost in Credits: ${starship.cost_in_credits}`)
  })

  it('length should have the correct value', () => {
    expect(wrapper.find('#length').text()).toMatch(`Length: ${starship.length}`)
  })

  it('max_atmosphering_speed should have the correct value', () => {
    expect(wrapper.find('#max_atmosphering_speed').text()).toMatch(`Atmosphering Speed: ${starship.max_atmosphering_speed}`)
  })

  it('crew should have the correct value', () => {
    expect(wrapper.find('#crew').text()).toMatch(`Crew: ${starship.crew}`)
  })

  it('passengers should have the correct value', () => {
    expect(wrapper.find('#passengers').text()).toMatch(`Passengers: ${starship.passengers}`)
  })

  it('cargo_capacity should have the correct value', () => {
    expect(wrapper.find('#cargo_capacity').text()).toMatch(`Cargo Capacity: ${starship.cargo_capacity}`)
  })

  it('consumables should have the correct value', () => {
    expect(wrapper.find('#consumables').text()).toMatch(`Consumables: ${starship.consumables}`)
  })

  it('hyperdrive_rating should have the correct value', () => {
    expect(wrapper.find('#hyperdrive_rating').text()).toMatch(`Hyperdrive Rating: ${starship.hyperdrive_rating}`)
  })

  it('MGLT should have the correct value', () => {
    expect(wrapper.find('#MGLT').text()).toMatch(`MGLT: ${starship.MGLT}`)
  })

  it('starship_class should have the correct value', () => {
    expect(wrapper.find('#starship_class').text()).toMatch(`Starship Class: ${starship.starship_class}`)
  })
})
