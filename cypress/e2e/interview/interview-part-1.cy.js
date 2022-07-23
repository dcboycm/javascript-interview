describe('Interview', () => {
    //  ----- Users API -----  \\
    it('When /users api is called with no params then it returns all users ordered by email ascending', () => {
      cy.request({
        method: 'GET', 
        url: 'http://localhost:3000/users', 
        body: {
        }
      }).then( ({ body }) => {
  
        expect(body).to.have.length(50) // check number of users 
        expect(body[0].email).to.eq('admitrs@altervista.org') // check first item's email value in response
        expect(body[1].email).to.eq('akonzel12@ehow.com') // check second item's email value in response

      })
  
    })
    it('When /users api is called with id, email, or subscription_id param then it returns user', () => {
      cy.request({
        method: 'GET', 
        url: 'http://localhost:3000/users/id/5', 
        body: {
        }
      }).then( ({ body }) => {
  
        expect(body).to.have.length(1) // check that only one (id=5) item gets returned
        expect(body[0].id).to.eq(5) // check that the id matches
        expect(body[0].email).to.eq('cradnage4@salon.com') // check that the id matches


      })
    
  
    //  ----- Subscriptions API  -----  \\
    it('When /subscriptions api is called with id param then it returns subscription, user, and deliveries', () => {
      // Todo
    })
    it('When /subscriptions api is called with type param then it returns all subscriptions for given type', () => {
      // Todo
    })
  
  
    //  ----- Deliveries API  -----  \\
    it('When /deliveries api is called with id param then it returns subscription, user, and deliveries', () => {
      // Todo
    })
    it('When /deliveries api is called with subscription_id param then it returns all deliveries for given subscription_id', () => {
      // Todo
    })
  })
})