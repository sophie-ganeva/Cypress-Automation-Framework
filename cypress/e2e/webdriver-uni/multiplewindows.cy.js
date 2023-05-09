/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni",() =>{
    it("Should be able to submit a successful submission via contact us form",() => {
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#contact-us')
            .invoke('removeAttr','target') // remove the target attr (target = _blank)
            .click({force:true}) //forse the click
        cy.document().should('have.a.property', 'charset').and('equal', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include','contactus')
        cy.get('[name="first_name"]').type('Joe');
        cy.get('[name="last_name"]').type('Smitt');
        cy.get('[name="email"]').type('joe11@gmail.com');
        cy.get('textarea.feedback-input').type('This is comment');
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    });

    it("Should not be able to submit a successful submission via contact us form",() => {
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#contact-us')
            .invoke('removeAttr','target') // remove the target attr (target = _blank)
            .click({force:true}) //forse the click
        cy.get('[name="first_name"]').type('Joe');
        cy.get('[name="last_name"]').type('Smitt');
        cy.get('textarea.feedback-input').type('This is comment');
        cy.get('[type="submit"]').click() ;
        cy.get('body').contains('Error: all fields are required')
    });
})

