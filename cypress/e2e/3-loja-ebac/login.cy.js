///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')


describe('Funcionalidade: Login', ()=>{
    beforeEach(() => {
        cy.visit('minha-conta')      
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('janeteleiviane@gmail.com')
        cy.get('#password').type('biYwWz6zeS8CGV@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, janeteleiviane (não é janeteleiviane? Sair)')
        })


    it('Deve exibir uma mensagem de erro ao inserir usuário inválido ', () => {
        cy.get('#username').type('janete@gmail.com')
        cy.get('#password').type('biYwWz6zeS8CGV@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('janeteleiviane@gmail.com')
        cy.get('#password').type('biYwWz6zeS8CGV2')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail janeteleiviane@gmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, janeteleiviane (não é janeteleiviane? Sair)')
    });

    it.only('Deve fazer login com sucesso - Usando fixture', () => {
        
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario, {log: false})
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, janeteleiviane (não é janeteleiviane? Sair)')
        })
    });

    })