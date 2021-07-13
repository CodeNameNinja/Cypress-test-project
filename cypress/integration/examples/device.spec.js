describe('Device tests', () => {
  let url = 'https://example.com/'
  it('720p', () => {
      cy.viewport(1280, 720);
      cy.visit(url);
      cy.wait(3000);   
  });
  it('1080p', () => {
      cy.viewport(1980, 1080);
      cy.visit(url);
      cy.wait(3000);   
  });
  it('iPhone X', () => {
      cy.viewport('iphone-x');
      cy.visit(url);
      cy.wait(3000);   
  });
  it('ipad Mini', () => {
      cy.viewport('ipad-mini');
      cy.visit(url);
      cy.wait(3000);   
  });
  it('Mac book 15', () => {
      cy.viewport('macbook-15');
      cy.visit(url);
      cy.wait(3000);   
  });
})