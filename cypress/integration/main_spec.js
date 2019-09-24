

describe('IG test', function(){
    it('Should have menus', function() {
        cy.visit('https://lamaisonmobilecatering.com/')
        cy.get('.menu-horizontal').contains('Menus').click()
        cy.url().should('include', 'menus')
        cy.contains('a', 'View menu')
    })

    it('Should have access to about us', function() {
        cy.visit('https://lamaisonmobilecatering.com/')        
        cy.get('.menu-horizontal').contains('About').click()
        cy.url().should('include', 'about')
        cy.get('h1').contains('About')

    })
})