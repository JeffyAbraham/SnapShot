const supertest =require('supertest');
const app=require('../app');
const should=require('should')

// UNIT test begin
describe('Post API test', function () {
    this.timeout(120000);
    // test #1: return a collection of json documents
    it('should return collection of JSON documents', function (done) {
        supertest(app)
            .get('/Post')
            .expect('Content-type', /json/)
            .expect(200) // This is the HTTP response
            .then(res => {
                // HTTP status should be 200
                res.should.have.property('status').equal(200);
                done();
            });
    });
});
it('should add a contact', function (done) {
    // post to /api/contacts
    supertest(app)
        .post('/Post')
        .send({
            



            
        })
        .expect('Content-type', /json/)
        .expect(201)
        .then ((res) => {
            res.status.should.equal(201);
            res.body.should.have.property('_id');
            res.body.name.should.equal('Contact 99');
            done();
        });
});