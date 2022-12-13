const express = require('express');
const { initConnection, initProductes } = require('../db/db-connection');
const { default: mongoose } = require("mongoose");
const Product = require('../models/product');
const Cart = require('../models/cart')
const cors = require('cors');
const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

(async () => {
  
  await initConnection();
  initProductes();
  
  app.get('/liveness', (req, res) => {
    res.send('Server is ready!');
  });

app.get('/products', async (req, res) => {
  console.log('Receive /products request');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Content-Type");
  const products = await Product.find({});
  res.send(products);
})


app.post('/products/save/', async (req, res) => {
  console.log('Receive /products/save/ request');
  const cart = new Cart(req.body);
  await cart.save();
  res.send("inserted " + cart);
})

  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
})();