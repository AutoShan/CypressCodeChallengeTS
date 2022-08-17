import dataSource from '../fixtures/dataSource.json'

describe('validateEmailFormat.cy', () => {

  it.only('Validate Email Format', () => {
    cy.getuserIdBuUsername(dataSource.username).then((returnedValue) => {
      cy.log(returnedValue);

      
      
    })
    
  })

});
