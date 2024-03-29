describe('Browser Actions', () => {
  it('should load books website', () => {
    cy.visit('https://books.toscrape.com/index.html', {timeout: 30000})
    cy.url().should('include', 'index.html')
    cy.log('Before reload!')

    cy.reload();
    cy.log('After reload')
  })

  it('should click on Travel category', () => {
        cy.get('a').contains("Travel").click()  
        cy.get('h1').contains('Travel')
  });

  it('should display correct number of books', () => {
    cy.get('.product_pod').its('length').should('eq',11) 
  });


  it('should click on Poetry category', () => {
      cy.get('a').contains("Poetry").click()
      cy.get('h1').contains('Poetry')
    
  });

  it('should click on Olio book details', () => {
    cy.get('a').contains('Olio').click()
    cy.get('.price_color').contains('£23.88')    
  });
})