/// <reference types="Cypress" />
// see https://docs.cypress.io/guides/guides/web-security#Disabling-Web-Security
//change json file
describe("Cypress web security",() =>{
    
    // this test will fail
    // it("Validate visiting 2 different domains",() => {
    //     cy.visit("https://webdriveruniversity.com/")
    //     cy.visit("https://automationteststore.com/")
    // });

    it("Validate visiting 2 different domains via user action",() => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#automation-test-store')
            .invoke('removeAttr','target') //open in the same tab
            .click()
    });
})

