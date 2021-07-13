describe('Testing Select Box', () => {
  it('should vist url', () => {
    cy.visit('https://devexpress.github.io/testcafe/example');
  }); 
  
  it('should select select box', () => {
    cy.get('[data-testid="preferred-interface-select"]').select('JavaScript API');    
    cy.get('[data-testid="preferred-interface-select"]').should('have.value', 'JavaScript API')   
    cy.wait(3000);
    cy.get('[data-testid="preferred-interface-select"]').select('Both');    
    cy.get('[data-testid="preferred-interface-select"]').should('have.value', 'Both')    
  });
})
