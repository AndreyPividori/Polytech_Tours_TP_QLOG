/// <reference types="cypress" />
/*
* Test Cypress pour les scores
*/

describe('Score', () => {

    beforeEach(() => {
        cy.loginAdmin()
    })

    it("Modification du score", () => {
      cy.contains('Corpo Padel')
      cy.get('.gap-1 > [href="/matches"]').click()
      cy.window().then((win) => {cy.stub(win, 'prompt').onFirstCall().returns('6-2,6-3,7-6').onSecondCall().returns('2-6,3-6,6-7')})
      cy.get(':nth-child(1) > .flex-wrap > .text-right > .mt-2 > [data-cy="m-score"]').click()

    })


})