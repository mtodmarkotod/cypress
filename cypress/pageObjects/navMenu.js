
class NavMenu {
  get CreatePage() {
    return cy.get(".mr-auto > :nth-child(3) > .nav-link")
  }
  get MyGalleriesPage() {
    return cy.get("a[href='/my-galleries']")
  }
  get AllGalleriesPage() {
    return cy.get("a[href='/']")
  }

  goToCreatePage() {
    this.CreatePage.click()
  }
  goToMyGalleriesPage() {
    this.MyGalleriesPage.click()
  }
  goToAllGalleriesPage() {
    this.AllGalleriesPage.click()
  }
}

export const navMenu = new NavMenu()
