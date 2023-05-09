/// <reference types="cypress" />

describe('Test File Upload via webdriveruni', () => {
    beforeEach(function(){
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
    })
    
    it('Upload a file....', () => {
        cy.get("#myFile").selectFile("cypress/fixtures/cutty.jpeg");
        cy.get("#submit-button").click();
    });

    it('Upload No file...', () => {
        cy.get("#submit-button").click();
    });
});