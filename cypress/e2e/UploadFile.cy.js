/// <reference types="cypress" />
import 'cypress-file-upload'

describe('Tutorialspoint Test', function () {
    // test case
    // it('Test Case6', function (){
    //    //file to be uploaded path in project folder
    //    const p = 'picture.png'
    //    // launch URL
    //    cy.visit("https://the-internet.herokuapp.com/upload")
    //    //upload file with attachFile
    //    cy.get('#file-upload').attachFile(p)
    //    //click on upload 
    //    cy.get('#file-submit').click()
    //    //verify uploaded file
    //    //cy.get('#uploaded-files').contains('Picture')
    // });

   


    it('Upload Contact', function (){
        cy.visit('https://dev.slidecast.com/login')
        cy.get('#email').type("puneetkumar@salesoptima.com")
        cy.get('#password').type("Fr33dom!")
        cy.get('[class="btn btn-lg btn-selected center"]').click()
        cy.get('[formcontrolname="securityCode"]').type("579154")
        cy.get('[type="button"]').contains('Confirm').click()   
        cy.get('#div_contacts').click()
        cy.get('body > app-contacts-v3 > div > div.container > div > div > div > div.container-header > div.row.title-header > div:nth-child(2) > div > div.float-right.more-all-contacts > button > span.mat-button-wrapper > mat-icon').click()
        cy.get('button[mattooltip="Bulk import your contacts from a file"]').click()
        //upload file with attachFile
        cy.get('#div1').selectFile('cypress/fixtures/files_images/slidecast_excel_template.xlsx', { action: 'drag-drop' })
        cy.contains('Upload File').click()
        
          
    })


    // it('File Upload using selectFile with drag and drop mode', () => {
    //     cy.visit('https://postimages.org/')
    //     cy.get('#uploadFile').selectFile('cypress/fixtures/picture.png', { action: 'drag-drop' })
    //     cy.get('.controls > h2', { timeout: 7000 }).should('have.text', 'Upload completed!')
    //     cy.get('.imagetitle').should('have.text', 'evening')
    //   })

 });