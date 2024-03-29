/// <reference types="cypress" />

describe("Validate webdriveruni homepage links", () => {
    it("Confirm links redirect to the correct pages", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        //go to contact us page
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')

        //go back to home page
        cy.go('back')
        cy.reload()
        cy.url().should('include', 'http://www.webdriveruniversity.com/')
        //cy.reload(true) //reload without using cache

        //go again to contact us page
        cy.go('forward')
        cy.url().should('include', 'contactus')


        cy.go('back')
        //go to login page
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')
        
        cy.go('back')
        //go to do list page
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')
    });
})