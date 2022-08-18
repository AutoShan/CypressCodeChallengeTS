import { isInteger } from "cypress/types/lodash";

//This command will return the userId of the specific user in '/users' api
Cypress.Commands.add("getuserIdByUsername", (username) => {
  const strUsername = String(username);

  cy.request({
    method: "GET",
    url: "/users",
  }).then((res) => {
    expect(res.statusText).to.eq("OK");
    expect(res.status).to.eq(200);
    expect(res.body).to.not.null;

    var arrUsers = res.body;

    for (var index in arrUsers) {
      if (arrUsers[index].username == strUsername) {
        expect(arrUsers[index].username).to.eq(strUsername);
        return arrUsers[index].id;
      }
    }
  });
});

Cypress.Commands.add("findPostByUserId", (url, userId) => {
  const strPostUrl = String(url);
  const strUserId = Number(userId)

  cy.request({
    method: "GET",
    url: url + userId ,
  }).then((res) => {
    expect(res.statusText).to.eq("OK");
    expect(res.status).to.eq(200);
    expect(res.body).to.not.null;

    return res.body;
    
  });
});