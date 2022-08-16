import dataSource from '../fixtures/dataSource.json'

describe('searchIdByUsername.cy', () => {
  it('Search User', () => {
    cy.request ({
      method: 'GET',
      url: '/users?username=' + dataSource.username
    })
      .then(res => {
        expect(res.status).to.eq(200);
        expect(res.body[0].username).equal('Delphine');
        cy.log(res.body[0].id);
      });
  });

  it.only('Find Specific User', () => {
    cy.request ({
      method: 'GET',
      url: '/users'
    })
      .then(res => {
        expect(res.status).to.eq(200);
        expect(res.body).to.not.null;
        
        var arrUsers = res.body;

        for (var index in arrUsers) {
          cy.log(arrUsers[index].username + ' ' + arrUsers[index].id)
        }

      });
  })

});
