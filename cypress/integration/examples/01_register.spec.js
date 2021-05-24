/// <reference types="cypress" />
import { registerPage } from "../../pageObjects/registerPage"
const locators = require("../../fixtures/lokators.json")
const faker = require("faker")

let userData = {
  randomName: faker.name.firstName(),
  randomLastName: faker.name.lastName(),
  randomEmail: faker.internet.email(),
  randomPassword: faker.internet.password()
}

// describe("User Registration", () => {
//   before(() => {
//     cy.visit("")
//     cy.get(locators.navigation.registerBtn).click()
//   })

//   it("Register", () => {
//     registerPage.register(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomPassword)
//   })

// })

describe("Bad User Registration", () => {
  beforeEach(() => {
    cy.visit("")
    cy.get(locators.navigation.registerBtn).click()
  })

  it("Register/Bad email", () => {
    registerPage.register(userData.randomName, userData.randomLastName, "mlaks@gmail", userData.randomPassword, userData.randomPassword)
    cy.get(locators.msg.alertEmail).should('have.text', 'The email must be a valid email address.')
    cy.get(locators.msg.alertEmail).should('be.visible')
    cy.get(locators.msg.alertEmail).should('have.css', 'background-color', 'rgb(248, 215, 218)')
  })

  it("Register/Incorrect password", () => {
    registerPage.register(userData.randomName, userData.randomLastName, userData.randomEmail, "Marko", userData.randomPassword)
    cy.get(locators.msg.alertPassword).should('have.text', 'The password must be at least 8 characters.')
    cy.get(locators.msg.alertPassword).should('be.visible')
    cy.get(locators.msg.alertPassword).should('have.css', 'background-color', 'rgb(248, 215, 218)')
   
  })
})


