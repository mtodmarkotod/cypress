const locators = require ("../../fixtures/lokators.json");
const locators = require ("faker");

describe('login', () => {

    beforeEach(() => {
        cy.visit('');
        cy.get(locators.navigation.loginBtn).eq(0).click();

    })

    it('login', () => {
              
        cy.get(locators.loginPage.email).type(faker.internet.email());
        cy.get(locators.loginPage.password).type('Maremare2');
        cy.get(locators.loginPage.submitBtn).click();
        cy.get(locators.navigation.logOutBtn).click();
   
    })


})


// describe('logout', () => {
//     it('click logout btn', () => {
//         cy.get('.ml-auto > :nth-child(3) > .nav-link').click();
//     })
// })

// describe('negative test without @', () => {

//     it('click login btn', () => {
//         cy.get('a[class="nav-link nav-buttons"]').eq(0).click();
//     })
//     it('enter email', () => {
//         cy.get('input[id="email"]').type('mtod.markotodgmail.com');
        
//     })
//     it('enter password', () => {
//         cy.get('input[id="password"]').type('Maremare2');
        
//     })
//     it('click submit', () => {
//         cy.get('button[type="submit"]').click();
        
//     })
// })




