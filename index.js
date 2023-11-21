const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const msg = require('./Helper/logger.js');
const ClientRoute  = require('./Router/ClientRouter')
 const ClientPrint  = require('./Router/PrintRouter')
 const init_conf = require('./Helper/init_conf.js');



// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )
//console.log(process.env);

app.get('/', (request, response) => {
    response.json({ response: 'App running' })
  })
 
app.use('/users', ClientRoute)
 app.use('/print', ClientPrint)
 
 
  app.listen(port, () => {
    msg.log_error('INFO',`App running on port ${port}.`);
})

init_conf.init_config()
 
