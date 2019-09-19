import { mount, createLocalVue } from '@vue/test-utils'
import CharacterInfo from '@/components/CharacterInfo'

const character = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: { name: 'Tatooine' },
  films: [
    { title: 'The Empire Strikes Back' },
    { title: 'Revenge of the Sith' },
    { title: 'Return of the Jedi' },
    { title: 'A New Hope' },
    { title: 'The Force Awakens' }
  ],
  species: { name: 'Human' }
}

describe('CharacterInfo.vue', () => {
  let wrapper

  beforeEach(() => {
    const localVue = createLocalVue()

    wrapper = mount(CharacterInfo, {
      localVue,
      propsData: {
        character
      }
    })
  })

  it('height should have the correct value', () => {
    expect(wrapper.find('#height').text()).toMatch(`Height: ${character.height}`)
  })

  it('mass should have the correct value', () => {
    expect(wrapper.find('#mass').text()).toMatch(`Mass: ${character.mass}`)
  })

  it('hair_color should have the correct value', () => {
    expect(wrapper.find('#hair_color').text()).toMatch(`Hair Color: ${character.hair_color}`)
  })

  it('skin_color should have the correct value', () => {
    expect(wrapper.find('#skin_color').text()).toMatch(`Skin Color: ${character.skin_color}`)
  })

  it('eye_color should have the correct value', () => {
    expect(wrapper.find('#eye_color').text()).toMatch(`Eye Color: ${character.eye_color}`)
  })

  it('birth_year should have the correct value', () => {
    expect(wrapper.find('#birth_year').text()).toMatch(`Birth Year: ${character.birth_year}`)
  })

  it('gender should have the correct value', () => {
    expect(wrapper.find('#gender').text()).toMatch(`Gender: ${character.gender}`)
  })

  it('homeworld should have the correct value', () => {
    expect(wrapper.find('#homeworld').text()).toMatch(`Homeworld: ${character.homeworld.name}`)
  })

  it('species should have the correct value', () => {
    expect(wrapper.find('#species').text()).toMatch(`Species: ${character.species.name}`)
  })

  it('films should have the correct value', () => {
    character.films.forEach(({ title }) => {
      expect(wrapper.find('#films').text()).toContain(title)
    })
  })
})
