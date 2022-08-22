/// <reference types="cypress" />


describe('Login web application - SlideCast',()=>{
    it('Test Case 1: Login Via Email',()=>{
               cy.visit("https://dev.slidecast.com/login");
              
               cy.get('#email').type("puneetkumar@salesoptima.com")
               cy.get('#password').type("Fr33dom!")
               cy.get('[class="btn btn-lg btn-selected center"]').click()
               cy.get('[formcontrolname="securityCode"]').type("579154")
               cy.get('[type="button"]').contains('Confirm').click()
               cy.wait(5000)
               cy.get('.welcome-message').then((btn) => {
                const message = btn.text()
                cy.log(message)

                //Assertion to validate the message
                expect(message).to.equal('Ready to create a presentation?')
            

               })       
    })

    it('Test Case 2: Login web application via Mobile Number',()=>{
        cy.visit("https://dev.slidecast.com/login");
        cy.get('[for="mat-radio-3-input"]').click()
        cy.get('[formcontrolname="imobile"]').type('2015550000')
        cy.get('#password').type('Fr33dom!')
        cy.get('[class="btn btn-lg btn-selected center"]').click()
        cy.get('[formcontrolname="securityCode"]').type("579154")
        cy.get('[type="button"]').contains('Confirm').click()
        cy.wait(5000)
        cy.get('.welcome-message').then((btn) => {
         const message = btn.text()
         cy.log(message)
         //Assertion to validate the message
         expect(message).to.equal('Ready to create a presentation?')
         cy.get('#user_initials').click()
         cy.contains('Log out').click()

        })       

    })

   

    it('Test Case 3: Forgot password toast message validation',()=>{
    
    cy.get('.forgot').click()
    cy.wait(3000)
    cy.get('#emailr').type('nitinbangia8@gmail.com')
    cy.contains('Send Link').click()
    cy.wait(2000)
    cy.get('#toast-container').then((forgotPasswordToastMessage)=>{
        
        const forgotPasswordMessage = forgotPasswordToastMessage.text()
        cy.log(forgotPasswordMessage)
        expect(forgotPasswordMessage).contain('Reset Password')

    })
    
    })

    it('Test Case 4: Login Via Gmail',()=>{

        cy.log("LOGIN VIA GMAIL IS PENDING TO ADD YET")
        
    
    })



})

