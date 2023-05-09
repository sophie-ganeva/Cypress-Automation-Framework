/// <reference types="Cypress" />

describe("Iterate over elements",() =>{
    beforeEach(function(){
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path']").contains('Hair Care').click();
    })

    it("Log information of all hair care products",() => {
        //locate all headers
        cy.get(' .fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text()) //extract the text of each element
        })
        
    });

    it("Add specific product to basket",() => {
        // cy.get(' .fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //     if($el.text().includes('Curls to straight Shampoo')){
        //         cy.wrap($el).click()
        //     }
        // })

        //use a custom commant (support > commands)
        cy.selectProduct('Curls to straight Shampoo')
    });

    it("Add another specific product to basket",() => {
        //use a custom commant (support > commands)
        cy.selectProduct('Seaweed Conditioner')
    });

    



        
        


})