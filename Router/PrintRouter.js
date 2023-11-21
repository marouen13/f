const express = require('express');
const print = require('../Connecteurs/Print');
 
const PrintRouter = express.Router();

 

PrintRouter.get('/Client/PDF/:id', print.PrintClient);
PrintRouter.get('/Client/PDF_V2/:id', print.PrintClient_V2);

module.exports = PrintRouter;