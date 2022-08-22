/// <reference types="Cypress" />

describe('fetch all values from dropdown',function(){

    var count =0;

    it('dropdown count',()=>{
        cy.visit('https://admin.qcaredocs.com/appointments')
        // cy.get('[name="email"]').type('admin@example.com')
        // cy.get('[name="password"]').type('12345678')
        // cy.get('button[type="submit"]').click()
        cy.contains("Filters").click()
        cy.get('button[data-test-id="bookingMode"]').click()
        cy.get('div .MuiFormControlLabel-root').each(function($test){
            var name = $test.text()
            cy.log(name)
            console.log(name)
            count++;
          

            if(name.includes("inperson_followup")){
                cy.contains('inperson_followup').click()
            }
            cy.log(count);
        })
        
    })


   

})