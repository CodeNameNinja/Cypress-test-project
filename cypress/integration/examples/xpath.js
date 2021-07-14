describe('Xpath with Cypress Example', function() {
  before(function() {
    cy.visit('http://zero.webappsecurity.com/login.html', {timeout:30000}); 
  })

  it('should click on element using xpath', () => {
    cy.xpath('//input[@type="submit"]').should('be.visible')
    cy.xpath('//input[@type="submit"]').click();
  });

})