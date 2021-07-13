describe('working with inputs', () => {
  it('should get login form', () => {
    cy.visit('http://zero.webappsecurity.com/login.html', {timeout:30000});    
    cy.get('h3').contains('Log in to ZeroBank')
  });
  it('should fill username', () => {
    cy.get('#user_login').clear();
    cy.get('#user_login').type('Mitchell')
  });
  it('should fill password', () => {
    cy.get('#user_password').clear();
    cy.get('#user_password').type("Mitch007")
  });
  it('should submit form', () => {
    cy.get('[type="submit"]').click();
  });
  it('should display error message', () => {
    cy.get('.alert-error').should('be.visible')
    cy.get('.alert-error').contains('Login and/or password are wrong.')
  });
})