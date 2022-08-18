import dataSource from "../fixtures/dataSource.json";

describe("validateEmailFormat.cy", () => {

  it("Validate Email Address Format", () => {

    //Call getuserIdByUsername command to get the userId of specific user (Delphine)
    cy.getuserIdByUsername(dataSource.username).then((returnedUserId) => {
      cy.log(dataSource.username + " userId is " + returnedUserId);

      //Call getPostByUserId command to get the posts made by the specific userId
      cy.getPostByUserId(dataSource.urlPostByUser, returnedUserId).then(
        (returnedPostByUserId) => {
          let posts = returnedPostByUserId;

          //Iterate on each post
          posts.forEach((element) => {
            cy.request({
              method: "GET",
              url: dataSource.urlCommentsByPostId + element.id,
            }).then((res) => {
              expect(res.status).to.eq(200);
              expect(res.body).to.not.be.null;
              expect(res.body[0].postId).to.eq(element.id);
              let arrComments = res.body;
              
              //Iterate in the posted comments to validate each emails
              for (var index in arrComments) {
                cy.validateEmailFormat(arrComments[index].email).then(
                  (bResult) => {
                    cy.log('Email address is valid: ' + arrComments[index].email);
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
