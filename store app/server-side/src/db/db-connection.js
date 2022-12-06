const mongoose = require('mongoose');

const initConnection = async () => {
    await mongoose.connect('mongodb://localhost:27017/test');
};

module.exports = {
    initConnection
};