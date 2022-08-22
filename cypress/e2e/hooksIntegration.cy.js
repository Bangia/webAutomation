/// <reference types='cypress' />


describe('Hooks Concepts and its intergration process',()=>{

    // before(function(){
    // cy.log('Call once before first IT test case or executes once prior all tests in it block')
    // })

    // after(function(){
    //     cy.log('Call once after last IT test case or executes once post all tests in it block') 
    // })

    beforeEach(function(){
        cy.log('Call each time before  IT test case or executes prior each test within it block')
    })

    afterEach(function(){
        cy.log('Call each time after  IT test case or executes post each test within it block')
    })


    it('First Test Case',()=>{

        cy.log('First Test Case')
    })

    it('Second Test Case',()=>{
        cy.log('Second Test Case')

    })

    //IT only

    it.only('Third Test case',()=>{
        cy.log('it.only Means -->will run only this THIRD TEST CASE')
    })



    //IT.skip

    it.skip('Fourth Test case',()=>{
        cy.log('it.skip Means --> will skip only this FOURTH TEST CASE')
    })




    
})
