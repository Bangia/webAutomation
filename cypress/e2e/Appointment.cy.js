/// <reference types='cypress' />

describe('Test Suite',()=>{


   

    it('Login Test case 1',()=>{
        cy.visit('https://admin.qcaredocs.com/appointments')
        // cy.get('[name="email"]').type('admin@example.com')
        // cy.get('[name="password"]').type('12345678')
        // cy.get('button[type="submit"]').click()

        cy.wait(4000)
        cy.get('[placeholder="Search Appointments"]').type('Akshit')

        cy.get('table tbody tr').then(function($el){

            let name = $el.text()
            cy.log(name)
            cy.log(name.length)
            expect(name).to.contain('Akshit')
            cy.log("NEW VALUE ADDED");

        })
      
    })
   


})