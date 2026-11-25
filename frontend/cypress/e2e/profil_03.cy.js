describe('PROFIL_03 - Modification de la date de naissance', () => {
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
    // Prérequis : AUTH_01 (connexion en tant que joueur)
    cy.login(users.admin.email, users.admin.password)
    cy.get('[href="/profile"]').click()
  })


  it('Rejette une date de naissance dans le futur (12/11/2028)', () => {
    cy.get('[data-cy="birth-date"]').type('2028-11-12')
    cy.get('[data-cy="save"]').click()
    cy.contains(/futur/i).should('be.visible')
  })

  it('Rejette un âge inférieur à 16 ans (12/11/2026)', () => {
    cy.get('[data-cy="birth-date"]').type('2026-11-12')
    cy.get('[data-cy="save"]').click()
    cy.contains(/16/i).should('be.visible')
  })

  it('Accepte une date valide (12/07/2005)', () => {
    cy.get('[data-cy="birth-date"]').type('2005-07-12')
    cy.get('[data-cy="save"]').click()
    cy.contains(/mis à jour/i).should('be.visible')

    // Vérifie que la date est conservée après rechargement
    cy.reload()
    cy.get('input[type="date"]').should('have.value', '2005-07-12')
  })
    
})