//This command will return the userId of the specific user in '/users' api
Cypress.Commands.add("getuserIdByUsername", (username) => {
  const strUsername = String(username);

  cy.request({
    method: "GET",
    url: "/users",
  }).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body).to.not.null;

    let arrUsers = res.body;

    for (var index in arrUsers) {
      if (arrUsers[index].username == strUsername) {
        expect(arrUsers[index].username).to.eq(strUsername);
        return arrUsers[index].id;
      }
    }
  });
});

//This command will return all the posts made by userId
Cypress.Commands.add("getPostByUserId", (url, userId) => {
  const strPostUrl = String(url);
  const strUserId = Number(userId);

  cy.request({
    method: "GET",
    url: url + userId,
  }).then((res) => {
    expect(res.statusText).to.eq("OK");
    expect(res.status).to.eq(200);
    expect(res.body).to.not.null;

    return res.body;
  });
});

//This command will validate email format and will return true or false
Cypress.Commands.add("validateEmailFormat", (email) => {
  const regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return cy.wrap(regexp.test(email));
});
