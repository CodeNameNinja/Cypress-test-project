describe('Write / Read Data to JSON / Text file', function() {
  it('should write data into JSON', () => {
    cy.writeFile('log.json', {name: 'Mitchell', age: 21});
  });

  it('should write data to the text file', () => {
    cy.writeFile('log.txt', 'Hello World');
  });

  it('should read data from the json file', () => {
     cy.readFile('log.json').its('age').should('eq', 21);
  });
  it('should read data from the text file', () => {
     cy.readFile('log.txt').should('eq', 'Hello World');
  });
})
