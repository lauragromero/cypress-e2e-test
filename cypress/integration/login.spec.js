describe('The Home Page', () => {
    it('successfully go to login page', () => {
        cy.visit('http://localhost:8080') 
        cy.get('#nav').click()
        cy.contains('Login').click()
        cy.url().should('include', '/login')
    })
    it('successfully login', ()=>{
        cy.visit('http://localhost:8080/#/login')
        cy.get('[name=username]').type('laura')
        cy.get('[name=password]').type('1234')
        cy.contains('button', 'Log-In').click()
        cy.location('pathname').should('equal', '/')
        cy.contains('LIST OF POST')
        .then(() => {
            const userString = window.localStorage.getItem('token')
            expect(userString).to.be.a('string')
        })
    })
  })