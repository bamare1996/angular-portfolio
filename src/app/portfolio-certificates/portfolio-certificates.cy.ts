import { mount } from 'cypress/angular';
import { PortfolioCertificates } from './portfolio-certificates';
import { SafePipe } from '../safe-pipe';
import { CommonModule } from '@angular/common';

describe('PortfolioCertificates Component', () => {
  it('should render and toggle education/work sections', () => {
    mount(PortfolioCertificates, {
      imports: [CommonModule, SafePipe],
      declarations: []
    });

    // Check default state is education
    cy.get('button').contains('Work').click();
    cy.get('embed').should('not.exist'); // Your logic here
    cy.get('button').contains('Fricke').should('have.class', 'active');

    // Back to education
    cy.get('button').contains('Education').click();
    cy.get('embed').should('not.exist');
  });

  it('should show Bachelor certificate by default', () => {
    mount(PortfolioCertificates, {
      imports: [CommonModule, SafePipe],
      declarations: [],
    });
    // no need for clicking since it's already selected by default
    cy.get('button').contains('Bachelor').should('have.class', 'active')
    cy.get('iframe').should('have.attr', 'src').and('include', 'Bachelor_Certificate.pdf');
  });
});