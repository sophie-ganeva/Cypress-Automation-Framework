import Homepage_PO from '../../support/POM/webdriver-uni/Homepage_PO'
import ContactUs_PO from '../../support/POM/webdriver-uni/ContactUs_PO'

/// <reference types="Cypress" />


describe("Test Contact Us form via WebdriverUni",() =>{
    before(function(){
        cy.fixture('example').then(function(data){
            // this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(function(){
        // cy.visit("http://www.webdriveruniversity.com")
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})  //click on contact us button
        
        //use the baseUrl
        // cy.visit("/"+ "/Contact-Us/contactus.html");  

        //use dynamic url as the base url is set in env.vars
        // cy.visit(Cypress.env("webdriveruni_homepage")+ "/Contact-Us/contactus.html")  
    
        //use page object model
        const homePage_PO = new Homepage_PO();
        homePage_PO.visitHomepage();
        homePage_PO.clickOn_ContactUs_Button()

    })

    it("Should be able to submit a successful submission via contact us form",() => {
        //get the active window
        cy.document().should('have.a.property', 'charset').and('equal', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include','contactus')

        //hardcoded
        // cy.get('[name="first_name"]').type('Joe');
        // cy.get('[name="last_name"]').type('Smitt');
        // cy.get('[name="email"]').type('joe11@gmail.com');
        // cy.get('textarea.feedback-input').type('This is comment');

        //load data from file
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('[name="email"]').type(data.email);
        // cy.get('textarea.feedback-input').type(data.comment);

        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text', 'Thank You for your Message!')

        //use custom commands -> support>commands
        // cy.webdriverUni_ContactForm_Submission(data.first_name,data.last_name,data.email,data.comment,'h1','Thank You for your Message!')
        
        //use environment vars (cypress.config.js) & custom commands (support>commands)
        // cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"),data.last_name,data.email,data.comment,'h1','Thank You for your Message!')
    
        //use page object model command
        const conactUs_PO = new ContactUs_PO();
        conactUs_PO.contactForm_Submission(data.first_name,data.last_name,data.email,data.comment,'h1','Thank You for your Message!')
    
    });

    it("Should not be able to submit a successful submission via contact us form",() => {
        
        //hardcoded
        // cy.get('[name="first_name"]').type('Joe');
        // cy.get('[name="last_name"]').type('Smitt');
        // cy.get('textarea.feedback-input').type('This is comment');

        //loaded from example.json file
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('textarea.feedback-input').type(data.comment);

        // cy.get('[type="submit"]').click() ;
        // cy.get('body').contains('Error: all fields are required')

        //use custom commands -> support>commands
        // cy.webdriverUni_ContactForm_Submission(data.first_name,data.last_name," ",data.comment,'body','Error: Invalid email address')

        const conactUs_PO = new ContactUs_PO();
        conactUs_PO.contactForm_Submission(data.first_name,data.last_name," ",data.comment,'body','Error: Invalid email address')
    });

    
})

