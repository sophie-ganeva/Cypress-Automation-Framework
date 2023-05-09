import AutoStore_Homepage_PO from '../../support/POM/test-store/AutoStore_Homepage_PO'
import AutoStore_HairCare_PO from '../../support/POM/test-store/AutoStore_HairCare_PO'
/// <reference types="cypress" />

describe("Add multiple products to basket", () => {
  
  before(function () {
    cy.fixture("products").then(function(data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    cy.clearLocalStorage();
    cy.clearCookies();
    
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    //use page object model commands
    const store_homepage = new AutoStore_Homepage_PO()
    store_homepage.accessHomepage()
    store_homepage.clickOn_HairCare_Link()
  });

  it("Add specific items to basket", () => {
      // globalThis.data.productName.forEach(function(element) {
      //     cy.addProductToBasket(element)
      // })
      // cy.get('.dropdown-toggle > .fa').click();

      //use page object command to navigate to haircare page
      const items = new AutoStore_HairCare_PO()
      items.addHairCareProductsToBasket()
  });
});
