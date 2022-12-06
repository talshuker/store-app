const express = require('express');
const { initConnection } = require('../db/db-connection');

const app = express();
const port = 3002;

(async () => {
  // initConnection();
  
  app.get('/getProducts', (req, res) => {
    res.send('Hello World!');
  });
  
  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
});
