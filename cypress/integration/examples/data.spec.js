describe('Write / Read Data to JSON / Text file', function() {
  it('should write data into JSON', () => {
    cy.writeFile('log.json', {name: 'Mitchell', age: 21});
  });

  it('should write data to the text file', () => {
    cy.writeFile('log.txt', 'Hello World');
  });
})
