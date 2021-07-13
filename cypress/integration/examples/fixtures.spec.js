describe('Login with Fixture Data',()=>{
  it('should try and login',()=>{
    cy.visit('http://zero.webappsecurity.com/login.html', {timeout:30000});    
    cy.fixture('user').then(({username,password}) => {
      cy.get('#user_login').type(username)
      cy.get('#user_password').type(password)
    })
  })
})