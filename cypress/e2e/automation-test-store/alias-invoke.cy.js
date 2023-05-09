/// <reference types="Cypress" />

describe("Alias and invoke",() =>{
    it("Validate a specific hair care product",() => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path']").contains('Hair Care').click();
        cy.get(' .fixed_wrapper .prdocutname')
            .eq(0) // get 1-st element
            .invoke('text') //extract the text of 1-st header
            .as('productThumbNail') //alias with the name of var
        cy.get('@productThumbNail') // always use '@' in front of alias
            .its('length') 
            .should('be.gt',5) //check is the length is greater than 5
        cy.get('@productThumbNail')
            .should('include', 'Seaweed Conditioner')
    });  

    it("Validate products count",() => {
        cy.visit("https://automationteststore.com/");
        
        cy.get(' .thumbnail').as('productThumbnail') //alias with the name of var

        // cy.get('@productThumbnail') // always use '@' in front of alias
        //     .its('length') 
        //     .should('be.eq',16) //check is the length is equal to 16

        cy.get('@productThumbnail') // always use '@' in front of alias
            .should('have.length',16) 
    }); 

    it("Validate a the title of Add to Cart",() => {
        cy.visit("https://automationteststore.com/");
        cy.get(' .thumbnail').as('productThumbnail') //alias with the name of var

        cy.get('@productThumbnail') // find the class name .thumbnail
            .find(' .productcart') // look inside the result (that element)
            .invoke('attr','title') //on the result invoke the attribute title
            .should('include', 'Add to Cart')
    }); 

    it.only("Calculate total of normal and sale products",() => {
        cy.visit("https://automationteststore.com/");
        cy.get(' .thumbnail').as('productThumbnail') 

        // cy.get('@productThumbnail')
        //     .find(' .oneprice') //find the products with single price
        //     .each(($el, index, $list) => {
        //     cy.log($el.text())     
        // })
        var itemsTotal = 0;
        cy.get('@productThumbnail').find(' .oneprice').invoke('text').as('itemPrice')
        cy.get('@productThumbnail').find(' .pricenew').invoke('text').as('saleItemPrice')
        
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0;
            var itemPrice = $linkText.split('$') // split the array into substrings (remove dollar sign)
            var i;
            for(i = 0; i < itemPrice.length; i++){
                cy.log(itemPrice[i])
                itemPriceTotal += Number(itemPrice[i])
            }
            cy.log('Non sale price items total: ' + itemPriceTotal)

            itemsTotal += itemPriceTotal;
            
        })

        cy.get('@saleItemPrice').then($linkText => {
            var saleItemPriceTotal = 0;
            var saleItemPrice = $linkText.split('$') // split the array into substrings (remove dollar sign)
            var i;
            for(i = 0; i < saleItemPrice.length; i++){
                cy.log(saleItemPrice[i])
                saleItemPriceTotal += Number(saleItemPrice[i])
            }
            cy.log('Sale price items total: ' + saleItemPriceTotal)
            
            itemsTotal += saleItemPriceTotal;

        })
        .then(() => {
            cy.log("The toal price of all products" + itemsTotal)
            expect(itemsTotal).to.equal(500.49)
        })
    }); 


})