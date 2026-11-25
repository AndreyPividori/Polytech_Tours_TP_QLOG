describe('AUTH_03 - Mécanisme anti-brute force', () => {
  let users

  before(() => {
    cy.fixture('users').then((data) => {
      users = data
    })
  })

    // Réinitialise la session entre chaque test
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })

  it('Bloque le compte après 5 mauvais mots de passe', () => {
    for (let i = 1; i <= 6; i++) {
      cy.login(users.faux_Identifiant.email, users.faux_Identifiant.password)
      cy.wait(3000) // pause de 3 secondes entre chaque tentative
    }

    cy.contains(/bloqué/i).should('be.visible')
    cy.url().should('include', '/login')

    cy.wait(6 * 60 * 1000 + 5000)

    //On vérifie que la connexion a réussi après le blocage de 5 min.
    cy.login(users.vrai_Identifiant.email, users.vrai_Identifiant.password)
    cy.url().should('not.include', '/login')
  })

})
