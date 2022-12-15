const mongoose = require('mongoose');
 const Product = require('./product')

const cartSchema = new mongoose.Schema({
    items:  [Product.schema],
    userDetails: {
        type: Object,
        require: true,
        prototype: {
            name: {
                type: String, 
                require: true
            },
            phoneNumber: {
                type: String, 
                require: true
            },
            email: {
                type: String, 
                require: true
            }
        }
    }
});

const Cart = mongoose.model('carts', cartSchema);
module.exports = Cart;