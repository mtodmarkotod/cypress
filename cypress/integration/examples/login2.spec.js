const locators = require ("../../fixtures/lokators.json");

import {authLogin} from "../../pageObjects/loginPage"

describe('login', () => {

    beforeEach(() => {
        cy.visit('');
        cy.get(locators.navigation.loginBtn).eq(0).click();

    })

    it('login', () => {
              
        authLogin.login('mtod.markotod@gmail.com', 'Maremare2')
        //cy.get(locators.navigation.logOutBtn).click();
   
    })


})