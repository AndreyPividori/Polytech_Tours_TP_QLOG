describe('Corpo Padel - recette E2E', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
  })

  it('CT-AUTH-01 - connexion administrateur nominale', () => {
    cy.visit('/login')
    cy.get('[data-cy="email"]').clear().type('admin@padel.com')
    cy.get('[data-cy="password"]').clear().type('Admin@2025!')
    cy.get('[data-cy="submit"]').click()

    cy.location('pathname').should('eq', '/')
    cy.get('[data-cy="nav-admin"]').should('be.visible').and('contain.text', 'Administration')
  })

  it('CT-AUTH-02 - accès direct à /admin sans être connecté', () => {
    cy.visit('/admin')

    cy.location('pathname').should('eq', '/login')
  })
})
