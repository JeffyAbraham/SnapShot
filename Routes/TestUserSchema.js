var should=require('should')
const UserModel =require('../Models/User')
const PostModel=require('../Models/PostModel')
var mongoose = require('mongoose');
var sinon=require("sinon");
const sinonTestFactory =require('sinon-test');

const sinonTest = sinonTestFactory(sinon);
const Schema = mongoose.Schema;
describe('postModelTests', () => {

    let post = {};
    //create a post with random user id before each test
    beforeEach(() => {
        const id = mongoose.Types.ObjectId().toString(); //generates pseudo random ObjectID 
        post = {
            _PostId: id,
           Title: "A title",
           Comments:5
        };
    })
    



    it('should validate a post with a user and title', (done) => {
        const m = new PostModel(post);
        m.validate((err) => {
            should.not.exist(err);
            m.Title.should.equal(post.Title);
            m.Comments.should.equal(post.Comments);
            m._PostId.toString().should.equal(post._PostId);
            done();
        });
    });
})

describe('userModelTests', () => {
    const testUser = {};
    before(()=>{
        const username="fxwalsh";
        const password="pass";
        const email="fxwa@gmaul.com"
        testUser.username = username;
        testUser.password = password;
        testUser.email = email;
        

    });
    
    it('should validate a user with a username and password', (done) => {   
        const m = new UserModel(testUser);
        m.validate((err) => {
           should.not.exist(err);
           m.email.should.equal(testUser.email)
           m.username.should.equal(testUser.username);
           m.password.should.equal(testUser.password);
           done();
        });
    });
    it('should detect matching passwords', sinonTest(function (done) {

        const username = "fxwalsh";
        const password = "$2a$10$hxklBTD1KLdYOCrulbtf8OKxjxFEc5WBCODCCCYGb67udslRc0mHi";

        const user1 = {
            username: username,
            password: password
        };

        const user2 = {
            username: username,
            password: password
        };

        const m1 = new UserModel(user1);
        const m2 = new UserModel(user2);

        m1.comparePassword(m2.password, (err, result) => {
                should.not.exist(err);
                result.should.be.true;
                done();
            }


        )
    }));
    it('should search using username', sinonTest(function () {
        this.stub(UserModel, 'findOne');
        UserModel.findByUserName(testUser.username);
        sinon.assert.calledWith(UserModel.findOne, {
            username: testUser.username
        });
    }));

    it('should require a username and password', (done) => {
        const user={auser: "This is not valid"};
        const m = new UserModel(user);
        m.validate((err) => {
           should.exist(err);
           const errors = err.errors;
           errors.should.have.property("username");
           errors.should.have.property("password");
           done();
        });
    })
    
})
