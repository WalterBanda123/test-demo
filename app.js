require('dotenv').config()
const express = require('express');
const bodyParser = require("body-parser");
const bookRoutes = require('./routes/book-routes-01')
const app = express();
const databaseConnection = require('./database/db/connect-db')
const morgan = require('morgan')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('combined'));

app.route('/api/version-03/test').get(async (req, res) => {
    console.log('Hi');
    res.send('Testing')
})
app.use('/api/version-03/books', bookRoutes)

const server = app.listen(3000, () => {
    databaseConnection(process.env.MONGO_URL).then((response) => {
        if (response.STATES.connected) {
            console.log(response.STATES.connected);
            console.log('App running on port 3000🚀✨');
        }
    }).catch(error => {
        console.log(error);
    }).finally(() => {
        console.log("Let's complete here");
    })
})

module.exports = server