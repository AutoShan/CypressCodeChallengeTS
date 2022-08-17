//This command will return the userId of the specific user in '/users' api
Cypress.Commands.add('getuserIdBuUsername', (username) => {
    
    const findUsername = String(username);
    
    cy.request ({
      method: 'GET',
      url: '/users'
    })
      .then(res => {
        expect(res.statusText).to.eq('OK');
        expect(res.status).to.eq(200);
        expect(res.body).to.not.null;        
        
        var arrUsers = res.body;

        for (var index in arrUsers) {       
          if (arrUsers[index].username == findUsername) {
            expect(arrUsers[index].username).to.eq(findUsername);
            return arrUsers[index].id;
          }
        }
      });
});