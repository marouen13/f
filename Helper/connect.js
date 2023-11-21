const Pool = require('pg').Pool
 
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'caisse',
  password: 'devclic',
  port: 5432,
})


const express = require("express");
const createSubscriber = require("pg-listen");

notif_pg = (async function () {
  const server = express();
   
  const DATABASE_HOST = 'localhost';
  const DATABASE_USER = 'postgres';
  const DATABASE_PASSWORD = 'devclic';
  const DATABASE_PORT = 5432;
  const DATABASE = 'caisse';

  
  const eventName = "db_event";

  //  Create listener for db
  const subscriber = createSubscriber({
    connectionString: `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE}`,
  });
  
  await subscriber.connect();
  await subscriber.listenTo(eventName);

  subscriber.notifications.on(eventName, async (data) => {
    console.log(data);
  });
    
 
})();


module.exports = {pool,notif_pg}