const express = require('express');
const { initConnection, initProductes } = require('../db/db-connection');
const { default: mongoose } = require("mongoose");
const Product = require('../models/product');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

(async () => {
  
  await initConnection();
  // initProductes();
  
  app.get('/liveness', (req, res) => {
    res.send('Server is ready!');
  });

// app.get('/products/:id/edit', async (req, res) => {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.render('products/edit' , {product});
// })

app.get('/products', async (req, res) => {
  console.log('Receive /products request');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Content-Type");
  const products = await Product.find({});
  res.send(products);
  // res.render('products/index', {products});
})


app.post('/products/save/', async (req, res) => {
  const produdcts = req.body.items;
  Product.insertMany(produdcts, (err, docs) => {})
  res.send("inserted " + produdcts);
})


// app.get('/product/:id', async (req, res) => {
//   const { id } = req.params;
//   const product = await Product.findById(id);
//   res.render('products/show' , {product});
// })

// app.post('/products/:id', async (req, res) => {   
//     const { id } = req.params;
//     const pro = await Product.findByIdAndUpdate(id , req.body , {runValidators: true , new: true})
//     res.redirect(`/product/${pro._id}`);
// })

// app.post('/product/:id', async (req, res) => {
//     const { id } = req.params;
//     const pro = await Product.findByIdAndDelete(id);
//     res.redirect(`/products`);
// })

  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
})();
