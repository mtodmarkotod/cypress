import { authLogin } from "../../pageObjects/loginPage"
const locators = require("../../fixtures/lokators.json")

describe("User Login", () => {
  before(() => {
    cy.visit("")
    cy.get(locators.navigation.loginBtn).click()
  })

  it("login", () => {
    cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (res) => {}).as('validLogin')
    authLogin.login("mtod.markotod@gmail.com", "Maremare2")
    cy.wait('@validLogin').then(intercept => {
      //cy.log(JSON.stringify(intercept.response.statusCode))
      expect(intercept.response.statusCode).to.eql(200)
    })
  })
})
