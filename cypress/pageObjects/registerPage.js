const locators = require("../fixtures/lokators.json")

class Register {
  get firstName() {
    return cy.get(locators.registerPage.firstName)
  }
  get lastName() {
    return cy.get(locators.registerPage.lastName)
  }
  get email() {
    return cy.get(locators.registerPage.email)
  }
  get password() {
    return cy.get(locators.registerPage.password)
  }
  get confPassword() {
    return cy.get(locators.registerPage.confPassword)
  }
  get checkbox() {
    return cy.get(locators.registerPage.checkbox)
  }
  get submitBtn() {
    return cy.get(locators.registerPage.submitBtn)
  }

  register(firstName, lastName, email, password, confPassword) {
    this.firstName.type(firstName)
    this.lastName.type(lastName)
    this.email.type(email)
    this.password.type(password)
    this.confPassword.type(confPassword)
    this.checkbox.check()
    this.submitBtn.click()
  }
}

export const registerPage = new Register()
