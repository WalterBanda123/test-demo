
const mongoose = require('mongoose');
const getMongodbConnection = async (url) => {
    const response = await mongoose.connect(url);
    return response;
}

module.exports =  getMongodbConnection