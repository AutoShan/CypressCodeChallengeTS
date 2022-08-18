declare namespace Cypress {
    interface Chainable {
        getuserIdByUsername(username: string): Chainable<any>;
        findPostByUserId(url: string, userId: number): Chainable<any>;
    }
  }