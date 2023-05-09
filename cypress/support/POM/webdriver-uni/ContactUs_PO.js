class ContactUs_PO {
    //this is a custom command 
    //can use cypress commands
    contactForm_Submission(firstName, lastName, email, comment, $selector, textToLocate) {
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comment)
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(textToLocate)

        // cy.screenshot()
        // cy.screenshot("make a contact us from submission")

        //asserion timeout - the command will wait up to 60sec
        // if it exeeds 60 sec, this step will fail
        // cy.get($selector).contains(textToLocate, {timeout:60000})

        //chain a pause; can go to next stell but the test will continue to be paused
        // cy.get($selector).pause().contains(textToLocate, {timeout:60000})
    }
}
export default ContactUs_PO;