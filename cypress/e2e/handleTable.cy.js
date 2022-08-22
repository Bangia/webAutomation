/// <reference types="cypress" />

describe('Tutorialspoint Test', function () {
    // test case
    it('Test Case4', function (){
       cy.visit("https://dev.slidecast.com/login");
       cy.get('#email').type("puneetkumar@salesoptima.com")
       cy.get('#password').type("Fr33dom!")
       cy.get('[class="btn btn-lg btn-selected center"]').click()
       cy.get('[formcontrolname="securityCode"]').type("579154")
       cy.get('[type="button"]').contains('Confirm').click()   
       cy.get('#div_contacts').click()
       // identify the second column for all the rows
       cy.get('body > app-contacts-v3 > div > div.container > div > div > div > div.lastinfo.mat-table-responsive.visible > mat-table').each(($el,
       index, $list) => {
        cy.log("Data in Table",$el.text())
        const name = $el.text()
        cy.log("Table Data details",name)

        expect(name).to.include('(971) 171-8149')
     
        
       })
    });
 });