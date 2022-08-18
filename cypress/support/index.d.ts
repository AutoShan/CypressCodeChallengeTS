declare namespace Cypress {
    interface Chainable {
        getuserIdByUsername(username: string): Chainable<any>;
        getPostByUserId(url: string, userId: number): Chainable<any>;
        validateEmailFormat(email: string): Chainable<any>;
    }
  }