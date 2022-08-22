/// <reference types="cypress" />
describe('Example shows how to work with browser windows.', () => {
  


    it('Test Case 1 - Header Launch Button', () => {

        cy.intercept('POST','/api/Presentation/GetPresentations/').as('pageLoad');
        cy.visit('https://dev.slidecast.com/login', {
        })
        cy.get('#email').type("puneetkumar@salesoptima.com")
        cy.get('#password').type("Fr33dom!")
        cy.get('[class="btn btn-lg btn-selected center"]').click()
        cy.get('[formcontrolname="securityCode"]').type("579154")
        cy.get('[type="button"]').contains('Confirm').click()
        cy.wait(3000)
        cy.get('#top_launch_btn').click()
        cy.wait('@pageLoad');
        cy.get('.mat-table.mat-sort').should('be.visible')
        cy.window().then(win => {
            cy.stub(win, 'open');
            cy.get('#modalLaunch-1 > div > div > div:nth-child(2) > div.mat-table-responsive.visible > mat-table > mat-row:nth-child(2) > mat-cell.align-right.mat-cell.cdk-column-ql.mat-column-ql.ng-star-inserted > button').click({ force: true })
            .then(() => {
                expect(win.open).to.be.called
            });
        cy.wait(5000)
        cy.visit("https://devapp.slidecast.com/?u=1380&c=8668736&r=67lPRbREzbWvavNsgPJOFJI433b5tofcqm5mxEEmUDITR0tDHdK3v061kEig0YqQnTYzzb9RUNHLM2IBUG398ihqc7gLtXh0mdlzibLKUs2gcCiTUEkUENluYFHIO099G&d=-1")
        cy.wait(5000)
        //cy.contains('Start Voice Call').click()
        cy.contains('Start Presentation').click()
        cy.wait(5000)
        cy.contains('End Presentation').click()
        cy.wait(5000)
        

        })

        
          
        
      })


    
  

})


