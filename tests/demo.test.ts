import {createConnection, getConnection, getRepository} from "typeorm";

import * as request from "supertest";
import app from "../src/app";
import {User} from "../src/entity/User";
import loadFixturesHelper from "typeorm-fixtures-test";


beforeAll(async ()=>{
    await createConnection()
});

afterAll(async() => {
  getConnection().close().then(() => {});
})


beforeEach(async ()=>{
    try {
        await loadFixturesHelper();
    }catch (err) {
        console.log(err);
    }
});


describe('GET /', function() {
    it('homepage in json', function(done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                expect(res.body).toMatchObject({homepage : 'Welcome'})
                done();
            });
    });
});


describe('GET /articles', function() {
    it('article with relations', function(done) {
        request(app)
            .get('/articles')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                const articles = res.body;
                expect(articles).toHaveLength(2);
                expect(articles[0].user.firstName).toBe('Ada');
                expect(articles[0].tags).toHaveLength(2);
                done();
            });
    });
});


describe('POST /users', function() {
    it('Add an user', function(done) {
        request(app)
            .post('/users')
            .set('Accept', 'application/json')
            .expect(201)
            .end(async (err, res) => {
                const userCount = await getRepository(User).count()
                expect(userCount).toEqual(103)
                done();
            });
    });
});

