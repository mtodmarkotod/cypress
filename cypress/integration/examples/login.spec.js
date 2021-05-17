
describe('login', () => {

    it('visit gallery app', () => {
        cy.visit('');
    })
    it('click login btn', () => {
        cy.get('a[class="nav-link nav-buttons"]').eq(0).click();
    })
    it('enter email', () => {
        cy.get('input[id="email"]').type('mtod.markotod@gmail.com');
        
    })
    it('enter password', () => {
        cy.get('input[id="password"]').type('Maremare2');
        
    })
    it('click submit', () => {
        cy.get('button[type="submit"]').click();
        
    })


})


describe('logout', () => {
    it('click logout btn', () => {
        cy.get('.ml-auto > :nth-child(3) > .nav-link').click();
    })
})

describe('negative test without @', () => {

    it('click login btn', () => {
        cy.get('a[class="nav-link nav-buttons"]').eq(0).click();
    })
    it('enter email', () => {
        cy.get('input[id="email"]').type('mtod.markotodgmail.com');
        
    })
    it('enter password', () => {
        cy.get('input[id="password"]').type('Maremare2');
        
    })
    it('click submit', () => {
        cy.get('button[type="submit"]').click();
        
    })
})




