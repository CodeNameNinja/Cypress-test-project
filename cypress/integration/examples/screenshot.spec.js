describe('Screenshots', () => {
  it('full page screenshot', () => {
    cy.visit('https://devexpress.github.io/testcafe/example');
    cy.screenshot({capture:'fullPage'})
  })
  it('single element screenshot', () => {
    cy.visit('https://devexpress.github.io/testcafe/example');
    cy.get('h1').screenshot();
  });
})