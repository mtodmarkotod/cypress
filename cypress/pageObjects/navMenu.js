class NavMenu {
  get CreatePage() {
    return cy.get(".mr-auto > :nth-child(3) > .nav-link")
  }

  goToCreatePage() {
    this.CreatePage.click()
  }
}

export const navMenu = new NavMenu()
