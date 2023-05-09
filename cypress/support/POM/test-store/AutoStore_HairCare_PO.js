class AutoStore_HairCare_PO {
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element)
            // cy.addProductToBasket(element).then(()=>{
            //     debugger
            // })
        })
        cy.get('.dropdown-toggle > .fa').click();
        // cy.get('.dropdown-toggle > .fa').click().debug();
    }
}
export default AutoStore_HairCare_PO;