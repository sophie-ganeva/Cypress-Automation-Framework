/// <reference types="cypress" />

describe("Verify radio buttons via webdriveruni", () => {
    beforeEach(function(){
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })

    it("Check specific radio buttons", () => {
        //form with id = radio-buttons; input type = 'radio'
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        // index of radio button starts from 0; 
        cy.get('#radio-buttons')
            .find("[type='radio']")
            .eq(1)          //index strats from 0; index 2 is the 3th radio button
            .check()
    });

    it("Validate the states of specific radio buttons", () => {
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked')

        cy.get("[value='cabbage']").should('be.disabled')
    });
})