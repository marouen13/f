const fs = require('fs');
 
var msg = require('../Helper/logger.js');

const config =  {
    id: "1",
    nom: "marouen",
    prenom: "oueslati",
    age: "35" 
  } ;



  function init_config() {  
    if (fs.existsSync('conf.json') === false) {
        msg.log_error("INFO", "Creation file conf.json with success")
        //file exists
        fs.writeFile('conf.json',JSON.stringify(config, null, 4), function (err) 
        {   
            if (err) throw err;
        });

    } 

};

async function example() {
    try {
 
        fs.readFile('conf.json', (err, data) => {
        if (err) throw err;
        var conf = JSON.parse(data)
        console.log(conf);
        console.log(conf.id);
      }); 

    } catch (err) {
      console.log(err);
    }
  }
  example();

  
module.exports = {
    init_config 
  }
