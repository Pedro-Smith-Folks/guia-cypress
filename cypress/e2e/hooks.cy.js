describe('Hooks', () => {

    before(() => {
        cy.log('Executando antes de todos os testes')
    })
    
    beforeEach(() => {
        cy.log('Executando antes de cada teste')
    })

    afterEach(() => {
        cy.log('Executando após cada teste')
    })

    after(() => {
        cy.log('Executando após todos os testes')
    })

    it('Teste 1', () => {
        cy.log('Executando teste 1')
    })

    it('Teste 2', () => {
        cy.log('Executando teste 2')
    })

    it('Teste 3', () => {
        cy.log('Executando teste 3')
    })
})