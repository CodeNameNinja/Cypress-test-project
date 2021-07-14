import BasePage from './BaseClass'
export default class HomePage extends BasePage {
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

