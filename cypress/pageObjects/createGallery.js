class CreateGallery {

    get visitCreatePage() {
        return cy.get(".mr-auto > :nth-child(3) > .nav-link")
    }

    clickCreateGalleryLink(){
        this.visitCreatePage.click()
    }
    

}

export const  createGallery = new CreateGallery()