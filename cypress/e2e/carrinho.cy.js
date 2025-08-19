describe('Carrinho', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

    it('Deve colocar um item no carrinho', () => {
        //Arrange - Pré condição de teste 

        //Act - Ações a serem validadas
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.screenshot('add-to-cart-success')
        cy.get('[data-test="shopping-cart-link"]').click()

        //Assert - Validação dos testes
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
        cy.get('[data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Backpack')

    })


})