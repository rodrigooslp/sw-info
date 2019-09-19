describe('characters', () => {
  it('Visits the root url', () => {
    cy.visit('/')
  })

  it('Check interaction with a random item of the list', () => {
    cy.server()
    cy.route('get', '/api/people/').as('getCharacters')
    cy.visit('/')

    cy.wait('@getCharacters').then(({ response: { body: { results } } }) => {
      const index = Math.floor(Math.random() * results.length)
      const character = results[index]

      cy.get('#character-list .v-list-item').eq(index).click()

      cy.contains('#info-card .v-card__title', character.name)
      cy.contains('#info-card #birth_year', character.birth_year)
      cy.contains('#info-card #gender', character.gender)
      cy.contains('#info-card #height', character.height)
      cy.contains('#info-card #mass', character.mass)
      cy.contains('#info-card #skin_color', character.skin_color)
      cy.contains('#info-card #eye_color', character.eye_color)
      cy.contains('#info-card #hair_color', character.hair_color)
    })
  })
})
