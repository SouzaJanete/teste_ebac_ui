///<reference types="cypress"/>

describe('Funcionalidade: Login', ()=>{
    it('Deve fazer login com sucesso', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('janeteleiviane@gmail.com')
        cy.get('#password').type('biYwWz6zeS8CGV@')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, janeteleiviane (não é janeteleiviane? Sair)')
    })
})