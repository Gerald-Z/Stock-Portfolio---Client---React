describe('Login Page Works', () => {
  it('Log in via valid credentials', () => {
    cy.visit('https://gerald-z.github.io/Stock-Portfolio---Client---React/')

    cy.get('#username-label > .textInput').type("Investor");
    cy.get('#password-label > .textInput').type("Password");
    cy.get('#submit').click();
    
  });

  it('Log in via invalid credentials', () => {
    cy.visit('https://gerald-z.github.io/Stock-Portfolio---Client---React/')

    cy.get('#username-label > .textInput').type("NotInvestor");
    cy.get('#password-label > .textInput').type("Password");
    cy.get('#submit').click();
    cy.get('p').contains("Log in to Stock Portfolio Tracker");
  });

  it('Log in and read the Portfolio', () => {
    cy.visit('https://gerald-z.github.io/Stock-Portfolio---Client---React/')

    cy.get('#username-label > .textInput').type("Investor");
    cy.get('#password-label > .textInput').type("Password");
    cy.get('#submit').click();

    cy.get('h1').contains("Here Are Your Current Positions:");
    cy.get('.stock-list > :nth-child(2) > :nth-child(1)').contains("Blackstone Inc");
    cy.get('.stock-list > :nth-child(3) > :nth-child(1)').contains("Blackrock Inc");
    cy.get('.stock-list > :nth-child(4) > :nth-child(1)').contains("Goldman Sachs");
  });


  it('Create a new account, Re-log in, and delete the account', () => {
    cy.visit('https://gerald-z.github.io/Stock-Portfolio---Client---React/');

    cy.get(':nth-child(1) > a').click();
    cy.contains("Create a new account:");
    cy.contains("Please enter your username:");
    cy.contains("Please enter your password:");
    cy.contains("Please repeat your password:");
    cy.contains("Submit Ticker");

    cy.get(':nth-child(1) > input').type("New Investor");
    cy.get(':nth-child(3) > input').type("New Investor's Password");
    cy.get(':nth-child(5) > input').type("New Investor's Password");
    cy.get('#submitTicker').click();

    cy.get('#username-label > .textInput').type("New Investor");
    cy.get('#password-label > .textInput').type("New Investor's Password");
    cy.get('#submit').click();
    
    cy.get(':nth-child(4) > button').click();
  });
})