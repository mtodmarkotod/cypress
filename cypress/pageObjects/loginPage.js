const locators = require("../fixtures/lokators.json")

class AuthLogin {
  get email() {
    return cy.get(locators.loginPage.email)
  }
  get password() {
    return cy.get(locators.loginPage.password)
  }
  get submitBtn() {
    return cy.get(locators.loginPage.submitBtn)
  }

  login(email, password) {
    this.email.type(email)
    this.password.type(password)
    this.submitBtn.click()
  }
}

export const authLogin = new AuthLogin()
