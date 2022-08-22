/// <reference types="cypress" />


describe('Home Page Test Suite - SlideCast',()=>{

it('Test Case1: Top Header Launch Button',()=>{
    cy.visit("https://dev.slidecast.com/login");
              
    cy.get('#email').type("puneetkumar@salesoptima.com")
    cy.get('#password').type("Fr33dom!")
    cy.get('[class="btn btn-lg btn-selected center"]').click()
    cy.get('[formcontrolname="securityCode"]').type("579154")
    cy.get('[type="button"]').contains('Confirm').click()
    cy.wait(3000)
    cy.get('#top_launch_btn').click()
    cy.get('#modalLaunch-1 > div > div > div:nth-child(2) > div.mat-table-responsive.visible > mat-table > mat-row:nth-child(2) > mat-cell.align-right.mat-cell.cdk-column-ql.mat-column-ql.ng-star-inserted > button').invoke('removeAttr','target').click()
    //Need to add target_blank for developer so that we can invoke this 




})



it('Test Case2: Support Link ',()=>{
    cy.visit("https://dev.slidecast.com/login");
              
    cy.get('#email').type("puneetkumar@salesoptima.com")
    cy.get('#password').type("Fr33dom!")
    cy.get('[class="btn btn-lg btn-selected center"]').click()
    cy.get('[formcontrolname="securityCode"]').type("579154")
    cy.get('[type="button"]').contains('Confirm').click()
    cy.wait(4000)
    cy.get('#help_support').click()
    cy.get('#mat-menu-panel-1 > div > button:nth-child(1) > span').click({ force: true })
    cy.get('[formcontrolname="message"]').type("TEST MESSAGE")
    cy.contains('Send your Support Request').click()
    cy.wait(3000)
    cy.get('#toast-container').then((supportToastMessage)=>{
        
        const supportMessage = supportToastMessage.text()
        cy.log(supportMessage)
        expect(supportMessage).contain('Thank you')

    })

})






})