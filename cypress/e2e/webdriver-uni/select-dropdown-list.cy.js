/// <reference types="cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown lists", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#dropdowm-menu-1').select('c#')
        //select option by attribute value 
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        //select optino by attribute text 
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')

        // select maven base on its value & assert
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        // select testNG base on its text & assert
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')


    });
})