const connect = require('../Helper/connect')
 var msg = require('../Helper/logger.js');




const getUsers = (request, response) => {
  try {
    connect.pool.query('SELECT * FROM client ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  } catch (error) {
     response.status(400).json(error)
  }

  }







  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    msg.log_error('INFO',`getUserById   id = ${id} `);
    msg.log_error(`SELECT * FROM client WHERE id = ${id}` );

 try {
  connect.pool.query('SELECT * FROM client WHERE id = $1', [id], (error, results) => {
      
    if (error) {
      response.status(400).json({error : true , msg : "Erreur dans requette"})
    } else{
     // var  json_client = JSON.parse(results.rows) 
      //console.log(results.rows)
     // console.log(json_client)
    //  console.log(json_client.id )
      // if (json_client.id === 1){
      //   json_client.test = "marouen" 
      //   console.log( json_client.test) 
      // }
    //  console.log(json_client.test)
    msg.log_error('INFO',`Response getUserById   id = ${id} `+JSON.stringify(results.rows) );
      
      response.status(200).json(results.rows)
    }  
  
  })
 } catch (error) {
   
  response.status(400).json(error)
 }

  }







  const createUser = (request, response) => {
    const { name, email } = request.body
  
    connect.pool.query('INSERT INTO client (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }


  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    connect.pool.query(
      'UPDATE client SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

 
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
    

    connect.pool.query('DELETE FROM client WHERE id = $1', [id], (error, results) => {
      
    
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }


  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }