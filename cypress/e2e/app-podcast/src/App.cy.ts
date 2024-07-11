/// <reference types="cypress" />
describe('App', () => {
    it('Visits the app root url', () => {
      cy.visit('http://localhost:4200');
      cy.contains('Hello, World!').should('exist'); 
    });
  });