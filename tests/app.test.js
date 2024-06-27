require('dotenv').config();
const mongoose = require('mongoose')
const app = require('./../app');
const supertest = require('supertest');
const databaseConnection = require('./../database/db/connect-db')


describe('GET /api/version-03/test', () => {
    it('Should return a text saying Testing',
        async () => {
            const response = await supertest(app).get("/api/version-03/test")
            expect(response.status).toBe(200)
            expect(response.text).toEqual('Testing')
        })
})

describe('Testing Mongo db connection', () => {
    it('Should connect to mongodb succesfully', async () => {
        const response = await databaseConnection(process.env.MONGO_URL)
        expect(response.STATES.connected).toBe(1)
        response.connection.close()

    })
})

afterEach((done) => {
    app.close(() => {
        done()
    })
});