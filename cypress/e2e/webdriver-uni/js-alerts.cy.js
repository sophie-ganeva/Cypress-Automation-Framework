/// <reference types="cypress" />
//see https://docs.cypress.io/api/events/catalog-of-events#App-Events
describe("Handle js alerts", () => {
    beforeEach(function(){
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
    })

    it("Confirm js alert contains the correct text", () => {   
        cy.get('#button1').click()

        //manage the alert manually
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    });

    it("Validate js confirm alert box works correctly when clicking ok", () => {
        cy.get('#button4').click()

        //manualy handle alerts
        //also window:confirm - ok
        cy.on('window:alert', (str) => {
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });

    it("Validate js confirm alert box works correctly when clicking cancel", () => {
        cy.get('#button4').click()

        ////also window:alert - test fails
        cy.on('window:confirm', (str) => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });

    it.only("Validate js confirm alert box using a stub", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        const stub = cy.stub()
        //link the stub to the event
        //when the event is fired the stub will store the result
        cy.on('window:confirm', stub)

        cy.get('#button4').click().then(()=>{
            //index 0 because only one event has been fired
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true
        }).then(()=>{
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })

        
    });
})