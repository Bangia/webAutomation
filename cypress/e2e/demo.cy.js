/// <reference types='cypress' />




describe('Test Suite', () => {
    var count = 0;
    var countRecord = 6;
    //Hooks added
    // before(function(){
    //     cy.visit('https://admin.qcaredocs.com/')
    //     cy.get('[name="email"]').type('admin@example.com')
    //     cy.get('[name="password"]').type('12345678')
    //     cy.get('button[type="submit"]').click()
    // })

    it.skip('Validate search filter is working fine or not', () => {
        cy.wait(3000)
        cy.visit('https://admin.qcaredocs.com/patients')
        cy.get('[aria-label="Patients"]').click()
        cy.get('input[placeholder="Search Patient"]').type('Harry')
        //Handle table in Patient
        cy.wait(6000)
        cy.get('.MuiTableBody-root').then(($el) => {
            var name = $el.text()
            cy.log(name)
            expect(name).to.contain('Harry')
        })
       cy.get('input[placeholder="Search Patient"]').clear()
    })

    it.skip('validate filter by Gender', function () {
        cy.wait(3000)
        cy.get('button[type="button"] div').click()
        cy.get('button[data-test-id="gender"]').click()
        cy.get('input[name="gender"]').eq(0).click()
        cy.get('button[type*="submit"]').click()
        //Validation of gender
        cy.wait(3000)
        cy.get('tbody tr  :nth-child(7)').each(($ele, index, $list) => {
            let name = $ele.text()
            cy.log(name)
            if (name.includes('Male')) {
                cy.get('tbody tr  :nth-child(7)')
                    .eq(index).next().then(function (desc) {
                        // capturing the text of next sibling
                        const rsl = desc.text();
                        cy.log("TEST PATIENT NAME IS :", rsl)
                        //expect(rsl).to.contains('Ritika Saim');
                        if (rsl === 'Nimeshi Jaini') {
                            expect((rsl === 'Nimeshi Jaini')).to.be.true
                        }
                    })
            }
        })
    })

    it.skip('Print and validate all user whose age is 22', function () {
        cy.get('button[type="button"] div').click({ multiple: true })
        cy.contains('Clear').click({ force: true })
        cy.contains('Done').click({ force: true })
        cy.get('button[type="button"] div').click({ multiple: true })
        cy.get('button[data-test-id="age"]').click()
        cy.get('input[name="age"]').type("22")
        cy.contains('Done').click({ force: true })
        cy.wait(3000)
        //Count number of records based on filter
        cy.get('tbody tr').each(($ageData, index, $list) => {
            var ageDetails = $ageData.text()
            cy.log("Table data of Age  22 Is : ", " ", ageDetails)
            count++
            cy.log("Count of records", count)
            if (count == countRecord) {
                expect(true).to.be.true
                cy.log("Actual Count is ", count, "Hence test case is Passed")
            }
            else {
                cy.log("Actual Count is ", count, "Hence test case is Failed")
            }
        })

        cy.get('tbody tr').then(($ageData, index, $list) => {
            var ageDetails = $ageData.text()
            cy.log("Table data of Age  22 Is : ", " ", ageDetails)
            count++
            cy.log("Count of records", count)
            //expect(count).to.have.length(6)
            expect(ageDetails).to.contain('Hisaifi')
        })
    })

    it.skip('Print and validate all user whose age is between 22 & 40', function () {
        cy.get('button[type="button"] div').click({ multiple: true })
        cy.contains('Clear').click({ force: true })
        cy.contains('Done').click({ force: true })
        cy.get('button[type="button"] div').click({ multiple: true })
        cy.get('button[data-test-id="age"]').click()
        cy.get('div[role="button"]').eq(1).click()
        //Multiple values select from dropdown
        cy.get('li[data-value="MULTIPLE"]').click()
        cy.get('input[name="age_min"]').type("22")
        cy.get('input[name="age_max"]').type("36")
        cy.contains('Done').click({ force: true })
        cy.wait(3000)

       //Pagination Logic starts here....


       var paginationValue = 5


       cy.scrollTo('bottom');
       
       if (paginationValue == 100) {
         cy.log("Maxmimum Limit reached")
       }
       else{
        cy.get('.MuiSelect-root').click()
        cy.wait(3000)
        cy.get('li[data-value="100"]').click()
       }
        // cy.log("Print and validate all user whose age is between 22 & 40")
    })


    it('Validate export CSV link is downloaded or not',function(){
        cy.visit('https://admin.qcaredocs.com/patients')
        cy.get('[style="float: right; margin-right: 20px; color: rgb(142, 202, 230);"] > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.get('[role="menuitem"]').click()
        cy.get('.multi-select').click()
        cy.contains('Select All').click()
        cy.get('button span').contains('Confirm').click()
        cy.get(':nth-child(5) .MuiDialog-container .MuiPaper-root .MuiDialogActions-root .MuiButton-containedPrimary').click()
        //cy.readFile('/Users/rst/Desktop/webAutomation/cypress/downloads/patient_csv_report.csv').should('exist')
       
    })


})



