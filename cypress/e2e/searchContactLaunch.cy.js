/// <reference  types='cypress' />


describe('Searching is working fine or not for contact field',()=>{

    
    

    it('Search Test Case 1 - Launch Link searching',()=>{

       cy.visit("https://dev.slidecast.com/login");
       cy.get('#email').type("puneetkumar@salesoptima.com")
       cy.get('#password').type("Fr33dom!")
       cy.get('[class="btn btn-lg btn-selected center"]').click()
       cy.get('[formcontrolname="securityCode"]').type("579154")
       cy.get('[type="button"]').contains('Confirm').click()  
       cy.get('#div_launch').click()
       cy.wait(3000)

       //Code to handle searchbox
       cy.get('input[placeholder="Search"]').first().type("Nitin Bangia")

       //Assertion concept to validate from table

       cy.get('#modalLaunch-1 > div > div > div:nth-child(2) > div.mat-table-responsive.visible > mat-table').each(($el, index, $list)=>{
       cy.log('DATA IN TABLE : ',$el.text())
       const name = $el.text()
        expect(name.includes('Nitin')).to.be.true
       })



    })

    it('Search Test Case 1 - Contact Link searching',()=>{
        cy.visit("https://dev.slidecast.com/login");
        cy.get('#email').type("puneetkumar@salesoptima.com")
        cy.get('#password').type("Fr33dom!")
        cy.get('[class="btn btn-lg btn-selected center"]').click()
        cy.get('[formcontrolname="securityCode"]').type("579154")
        cy.get('[type="button"]').contains('Confirm').click()  
        cy.wait(3000)

        //contact Link clicked
        cy.get('#div_contacts').click()

        //contact Link search field
        cy.get('#input_search').type('David')

        //Handle table validation

        cy.get('body > app-contacts-v3 > div > div.container > div > div > div > div.lastinfo.mat-table-responsive.visible > mat-table').each(($element, index, $list)=>{

            cy.log('DATA PRESENT IN TABLE :',$element.text())
            const filteredResult = $element.text();
            expect(filteredResult.includes('David')).to.be.true

        })



    })



})