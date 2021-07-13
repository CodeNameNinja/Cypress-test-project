describe('Scroll on the page', function() {
  it('should scroll down and up on the page', () => {
    let scrollOptions = {
      duration:1000,
      easing: 'linear'
    }

    cy.viewport(1980, 720);
      cy.visit('https://devexpress.github.io/testcafe/example');
      cy.wait(1500);
      cy.get('#submit-button').scrollIntoView(scrollOptions);
      cy.wait(1500);
      cy.get('header').scrollIntoView(scrollOptions);
  });
})