/// <reference types="Cypress" />
//chaining commands
describe("Inspect Automation Test Store items using chain of commands",() =>{
    beforeEach(function(){
        cy.visit("https://automationteststore.com/");
    })
    
    it("Click on the first item header",() => {
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed').click()
    });

    it("Click on the first item using the item text",() => {
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click() 
    });

    it("Click on the first item using index",() => {
        //find depends on the get result; eq gives an index
        //find the product with index 0
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });

    it("Click on the first item using the item text with then",() => {
        //only when we click on that header the log command is executed
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log("Selected the following item: "+ itemHeaderText.text())
            //.text() is a jQuery command
        })
        //this non-cypress command is executed first
        console.log("Test123")
    });

})
// node_modules/.bin/cypress open