describe('register', () => {
    it('visit gallery app', () => {
        cy.visit('');
    })

    it('click register btn', () => {
        cy.get(':nth-child(2) > .nav-link').eq(0).click();
    })
    it('enter name', () => {
        cy.get('#first-name').type('Marko');
        
    })
    it('enter last name', () => {
        cy.get('#last-name').type('Todorovic');      
    })
    it('enter password', () => {
        cy.get('#email').type('masdas@gmail.com');       
    })
    it('enter password', () => {
        cy.get('#password').type('Markomarko1234');       
    })
    it('confirm password', () => {
        cy.get('#password-confirmation').type('Markomarko1234');       
    })
    it('click on checkbox', () => {
        cy.get('[class="form-check-input"]').check();       
    })
    it('submit form', () => {
        cy.get('button[type="submit"]').click();       
    })


})