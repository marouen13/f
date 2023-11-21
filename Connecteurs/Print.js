 
 var msg = require('../Helper/logger.js');
 const connect = require('../Helper/connect')

 

 const PrintClient = (request, response) => {
    const id = parseInt(request.params.id)
    msg.log_error('INFO',`PrintClient   id = ${id} `);


 try {
    connect.pool.query('SELECT * FROM client WHERE id = $1', [id], (error, results) => {
      
    if (error) {
      response.status(400).json({error : true , msg : "Erreur dans requette"})
    } else{
 
     var client = JSON.parse(JSON.stringify(results.rows));
     
       if (client[0].id === 1){
        client[0].test = "marouen" 
        }

        msg.log_error('INFO',`Response PrintClient   id = ${id} `+JSON.stringify(client[0]) );
      response.status(200).json(client[0])

    }  
  
  })
 } catch (error) {
  response.status(400).json(error)
 }
  }





  const PrintClient_V2 = (request, response) => {
    const id = parseInt(request.params.id)
    msg.log_error('INFO',`PrintClient_V2   id = ${id} `);
     const url = `http://localhost:3000/users/${id} `
     const customHeaders = {
        "Content-Type": "application/json",
    }

 try {

    msg.log_error('PrintClient_V2 url fetch ' + url)
fetch(url, {
    method: "GET",
    headers: customHeaders,
   // body: JSON.stringify(data),
})


    .then((response) => response.json())
    .then((data) => {
        var client = JSON.parse(JSON.stringify(data));
        if (client[0].id === 1){
            client[0].test = "marouen" 
         }
         if (client[0].testDDDDD ==  undefined){
            client[0].test_undefined = "OK" 
         }
         msg.log_error('INFO',`Response PrintClient_V2   id = ${id} `+JSON.stringify(client[0]) );
       response.status(200).json(client[0])

    })
    .catch((error) => {
        console.error(error);
        response.status(400).json(error)
    });

 } catch (error) {
  response.status(400).json(error)
 }
  }

 
  module.exports = {
    PrintClient,
    PrintClient_V2
  }