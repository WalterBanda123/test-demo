require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./../app')
const supertest = require('supertest');

describe('POST /api/version-03/books', function () {
    it(' creates a book record', async function () {
        const dummyData = {
            title: "To Kill a Mockingbird",
            description: "Set in the Deep South during the 1930s, 'To Kill a Mockingbird' tells the story of Scout Finch, a young girl who grows up witnessing racial injustice and prejudice. Her father, lawyer Atticus Finch, defends a black man falsely accused of raping a white woman, highlighting themes of morality, empathy, and the loss of innocence.",
            pages: 464
        }
        const response = await supertest(app).post('/api/version-03/books')
            .send(dummyData)
        expect(response.body).toHaveProperty("book");
    });
});

afterEach((done) => {
    app.close(()=>{
        done()
    });
    mongoose.connection.close()
});