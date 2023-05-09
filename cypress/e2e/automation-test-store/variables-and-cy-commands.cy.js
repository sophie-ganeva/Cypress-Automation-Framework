/// <reference types="Cypress" />

describe("Verifying variables, cypress commands and jquery commands",() =>{
    it("Navigating to specific product pages",() => {
        cy.visit("https://automationteststore.com/");
       //a[href*='product/category&path'] -> all(*) href - highlights all links
       //contains() -> search for this text

    //    // the following will fail - the execution order is not garantee
    //     const makeupLink = cy.get("a[href*='product/category&path']").contains('Makeup');
    //     const skincareLink = cy.get("a[href*='product/category&path']").contains('Skincare');
    //     makeupLink.click();
    //     skincareLink.click();

    //     // the following will pass but not a good approach
    //     const makeupLink = cy.get("a[href*='product/category&path']").contains('Makeup');
    //     makeupLink.click();
    //     const skincareLink = cy.get("a[href*='product/category&path']").contains('Skincare');
    //     skincareLink.click();

        //the following approach is recommended
        const makeupLink = cy.get("a[href*='product/category&path']").contains('Makeup').click();
        const skincareLink = cy.get("a[href*='product/category&path']").contains('Skincare').click();
        

    });

    it("Log the header text of the page",() => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path']").contains('Makeup').click();
        
        //not a good approach
        // const header = cy.get("h1 .maintext");
        // //fails 
        // cy.log(header.text())
        // //pass but not what needed
        // cy.log(header)

        //use promises (then command)
        cy.get("h1 .maintext").then(($headerText)=>{
            //use the jquery text() command
            const headerText = $headerText.text();
            cy.log("Found header text: "+ headerText);
            expect(headerText).is.equals('Makeup')
        });
        

    });

    it.only("Validate properties of the Contatc Us page",() => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        
        //uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form') // find the id and the header text
            .find('#field_11') // find the id of the div
            .should('contain','First name') // ensure this element contains the text 

        //jquery approach -> use promises(then)
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find("#field_11").text() // extract the text from lable
            expect(firstNameText).to.contain('First name')

            //embedded commands (closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText) //outputs the element
            })
        })

        
        

    });
})