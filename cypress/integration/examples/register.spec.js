const locators = require ("../../fixtures/lokators.json");
const faker = require ("faker");

let userData = {
    randomName: faker.name.firstName(),
    randomLastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password()
}

describe('register', () => {  

    beforeEach(() => {
        cy.visit('');
        cy.get(locators.navigation.loginBtn).eq(0).click();
    })    

   it('register', () => {
    cy.get(locators.registerPage.registerBtn).eq(0).click();
    cy.get(locators.registerPage.firstName).type(userData.randomName);    
    cy.get(locators.registerPage.lastName).type(userData.randomLastName);        
    cy.get(locators.registerPage.email).type(userData.randomEmail);       
    cy.get(locators.registerPage.password).type(userData.randomPassword);       
    cy.get(locators.registerPage.confPassword).type(userData.randomPassword);       
    cy.get(locators.registerPage.checkbox).check();       
    cy.get(locators.registerPage.submitBtn).click();
   })       
        
})