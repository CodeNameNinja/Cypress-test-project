class BasePage{
  constructor(){
    cy.viewport(1980, 720);
  }
  static loadHomePage(){
    cy.visit('https://devexpress.github.io/testcafe/example')
  }
  static wait(number = 1500){
    cy.wait(number)
  }
}
class HomePage extends BasePage {
  scrollOptions = {
    duration:1500,
    easing: 'linear'
  }
  static scrollToBottom(){
    cy.get('#submit-button').scrollIntoView(this.scrollOptions);
  }
  static scrollToTop(){
    cy.get('header').scrollIntoView(this.scrollOptions);
  }
}


describe('Abstraction with Classes', () => {
  it('scrolls up and down the page', () => {
    HomePage.loadHomePage();
    HomePage.wait();
    HomePage.scrollToBottom();
    HomePage.wait(2000);
    HomePage.scrollToTop();
  });    
})