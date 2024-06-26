require('dotenv').config()
const express = require('express');

const app = express();
var someVar = 'Testing if this works'
console.log(someVar);
const server = app.listen(3000, () => {
    console.log('App running on port 3000');
})

module.exports = server