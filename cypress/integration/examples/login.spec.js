describe('working with inputs', () => {
  it('should get login form', () => {
    cy.visit('http://zero.webappsecurity.com/login.html', {timeout:30000});    
    cy.get('h3').contains('Log in to ZeroBank')
  });
  it('should fill username', () => {
    cy.get('#user_login').as('username');
    cy.get('@username').clear();
    cy.get('@username').type('Mitchell', {delay:50})
  });
  it('should fill password', () => {
    cy.get('#user_password').as('password')
    cy.get('@password').clear();
    cy.get('@password').type("Mitch007", {delay:50})
  });

  it('should select checkbox', () => {
    cy.get('[type="checkbox"]').check();
    cy.wait(1000);
    cy.get('[type="checkbox"]').should('be.checked')
  });
  it('should submit form', () => {
    cy.get('[type="submit"]').click();
  });
  it('should display error message', () => {
    cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
  });
})