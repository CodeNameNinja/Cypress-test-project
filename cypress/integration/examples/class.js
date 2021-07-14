import HomePage from '../Classes/HomePage'

describe('Abstraction with Classes', () => {
  beforeEach(() => {
    cy.viewport(1980, 720);
    HomePage.loadHomePage();
  })

  after(() => {
  //  After all tasks have completed
  })

  beforeEach(() => {
    HomePage.wait();
  })
  afterEach(() => {
    cy.log('Task completed')
  })
  it.skip('1st IT', () => {   
    HomePage.scrollToTop();
    HomePage.scrollToBottom();  
  });    
  it('2nd IT', () => {   
    HomePage.scrollToTop();
    HomePage.scrollToBottom();  
  });    
})