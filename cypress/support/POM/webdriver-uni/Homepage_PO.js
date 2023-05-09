class HomePage_PO {
    visitHomepage() {
        // cy.visit(Cypress.env("webdriveruni_homepage"));  //env var

        //overwite the default timeout "pageLoadTimeout" in cypress.config
        cy.visit(Cypress.env("webdriveruni_homepage"), {timeout: 60000});
    }
    clickOn_ContactUs_Button(){
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    
        //the click command will have timeout of 8sec
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true}, {timeout: 8000})

    
    }
}
export default HomePage_PO;