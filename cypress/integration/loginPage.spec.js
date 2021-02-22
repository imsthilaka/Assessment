
context('loginPage', () => {
 
  const loginPage  = 'https://ui-staging.scorpion.co/'
  const userName   = 'Sample@gmail.com'
  const password   = 'dummy'
  const errorMsg  = "Invalid Username or Password."

  beforeEach(() => {
    //Open the LoginPage
    cy.visit(loginPage)
  })
  
  it('should fill login screen with Email and password', () => {

    // Enter the Email, Password and Click Submit 
    cy.get('[data-cy=username-input]').type(userName)
      .get('[data-cy=password-input]').type(password)
      .get('[data-cy=login-button]').click();
    
    //Assertions - To check the error message  displayed for Incorrect Credentials
    cy.contains(errorMsg);
  });
});