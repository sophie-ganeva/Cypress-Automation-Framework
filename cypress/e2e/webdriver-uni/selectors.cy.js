/// <reference types="Cypress" />

describe("Selector example",() =>{
    it("Examples of selectors via WebdriverUni Contact Us page",() => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");

        //by tag name
        cy.get("input")

        //by attribute and a value
        cy.get("input[name='first_name']")

        //by id
        cy.get("#contact_me")

        //by class
        cy.get(".feedback-input")

        //by multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

        //by 2 different attributes
        cy.get("[name='email'][placeholder='Email Address']");

        //by xpath
        cy.xpath("//input[@name='first_name']")

    });
})