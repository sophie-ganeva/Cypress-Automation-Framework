/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store",() =>{
    //load data from userData.json file and use alias
    before(function(){
        //overwites the values in config.js
        // cy.viewport(550,750) //pixel dimentions of the screen
        cy.fixture("userDetails").as("user")
    })
    it("Should be able to submit a successful submission via contact us form",() => {
        cy.visit("https://automationteststore.com/");
        
        //css seclector - $ at the end look for contact
        cy.get('a[href$="contact"]').click();
        //cy.xpath("//a[contains(@href,'contact')]").click()
        
        //get the the result from fixure command and move it to the "user"
        cy.get("@user").then((user)=>{
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
        

        //check if the attribute 'name' is present and contains 'email'
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        
        cy.get('#ContactUsFrm_enquiry').type('Some text');
        //xpath - //textarea[@id="ContactUsFrm_enquiry"]
        
        cy.get('button[title="Submit"]').click();
        
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        
        console.log("Test has completed")
        cy.log("Test has completed")
    });
    
    it("Should log the text of the clicked link",() => {
        cy.visit("https://automationteststore.com/");
        //output the "contact us" text when you click the link
        cy.get('a[href$="contact"]').click().then(function(linkText){
            cy.log("Clicked on link using text: "+ linkText.text())
        });
         
    });

})
// node_modules/.bin/cypress open