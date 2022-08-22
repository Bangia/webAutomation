///<reference types='cypress' />


describe('Login test case Qcare Docs Admin',()=>{

   
    

    it('dynamic login test case',function(){

        cy.visit('https://admin.qcaredocs.com/')
        cy.get('[name="email"]').type('admin@example.com')
        cy.get('[name="password"]').type('12345678')
        cy.get('button[type="submit"]').click()
        cy.get('div[data-tc="home-header"]').then((breadCrumb)=>{
        var breadCrumbsValueExtracted = breadCrumb.text()
        cy.log("breadCrumbsValueExtracted",breadCrumbsValueExtracted)

        })

    })



    
})