import dataSource from "../fixtures/dataSource.json";

describe("validateEmailFormat.cy", () => {
  it("Validate Email Address Format", () => {
    cy.getuserIdByUsername(dataSource.username).then((returnedUserId) => {
      cy.log(dataSource.username + " userId is " + returnedUserId);

      cy.getPostByUserId(dataSource.urlPostByUser, returnedUserId).then(
        (returnedPostByUserId) => {
          let posts = returnedPostByUserId;

          posts.forEach((element) => {
            cy.request({
              method: "GET",
              url: dataSource.urlCommentsByPostId + element.id,
            }).then((res) => {
              expect(res.status).to.eq(200);
              expect(res.body).to.not.be.null;
              expect(res.body[0].postId).to.eq(element.id);
              let arrComments = res.body;

              for (var index in arrComments) {
                cy.validateEmailFormat(arrComments[index].email).then(
                  (bResult) => {
                    cy.log(arrComments[index].email);
                    expect(bResult).to.eq(true);
                  }
                );
              }
            });
          });
        }
      );
    });
  });
});
