import Homepage_PO from '../../support/POM/webdriver-uni/Homepage_PO'
import ContactUs_PO from '../../support/POM/webdriver-uni/ContactUs_PO'

/// <reference types="Cypress" />


describe("Test Contact Us form via WebdriverUni",() =>{
    //overwite default timeout for this test suit
    Cypress.config("defaultCommandTimeout",20000)
    
    const homePage_PO = new Homepage_PO();
    const conactUs_PO = new ContactUs_PO();
    
    before(function(){
        cy.fixture('example').then(function(data){
            // this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(function(){
        //use page object model
        homePage_PO.visitHomepage();
        // cy.wait(2000)  //not good practice
        homePage_PO.clickOn_ContactUs_Button()
        // cy.pause()

    })

    it("Should be able to submit a successful submission via contact us form",() => {
        //use page object model command
        conactUs_PO.contactForm_Submission(data.first_name,data.last_name,data.email,data.comment,'h1','Thank You for your Message!')
    });

    it("Should fail because of a wrong message", {retries:{
        runMode: 0,
        openMode: 1}
    },() => {
        //use page object model command
        conactUs_PO.contactForm_Submission(data.first_name,data.last_name,data.email,data.comment,'h1','Thank You!')
    });

    //executed only in firefox browser
    it("Should be able to submit a successful submission via contact us form in firefox only",() => {
        if(Cypress.isBrowser('chrome')){
            conactUs_PO.contactForm_Submission(data.first_name,data.last_name,data.email,data.comment,'h1','Thank You for your Message!')
        }   
    });
    


    it("Should not be able to submit a successful submission via contact us form",() => {
        conactUs_PO.contactForm_Submission(data.first_name,data.last_name," ",data.comment,'body','Error: Invalid email address')
    });
})
