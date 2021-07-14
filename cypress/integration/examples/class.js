import HomePage from '../Classes/HomePage'

describe('Abstraction with Classes', () => {
  beforeEach(() => {
    cy.viewport(1980, 720);
    HomePage.loadHomePage();
  })

  after(() => {
    HomePage.scrollToTop();
  })

  beforeEach(() => {
    HomePage.wait();
  })
  afterEach(() => {
    cy.log('Task completed')
  })
  it('scrolls up and down the page', () => {   
    
    HomePage.scrollToBottom();
    
    
  });    
})