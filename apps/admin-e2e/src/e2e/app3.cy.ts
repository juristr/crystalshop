import { getGreeting } from '../support/app.po';

describe('admin-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message three', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });
});
