import { authLogin } from "../../pageObjects/loginPage"
const locators = require("../../fixtures/lokators.json")

describe("User Login", () => {
  before(() => {
    cy.visit("")
    cy.get(locators.navigation.loginBtn).click()
  })

  it("login", () => {
    authLogin.login("mtod.markotod@gmail.com", "Maremare2")
  })
})
