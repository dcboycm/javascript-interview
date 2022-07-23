
const random = Math.random().toString(36).slice(2, 10);
const email = random +"@gmail.com"; // randomize the email as the app validates for uniqueness

describe('Interview', () => {
    it('User can create account', () => {
      cy.visit("https://www.nba.com/watch/nba-tv"); // navigate to nba-tv     
    // there is likely a better way to handle this, like pre-filling in the session cookies, 
    // but for purpose of test adding these lines to start test after the cookie pop up appears to avoid selector interruptions
      cy.get('div#onetrust-policy', {timeout: 20000}).should('be.visible').then(() =>{
          cy.get('button#onetrust-accept-btn-handler').should('be.visible').click();
      });

      cy.get('img[alt="nba tv"]', {timeout: 30000}).should('be.visible'); //wait for NBA banner to appear

      // create user account
      cy.get('div[data-text="SIGN IN"]').first().should('be.visible').click(); 
      cy.get('.nba-login-link').contains('Sign Up').should('be.visible').click().then(() => {
        cy.get('input#nbaSignUpModalId').click().type(email);
        cy.get('input#nbaSignUpModalPw').click().type('secretPassword123');
        cy.get('input#nbaSignUpModalId').click(); // click on email field so that password hint pop-up disappears
        cy.get('input#nbaSignUpModalFN').click().type(random);
        cy.get('input#nbaSignUpModalLN').click().type(random);
        cy.get('select.nba-login-select').eq(0).select('2'); 
        cy.get('select.nba-login-select').eq(1).select('2'); 
        cy.get('select.nba-login-select').eq(2).select('1989'); 
        cy.get('select.nba-login-select').eq(3).select('US'); 
        cy.get('input#nbaSignUpModalPC').type('10031');
        cy.get('label[for=nbaSignUpModalTAC]').eq(0).click();
        cy.get('input#nbaSignUpModalCreate').click();
      })

      cy.get('.nba-login-body-favorite-teams-item', {timeout: 10000}).find('[data-text="GSW"]').click()
      cy.get('.nba-login-next').contains('NEXT').click().then(() => {
        cy.get('label[for=nbaNewsletters3]').eq(0).click();
        cy.get('label[for=nbaNewsletters4]').eq(0).click();
        cy.get('.nba-login-next').contains('NEXT').click();
        cy.get('a[data-text="Not right now"]').should('be.visible').click();

      })
    })  
})