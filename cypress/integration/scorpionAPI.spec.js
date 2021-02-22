

   context('apiRequest', () => {

      const apiURL =  'https://qa.scorpion.co/optisearch/review/v1/api/accounts/ED95B7CF-FF82-4F99-8E01-CFA35E663005/businesses/b96be9d0-6cab-9946-a458-2a51ee919948/reviews?offset=0&count=100'
      //Enter the apiKey before running the script.
      const apiKey = ' '
      const resType = 'application/json'
    
      it('Post the API request', function() {
    
            cy.request({
            method: 'post',
            url: apiURL,
            headers: {          
               'authorization' : apiKey,
               'Content-Type' : resType,
               'accept' : resType
            },
            body: {     
            } 
         })
           
           .then((response) => {
           cy.log(response.body)
           assert.equal(response.status,200);
           assert.equal(response.body.result.count, 64);
        })
      });
   });    