Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('[data-cy="email"]').clear().type(email)
  cy.get('[data-cy="password"]').clear().type(password)
  cy.get('[data-cy="submit"]').click()
})
