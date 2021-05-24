import { gallery } from "../../pageObjects/gallery"
import { authLogin } from "../../pageObjects/loginPage"
import { navMenu } from "../../pageObjects/navMenu"
const locators = require("../../fixtures/lokators.json")
const faker = require("faker")

describe("Create Gallery", () => {
  // it("Create", () => {
  //   navMenu.goToCreatePage()
  //   cy.get(locators.createGalleryPage.title).type(faker.name.title())
  //   cy.get(locators.createGalleryPage.description).type(faker.hacker.phrase())
  //   cy.get(locators.createGalleryPage.img).type("https://www.studyinserbia.rs/uploads/attachment/strana/228/large_tara-mountain-5520592_1920.jpg")
  //   cy.get(locators.createGalleryPage.submitBtn).click()
  // })

  before(() => {
    cy.loginTryBackend()
  })

  it("visit gal", () => {
    
  })
})

   
