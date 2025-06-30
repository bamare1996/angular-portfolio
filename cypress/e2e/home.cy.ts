describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the home page', () => {
    cy.url().should('include', '/');
    cy.contains('Biruk Amare'); // for texts displayed
  });

  it('should display a list of links', () => {
    cy.get('a[href]').should('have.length.greaterThan', 0);
  });

  it('should display the social links', () => {
    cy.get('a[href^="mailto:"]').should('have.attr', 'href', 'mailto:birukwossene@gmail.com');
    cy.get('a[href*="linkedin"]').should('have.attr', 'href', 'https://www.linkedin.com/in/birukamare/');
  });

  /*
    [attr^="value"]
    Attribute starts with "value"
    [attr$="value"]
    Attribute ends with "value"
    [attr*="value"]
    Attribute contains "value" (anywhere in the string)
  */

  it('should render a CV when clicking CV/Resume page link', () => {
    cy.get('a[href="/cv"]').click(); // the resulting dom element will be converted to href from routerLink
    cy.url().should('include', '/cv');
    cy.get('iframe').should('exist');
    cy.get('iframe').should('have.attr', 'src').and('include', 'AmareBirukCV.pdf');
  });

  it('should render a certificate when clicking certificate page link', () => {
    cy.get('a[href="/certificates"]').click(); // the resulting dom element will be converted to href from routerLink
    cy.url().should('include', '/certificates');
    cy.get('iframe').should('exist');
    cy.get('iframe').should('have.attr', 'src').and('include', 'Bachelor_Certificate.pdf');
  });

  it('should render a thesis when clicking thesis page link', () => {
    cy.get('a[href="/publications"]').click(); // the resulting dom element will be converted to href from routerLink
    cy.url().should('include', '/publications');
    cy.get('iframe').should('exist');
    cy.get('iframe').should('have.attr', 'src').and('include', 'Bachelor_Thesis.pdf');
  });
});