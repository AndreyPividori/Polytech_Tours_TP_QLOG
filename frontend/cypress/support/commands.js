Cypress.Commands.add('loginAdmin', () => {

    cy.visit('http://localhost:5173/')
    cy.contains('Corpo Padel')
    cy.get('[data-cy="nav-login"]').click()
    cy.get('[data-cy="email"]').type('admin@padel.com')
    
    cy.get('[data-cy="password"]').type('Admin@2025!')
    
    cy.get('[data-cy="submit"]').click()

}) 
    