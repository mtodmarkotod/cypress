import { gallery } from "../../pageObjects/gallery"
import { authLogin } from "../../pageObjects/loginPage"
import { navMenu } from "../../pageObjects/navMenu"
const locators = require("../../fixtures/lokators.json")
const faker = require("faker")

describe("Create Gallery", () => {

  before(() => {
    cy.visit("")
    cy.get(locators.navigation.loginBtn).click()
    authLogin.login("mtod.markotod@gmail.com", "Maremare2")
  })

    let galleryID = ''
    
   it("Create", () => {
     navMenu.goToCreatePage()
     cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) => {}).as('createGallery')
     cy.get(locators.createGalleryPage.title).type(faker.name.title())
     cy.get(locators.createGalleryPage.description).type(faker.hacker.phrase())
     cy.get(locators.createGalleryPage.img).type("https://www.studyinserbia.rs/uploads/attachment/strana/228/large_tara-mountain-5520592_1920.jpg")
     cy.get(locators.createGalleryPage.submitBtn).click()
     cy.wait('@createGallery').then(intercept => {
       cy.log(JSON.stringify(intercept.response.body.id))
       expect(intercept.response.statusCode).to.eql(201)
       galleryID = intercept.response.body.id
   
    })

    it("Go To All Galleries Page", () => {
      navMenu.goToAllGalleriesPage()    
     })

    it("Search galleries", () => {
      var n = cy.get("a[href='/galleries']")  
      
    })


   })

  // before(() => {
  //   cy.loginTryBackend()
  // })

  // it("visit gal", () => {
    
  // })
})

   
