import { registerPage } from "../../pageObjects/registerPage"
const locators = require("../../fixtures/lokators.json")
const faker = require("faker")

let userData = {
  randomName: faker.name.firstName(),
  randomLastName: faker.name.lastName(),
  randomEmail: faker.internet.email(),
  randomPassword: faker.internet.password()
}

describe("User Registration", () => {
  before(() => {
    cy.visit("")
    cy.get(locators.navigation.registerBtn).click()
  })

  it("Register", () => {
    registerPage.register(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomPassword)
  })
})
