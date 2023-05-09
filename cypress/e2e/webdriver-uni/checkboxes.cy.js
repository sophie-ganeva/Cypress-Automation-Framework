/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(function(){
        // cy.log(Cypress.env("name")) //read values from custom config files
        cy.navigateTo_WebdriverUni_Homepage() //use the custom command to go to homepage
        // cy.visit("/") //use the baseurl in cypress.config.js to go to homepage
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        //use custom command to navidate to checkboxes page
        cy.navigateTo_WebdriverUni_Checkbox_Page()

    })
    
    it("Check and validate checkbox", () => {
        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1') //use alias
        cy.get('@option-1').check().should('be.checked')
    });

    it("Should fail, check the video and screenshots in the dashboard", () => {
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1') //use alias
        cy.get('@option-2').check().should('be.checked')
    });

    it("Uncheck and validate checkbox", () => {
        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    });

    it("Check multiple checkbox", () => {
        // value of first checkbox = "option-1"
        cy.get("input[type='checkbox']")
            .check(["option-1","option-2","option-3","option-4"])
            .should('be.checked')
        
    });
})