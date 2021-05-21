import {createGallery} from "../../pageObjects/createGallery"
const locators = require ("../../fixtures/lokators.json");

describe('login', () => {

    beforeEach(() => {
        cy.visit('');
        cy.get(locators.navigation.loginBtn).eq(0).click();

    })

    it('Create Gallery', () => {
              
        createGallery.clickCreateGalleryLink()
   
    })


})
