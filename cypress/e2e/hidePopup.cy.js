/// <reference types='cypress' />


describe('Test Suite', () => {
    
    it('Disable Toast Message/Pop up from alert',function(){
        

        /*
        Need to add logic for dynamic login

        */

        
        
        cy.visit('https://admin.qcaredocs.com')
        cy.get('[name="email"]').type('admin@example.com')
        cy.get('[name="password"]').type('12345678')
        cy.get('button[type="submit"]').click()
        cy.get('div[title="Navigator is here to help"]').invoke('hide')
    })

    it('2',function(){
        cy.visit('https://admin.qcaredocs.com')
        cy.get('[name="email"]').type('admin@example.com')
        cy.get('[name="password"]').type('12345678')
        cy.get('button[type="submit"]').click()
        cy.get('div[title="Navigator is here to help"]').invoke('hide')
    })


})