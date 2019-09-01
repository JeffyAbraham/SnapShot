const supertest =require('supertest');
const app=require('../app');
const should=require('should')

const testUser = {};
const invalidUser = {};



// UNIT test begin
describe('Users API test', function () {
    this.timeout(120000);
    // test #1: return a collection of json documents
    before((done) => {
        testUser.username = 'user1';
        testUser.password = 'test1';
        invalidUser.username = 'chancer1';
        invalidUser.password = 'bad1';
        done();
    });

    it('should register a user', (done) => {

        const newUser = {
            username: "fredyMercurieff",
            email:"regggooeg@yahoo.com",
            profilepic:"https://avatarfiles.alphacoders.com/951/95107.jpg",
            points:0,
            password: "apaskiuhsword"
        };

        supertest(app)
            .post('/User/signup')
            .send(newUser)
            .query({
                action: 'register'
            })
            .expect('Content-type', /json/)
            .expect(201) // This is the HTTP response
            .then(res => {
                // HTTP status should be 200
                res.should.have.property('status').equal(201);
                done();
            }).catch((error) => {
                console.error("Failed", error);
                done(error);
            });
    });

    it('should return a user token for valid user', () => {
      var tUser={
       
        email:"existentialcrisis1994@gmail.com",
     
        password: "ur13it040"
       }
        return supertest(app)
            .post('/User/login')
            .send(tUser)
            .expect('Content-type', /json/)
            .expect(200) // This is the HTTP response
            .then(res => {
                // HTTP status should be 200
                res.should.have.property('status').equal(200);
                res.body.Token.should.exist; 
            }).catch((error) => {
                console.error("Failed", error);
                throw error;
            });
    });

    

    it('should not return a token for invalid user', (done) => {

        supertest(app)
            .post('/User/login')
            .send(invalidUser)
            .expect('Content-type', /json/)
            .expect(401) // This is the HTTP response
            .then(res => {
                // HTTP status should be 200
                res.should.have.property('status').equal(401);
                done();
            }).catch((error) => {
                console.error("Failed", error);
                done(error);
            });
    });


    it('should require a user name and password', async () => {

        const noUser = {
            username: "",
            password: ""
        };
        const res = await supertest(app)
            .post('/User/login')
            .send(noUser)
            .expect(401)
            .catch(err => {
                console.error(err);
                throw err;
            });
        res.should.have.property('status').equal(401);
        

});