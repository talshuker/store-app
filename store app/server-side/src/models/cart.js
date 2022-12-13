const mongoose = require('mongoose');
 const Product = require('./product')

const cartSchema = new mongoose.Schema({
    items:  [Product.schema] 
});

const Cart = mongoose.model('carts', cartSchema);
module.exports = Cart;