describe('Browser Actions', () => {
  it('should load correct URL', () => {
    cy.visit('https://example.com/')
  })

  it('should check correct URL', () => {
    cy.url().should('include','example.com')
    
  });

  it('should wait for 3 seconds', () => {
    cy.wait(3000)    
  });

  it('should pause the execution', () => {
    cy.pause()    
  });

  it('should check for correct elements on the page', () => {
    cy.get('h1').should('be.visible');    
  });
})