const mongoose = require('mongoose');
const Product = require('../models/product');

const initConnection = async () => {
    await mongoose.connect('mongodb://localhost:27017/');
    console.log('Connected to mongoDB successfully');
};

const initProductes = () => {
    const productsList = [
        { title: 'סבון', price: 15, amount: 0, description: 'חדש', itemPicture: "https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/QXO42_Z_P_7290012823251_1.png" },
        { title: 'שמן זית', price: 30, amount: 0, description: 'חצי מחיר רק היום', itemPicture: "https://m.pricez.co.il/ProductPictures/7290104729003.jpg" },
        { title: 'אבטיח', price: 20, amount: 0, description: 'טרי טרי', itemPicture: "https://d3m9l0v76dty0.cloudfront.net/system/photos/4166529/original/fce5b9110bd650b4188c8d233137db44.jpg" },
        { title: 'לחם', price: 10, amount: 0, description: 'אין על פחמימה', itemPicture: "https://angel.co.il/sysvault/docsfiles4/cd-4-33-1.png" },
    ];

    productsList.forEach((p) => {
        const product = new Product(p);
        product.save();
    });

    console.log('Init products');
}

module.exports = {
    initConnection,
    initProductes
};