/// <reference types="cypress" />
/*
* Test Cypress pour la planification match
*/
const dateAujourdhui = new Date()
const date = dateAujourdhui.toISOString().split('T')[0]
const heureActuelle = [String(dateAujourdhui.getHours()).padStart(2, '0'),String(dateAujourdhui.getMinutes()).padStart(2, '0')].join(':')
const score = Math.floor(Math.random() * 10) + 1
describe('Planification match', () => {

    beforeEach(() => {
        cy.loginAdmin()
    })

    it("Creation d'un match : PM_01", () => {
      cy.contains('Corpo Padel')
      cy.get('.gap-1 > [href="/matches"]').click()
      cy.get('[data-cy="new-match"]').click()
      cy.get('[data-cy="m-date"]').type(date)
      cy.get('[data-cy="m-time"]').type(heureActuelle)
      cy.get('[data-cy="m-court"]').clear().type(score)

      cy.get('[data-cy="m-team1"]').then(($team1) => {
      const options1 = [...$team1.find('option')].filter(option => option.value !== '')
      const choix1 = options1[Math.floor(Math.random() * options1.length)].value
      cy.wrap($team1).select(choix1)
      cy.get('[data-cy="m-team2"]').then(($team2) => {
      const options2 = [...$team2.find('option')].filter(option => option.value !== '' && option.value !== choix1)
      const choix2 = options2[Math.floor(Math.random() * options2.length)].value
      cy.wrap($team2).select(choix2)})})

      cy.get('[data-cy="m-submit"]').click()
    })

    it("Suppresion d'un match : PM_05",() => {
      cy.contains('Corpo Padel')
      cy.get('.gap-1 > [href="/matches"]').click()
      cy.get(':nth-child(10) > .flex-wrap > .text-right > .mt-2 > [data-cy="m-delete"]')
    })
})
