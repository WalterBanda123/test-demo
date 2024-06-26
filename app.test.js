
const app =  require('./app');
const request = require('supertest');

afterAll((done)=>{
    app.close(done)
})
describe("GET /", ()=>{
    it('It should return working properly',async ()=>{
        const response =  await request(app).get('/')
        expect(response.status).toEqual(200)
        expect(response.text).toBe("Working properly")
    })
})

describe('POST /working', ()=>{
    it('It should return return body passed to it', async()=>{
        const response = await request(app).post('/working')
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining({
            title:expect.any(String),
            pages:expect.any(Number),
        }))
    })
});
