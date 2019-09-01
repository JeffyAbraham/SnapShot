const supertest =require('supertest');
const app=require('../app');
const should=require('should')
Postid="5d6ae54b569f9e18ac9fb3ca"





// UNIT test begin
describe('Post API test', function () {
    this.timeout(120000);
    supertest(app)
     
    
    it('should return doownvote', async () => {

       
        const res = await supertest(app)
            .post('/Post/Downvote/5d6ae54b569f9e18ac9fb3ca')
            .expect(200)
            .catch(err => {
                console.error(err);
                throw err;
            });
        res.should.have.property('status').equal(200);
        
    });


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


