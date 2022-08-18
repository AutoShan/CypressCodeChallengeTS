import dataSource from '../fixtures/dataSource.json'

describe('validateEmailFormat.cy', () => {

  it.only('Validate Email Format', () => {

    cy.getuserIdByUsername(dataSource.username).then((returnedUserId) => {

      cy.findPostByUserId(dataSource.urlPostByUser, returnedUserId).then((returnPost) => {
        cy.get(returnPost[0].id);
      })


    });
  });
});