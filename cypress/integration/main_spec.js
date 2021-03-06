describe('Main tests', function(){
    it('Should have menus', function() {
        cy.visit('/')
        cy.get('.menu-horizontal').contains('Menus').click()
        cy.url().should('include', 'menus')
        cy.contains('a', 'View menu')
    })

    it('Should have access to about us', function() {
        cy.visit('/')  
        cy.get('.menu-horizontal').contains('About La Maison').click()
        cy.url().should('include', 'about')

    })
    it('Should exist sitemap', function() {
        cy.request('/sitemap.xml').its('body').should('include', '<loc>')
    })
})