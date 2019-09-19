describe('about', () => {
  it('Visits the about url', () => {
    cy.visit('/about')
  })

  it('The title of the card should have the correct value', () => {
    cy.visit('/about')
    cy.contains('.v-card__title', 'About')
  })

  it('The message of the card should have the correct value', () => {
    const message = 'This is a simple application showcasing an API use. Feel free to modify or build anything on top of it.'

    cy.visit('/about')
    cy.contains('.v-card__text', message)
  })

  it('The signature of the card should have the correct value', () => {
    const signature = 'Made with ❤ by Rodrigo Lopes'

    cy.visit('/about')
    cy.contains('.v-card__text', signature)
  })
})
