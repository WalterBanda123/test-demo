require('dotenv').config()
const app =  require('./../app')
const supertest = require('supertest');
const { StatusCodes } = require('http-status-codes')

afterAll((done) => {
    app.close(() => {
        done();
    });
});

describe('POST /api/version-03/books', function () {
    it(' creates a book record', async function () {
        const dummyData = {  title: "book-03", description: "book-03", pages: 0 }
        const response = await supertest(app).post('/api/version-03/books')
            .send(dummyData)
        expect(response.statusCode).toEqual(StatusCodes.CREATED);
        expect(response.body).toHaveProperty("book")
    })
})