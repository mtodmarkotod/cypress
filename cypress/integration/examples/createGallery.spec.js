const locators = require ("../../fixtures/lokators.json");
import {authLogin} from "../../pageObjects/loginPage"
import {createGallery} from "../../pageObjects/createGallery"


    beforeEach(() => {
        cy.visit('');
        cy.get(locators.navigation.loginBtn).eq(0).click();

    })
    it('Create Gallery', () => {

        authLogin.login('mtod.markotod@gmail.com', 'Maremare2')             
        createGallery.clickCreateGalleryLink()
   
    })



