describe('Login Page Works', () => {
  it('Visits the login page', () => {
    cy.visit('https://gerald-z.github.io/Stock-Portfolio---Client---React/')

    cy.contains('template').click()
    
  });

  it('Edits the Portfolio', () => {
    cy.visit('https://gerald-z.github.io/Stock-Portfolio---Client---React/')
    cy.contains('template').click()

    cy.contains('Bought').click()
    cy.get('label > input').type("GS")
    cy.get('#submitTicker').click()
  
  });

})