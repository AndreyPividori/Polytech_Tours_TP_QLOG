Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('[data-cy="email"]').clear().type(email)
  cy.get('[data-cy="password"]').clear().type(password)
  cy.get('[data-cy="submit"]').click()
})
Cypress.Commands.add('loginAdmin', () => {

    cy.visit('http://localhost:5173/')
    cy.contains('Corpo Padel')
    cy.get('[data-cy="nav-login"]').click()
    cy.get('[data-cy="email"]').type('admin@padel.com')
    
    cy.get('[data-cy="password"]').type('Admin@2025!')
    
    cy.get('[data-cy="submit"]').click()

}) 
    
