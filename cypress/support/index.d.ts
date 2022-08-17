declare namespace Cypress {
    interface Chainable {
        getuserIdBuUsername(username: string): Chainable<any>;
    }
  }