export default class BasePage{

  static loadHomePage(){
    cy.visit('https://devexpress.github.io/testcafe/example')
  }
  static wait(number = 1500){
    cy.wait(number)
  }
}