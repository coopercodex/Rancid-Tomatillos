beforeEach(() => {
  cy.visit("http://localhost:3000")
});

describe('renders home page', () => {
  it('renders page correctly', () => {
    cy.contains('h1','Rancid Tomatillos')
  });
});

it('should render movies on home page', () => {
  cy.contains('.all-movies-container', 'Mulan')
  cy.contains('.all-movies-container', 'Peninsula')
  cy.contains('.all-movies-container', 'Eternal Beauty')
});

it('should not render movies details page default', () => {
  cy.get().should('not.exist', '/582885')
})

it('should show a movies rating', () => {
  cy.contains('.all-movies-container', 'rating')
});

it('should get single movie on click', () => {
  cy.get('#577922').click()
  .url().should('include', '/577922')
  .get('.card').should('contain', 'Tenet')
});

it('should only show one movies details when clicked', () => {
  cy.get('#340102').click()
  .url().should('include', '/340102')
  .get().should('not.exist', 'Tenet')
});

it('should take user to theater site when find theaters is clicked', () => {
  cy.get('.find-theater').click()
  .should('have.attr', 'target', '_blank')
})

it ('should take user to home page from movies details page when home is clicked', () => {
  cy.get('#581392').click()
  .get('.home-button').click({ multiple: true })
  .url().should('include', '/')
})

it ('should not take user movies details page when home is clicked', () => {
  cy.get('#581392').click()
  .get('.home-button').click({ multiple: true })
  .url().should('include', '/')
  .get().should('not.exist', '/581392')
})

it('should take user to all movies from details page on sites title click', () => {
  cy.get('#627290').click()
  .get('.site-title').click()
  .url().should('include', '/')
})

it('should not take user to another movies page from details page on sites title click', () => {
  cy.get('#627290').click()
  .get('.site-title').click()
  .url().should('include', '/')
  .get().should('not.exist', '/582885')
})

it('should not redirect user when arrow is clicked on home screen', () => {
  cy.get('.right-arrow').click()
  cy.get('.left-arrow').click()
  .url().should('include', '/')
})




