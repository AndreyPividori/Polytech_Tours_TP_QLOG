describe('AUTH_01 - Authentification', () => {
  let users

  // On charge le fichier cypress/fixtures/users.json avant les tests pur récuperer les données de connexion.
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

  it("Se connecte en tant qu'admin", () => {
  cy.login(users.admin.email, users.admin.password)
  cy.url().should('not.include', '/login')
  //Permet de vérifier que le navigateur a bien quitté la page /login après une connexion réussie.
  })

  it('Se connecte en tant que joueur', () => {
    cy.login(users.joueur.email, users.joueur.password)
    cy.url().should('not.include', '/login')
  })
})

