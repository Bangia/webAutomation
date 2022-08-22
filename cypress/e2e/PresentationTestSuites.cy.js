/// <reference types="cypress" />


describe('Presentation Link Test Suites - SlideCast',()=>{

it('Test Case1: Presentation - Help me build Link',()=>{
    cy.visit("https://dev.slidecast.com/login");
              
    cy.get('#email').type("puneetkumar@salesoptima.com")
    cy.get('#password').type("Fr33dom!")
    cy.get('[class="btn btn-lg btn-selected center"]').click()
    cy.get('[formcontrolname="securityCode"]').type("579154")
    cy.get('[type="button"]').contains('Confirm').click()
    cy.wait(3000)
    cy.contains('Help me build it').click()
    cy.get('[formcontrolname="message"]').type("Test help me build out please")

    //Upload File code will add later
    cy.contains('Help me build it').click()
    cy.wait(3000)
    cy.get('#toast-container').then((helpBuildToastMessage)=>{
        
        const helpMessage = helpBuildToastMessage.text()
        cy.log(helpMessage)
        expect(helpMessage).contain('Thank you')

    })
})

it('Test Case 2: Presentation - Blank Template',()=>{
    cy.visit("https://dev.slidecast.com/login");
              
    cy.get('#email').type("puneetkumar@salesoptima.com")
    cy.get('#password').type("Fr33dom!")
    cy.get('[class="btn btn-lg btn-selected center"]').click()
    cy.get('[formcontrolname="securityCode"]').type("579154")
    cy.get('[type="button"]').contains('Confirm').click()
   
    cy.get('.start-new-box').click()
    cy.contains('Blank Template').click()
    
    cy.get('#name').clear()
    
    cy.get('#name').type("NAME")
    cy.contains('Save Presentation').click()
    cy.wait(3000)
    cy.get('.back-home-label').click()


})



})





