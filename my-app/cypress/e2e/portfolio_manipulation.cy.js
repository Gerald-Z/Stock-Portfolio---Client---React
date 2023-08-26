describe('Tests Portfolio Manipulation Function', () => {
  it('Adding to a position', () => {
    cy.visit('https://gerald-z.github.io/Stock-Portfolio---Client---React/')

    cy.get('#username-label > .textInput').type("Investor");
    cy.get('#password-label > .textInput').type("Password");
    cy.get('#submit').click();

    cy.get('h1').contains("Here Are Your Current Positions:");
    cy.get('.stock-list > :nth-child(2) > :nth-child(1)').contains("Blackstone Inc");
    cy.get('.stock-list > :nth-child(3) > :nth-child(1)').contains("Blackrock Inc");
    cy.get('.stock-list > :nth-child(4) > :nth-child(1)').contains("Goldman Sachs");
    
    cy.get('.stock-list > :nth-child(2) > :nth-child(2)').contains("BX");
    cy.get('.stock-list > :nth-child(3) > :nth-child(2)').contains("BLK");
    cy.get('.stock-list > :nth-child(4) > :nth-child(2)').contains("GS");    

    cy.get('.stock-list > :nth-child(2) > :nth-child(3)').contains("112");
    cy.get('.stock-list > :nth-child(3) > :nth-child(3)').contains("20");
    cy.get('.stock-list > :nth-child(4) > :nth-child(3)').contains("0");  

    cy.get('.space > .center > button').click();

    cy.contains("Please enter the ticker symbol of the position you wish to change:");
    cy.get(':nth-child(1) > input').type("GS");
    cy.get('select').select("Buy");
    cy.get(':nth-child(6) > input').type(13);
    cy.get(':nth-child(8) > input').type(400);

    cy.get('#submitTicker').click();
    cy.get('#returnButton').click();
    cy.get('.stock-list > :nth-child(2) > :nth-child(2)').contains("BX");
    cy.get('.stock-list > :nth-child(3) > :nth-child(2)').contains("BLK");
    cy.get('.stock-list > :nth-child(4) > :nth-child(2)').contains("GS");    

    cy.get('.stock-list > :nth-child(2) > :nth-child(3)').contains("112");
    cy.get('.stock-list > :nth-child(3) > :nth-child(3)').contains("20");
    cy.get('.stock-list > :nth-child(4) > :nth-child(3)').contains("13");  

  });
})


describe('Tests Portfolio Manipulation Function', () => {
  it('Remove from a position', () => {
    cy.visit('https://gerald-z.github.io/Stock-Portfolio---Client---React/')

    cy.get('#username-label > .textInput').type("Investor");
    cy.get('#password-label > .textInput').type("Password");
    cy.get('#submit').click();

    cy.get('h1').contains("Here Are Your Current Positions:");
    cy.get('.stock-list > :nth-child(2) > :nth-child(1)').contains("Blackstone Inc");
    cy.get('.stock-list > :nth-child(3) > :nth-child(1)').contains("Blackrock Inc");
    cy.get('.stock-list > :nth-child(4) > :nth-child(1)').contains("Goldman Sachs");
    
    cy.get('.stock-list > :nth-child(2) > :nth-child(2)').contains("BX");
    cy.get('.stock-list > :nth-child(3) > :nth-child(2)').contains("BLK");
    cy.get('.stock-list > :nth-child(4) > :nth-child(2)').contains("GS");    

    cy.get('.stock-list > :nth-child(2) > :nth-child(3)').contains("112");
    cy.get('.stock-list > :nth-child(3) > :nth-child(3)').contains("20");
    cy.get('.stock-list > :nth-child(4) > :nth-child(3)').contains("13");  

    cy.get('.space > .center > button').click();

    cy.contains("Please enter the ticker symbol of the position you wish to change:");
    cy.get(':nth-child(1) > input').type("GS");
    cy.get('select').select("Sell");
    cy.get(':nth-child(6) > input').type(13);
    cy.get(':nth-child(8) > input').type(400);

    cy.get('#submitTicker').click();
    cy.get('#returnButton').click();
    cy.get('.stock-list > :nth-child(2) > :nth-child(2)').contains("BX");
    cy.get('.stock-list > :nth-child(3) > :nth-child(2)').contains("BLK");
    cy.get('.stock-list > :nth-child(4) > :nth-child(2)').contains("GS");    

    cy.get('.stock-list > :nth-child(2) > :nth-child(3)').contains("112");
    cy.get('.stock-list > :nth-child(3) > :nth-child(3)').contains("20");
    cy.get('.stock-list > :nth-child(4) > :nth-child(3)').contains("0");  

  });
})