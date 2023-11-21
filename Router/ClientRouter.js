const express = require('express');
const client = require('../Connecteurs/client');
//const app = express()
const ClientRouter = express.Router();

 

ClientRouter.get('/', client.getUsers);
ClientRouter.get('/:id', client.getUserById);
ClientRouter.post('/', client.createUser);
ClientRouter.put('/:id', client.updateUser);
ClientRouter.delete('/:id', client.deleteUser);

module.exports = ClientRouter;