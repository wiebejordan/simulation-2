require('dotenv').config();

const express = require('express'),
      app = express(),
      ctrl = require('./controller'),
      massive = require('massive'),
      {SERVER_PORT, DB_URI} = process.env;



app.use(express.json());

massive({
  connectionString: DB_URI,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db);
  console.log('db connected bruh')
}).catch(err => console.log(err));

app.get('/api/houses', ctrl.getHouses);

app.listen(SERVER_PORT, () => console.log(`server crushing it on ${SERVER_PORT}`));
