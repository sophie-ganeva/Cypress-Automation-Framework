/// <reference types="cypress" />

describe("Test Datepicker via webdriveruni", () => {
    it("Select date from the datepicker", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})
        cy.get('#datepicker').click();

        // let date = new Date();
        // date.setDate(date.getDate())
        // cy.log(date.getDate()) //get current day i.e. 22

        // let date2 = new Date();
        // date2.setDate(date.getDate() + 5)
        // cy.log(date2.getDate()) //get future day i.e. 22 + 5 = 27

        var date = new Date();
        //set furute date
        date.setDate(date.getDate() + 3); //same year 
        // date.setDate(date.getDate() + 360); //next year, same day
        // date.setDate(date.getDate() + 367); //next year, a week after current day

        //depending on the future date, it will figure out what year it will be
        var futureYear = date.getFullYear();  
        
        //formating the month - in the datepicket is "June 2023"
        var futureMonth = date.toLocaleString("default", {month: "long"});
        
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown')
                .find('.datepicker-switch')   //find where the month and year are located
                .first()  
                .then(currentDate => { 
                //selet the correct year
                //if the future year is not the current year
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();  //click on the first fin which is ">" button and move to the next month
                    selectMonthAndYear();
                }
            }).then(() => { //select the correct month
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay() {
            //select the correct day
            cy.get('[class="day"]') //selects all days in month - 30/31 days
                .contains(futureDay)
                .click();
        }

        selectMonthAndYear(); //select the correct year then month first
        selectFutureDay(); //then select the correct day
    });
})