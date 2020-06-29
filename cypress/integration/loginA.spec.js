describe('The Login Page', () => {
    it('successfully login', ()=>{
        cy.visit('http://localhost:4200/login')
        cy.get('#usernameLog').type('lola')
        cy.get('#passwordLog').type('1234')
        cy.get('#loginBtn').click()
        cy.location('pathname').should('equal', '/admin')
        .then(() => {
            const userString = window.localStorage.getItem('token')
            expect(userString).to.be.a('string')
        })
    })
    it('successfully logout', ()=>{
        cy.contains('button', 'Log-Out').click()
        .then(() => {
            const userString = window.localStorage.getItem('token')
            expect(userString).to.be.null
        })

    })
  })