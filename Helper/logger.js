const fs = require('fs');
const d = new Date();
const date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
const hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
const fullDate = date+' '+hours;
const separtor = '******************************************************************************************************************'
 
 function log_error(type_log,msg) {  
    fs.appendFile('Logs.txt',separtor+"\n"+ fullDate+"   ["+type_log+"]   "+msg+"\n", function (err) 
    {   
        if (err) throw err;
    });
};


 

module.exports = {
    log_error 
  }
