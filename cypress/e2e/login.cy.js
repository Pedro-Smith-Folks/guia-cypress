describe('Login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Deve realizar login com sucesso', () => {
        //Arrange - Pré condição de teste 

        //Act - Ações a serem validadas
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.screenshot('login-success')

        //Assert - Validação dos testes
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('Deve realizar login com credenciais invalidas e retornar mensagem de erro', () => {
        //Arrange - Pré condição de teste 

        //Act - Ações a serem validadas
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('senha_invalida')
        cy.get('[data-test="login-button"]').click()
        cy.screenshot('login-failure')

        //Assert - Validação dos testes
        cy.get('[data-test="error"').should('contain.text', 'Username and password do not match any user in this service')
    })
})