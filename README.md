# Assignment 2 - Web app using React, Nodea and Express.

Name: Jeffy Abraham

# Snapshot a photo sharing platform

## Overview.

This web application is a social networking website which allows users to share Image with the world


 . . . . . List of user features  . . . . 
 
 + User SignUp/Login
 + Post  image to S3 bucket
 + Allows users to comment on post
 + Allows users to upvote and downvote post
 + Allows users to vote on comments
 + Sort post based on total number of comments and votes
 + Supports multi user interaction
 + Real time search with the help of which users can search for others
 + Shows history of posts posted by users
 + Each user has a Karma  points which increaments based on total votes received by certain user 
 

## Installation requirements.

Note: All the required node modules are saved in package.json, so no seperate installation of modules required. To run the app first start the local JSON server and then start the npm. NPM is started for both client and server seperately.

npm start

## Data Model Design.

![alt text](DataModel.png)

## App Component Design.

k  


## UI Design.

![alt text](SigninPage.PNG)
![alt text](SignupPage.PNG)
![alt text](Trending.PNG)
![alt text](Search.PNG)
![alt text](Capture.png)



# Web API Endpoint Reference
Base URL: localhost:3001/
The above service offer API to operate the socail networking website .The endpoints allows various functionalites like search for users,get single post,comment on post,upvote post,Upload photos to S3 bucket,Get user profile etc

## Web API Install and Operation
Below the below commmand is added to start script in package.json. 
 
+ And babel-node is a cli used to transpile and compile ES6 js code, to make it back ward compatible.

## API Design
### /User
+ /User/login
    + POST : when the correct email and password is passed it returns a JWT token with help of which user can access protected endpoints
+ /User/Signup
    + POST : New users can Signup with their emailid,username and password
+ /User/Single/:userId
    + GET : Can be used to retrive single user
+ /User/Single/:userId
    + GET : Can be used to retrive single user    
+ /User/search/:name
    + GET : This  endpoint is used for Mongo text search.It returns a list of record matching the a string
    
### /Post
+ /Post/:userId
    + POST : This route checks if the user is authenticated or not and this endpoint faclitates users to upload picture via multipart form.The uploaded images is then loaded into  Amazon S3 .The link generated after the upload is loaded into mongo db
+ /Post
    + GET : Fetches all the posts with in the data base
+ /Post/single/:PostId
    + GET : retrives a single post based on the POSTId passed
+ /Post/:userId
    + GET : retrives all the post of that particular user(endpoint responssible for displaying Users Post History).
+ /Post/Downvote/:PostId 
    + Post : Users can downvote a certain post by -1 
+ /Post/Upvote/:PostId 
    + Post : Users can Upvote a certain post by +1     
    
    
### /Comments
+ Comments/:PostId
    + GET  : It will retrieve all the comments associated with that particular post
    + POST : This route checks if the user is authenticated or not and this endpoint faclitates users to add comment to the post
+ /Comments/Downvote/:CommentId
    + POST : Downvote a comment
+ /Comments/Upvote/:CommentId
    + POST : Upvotevote a comment
+ /Commnts/Awards/:CommentId/:medal
    + POST : Give gold,Silver or platinium medal to a particular user post
 

## Security and Authentication

In Users API, mongoose schema is enabled with pre configuration to encrypt the password using 'Bcrypt'. 

Using Users API whenever a user signup/login a jwt token is created and sent along with the response body. In order for a user to post Image or cooment on an Image he must send the access token along with the request.The access token when sent is verified by JWT.Verify(token).Furthermore a validity peroid  is also set for the token.

The token is stored in localstorage

The endpoints that involves this token based authentication are /Post/userID and /Comment/PostID.

## Testing

Unit testing and Integration testing is done for the individual API end points. 
Unit testing involves test cases that validates the moongose models. Here each endpoint's corresponding model contains a set of test cases that test the their functionality. .

![alt text](UnitTesting.png)

Integration testing is done by testing each API with a script containing a sequences of tests based API calls. 'Supertest' is used to test individual API calls. For example below script invoves sequence of /users endpoint tests, ender each tests a subset of validations are performed to check whether the API works as expedted.

![alt text](Capture.PNG




## Extra features

+ New user registeration and authentication.
+ All user and app data is stored in mongo NoSQL database and retrived using rest API exposed using Node and express middleware.
+ Used componentDidMount which is invoked to load the user profile and activity data  immediately after their respective component is mounted.
+ To enhance user experience, used third party components like antd and reactstrap. Also utilised the proptypes supported by those components to achieve the required fearture. 
+ Detailed Integration testing for API end points used and required unit testing is done for moongose models.
+ Unit test and integration test reports are genrated using 'mochawesome' for futher analysis and sharing. 


## Independent learning.

+ Learnt Fire base authentication and applied it in user login/signup
+ Used third party components, by refering their API docs. Below are those
https://reactstrap.github.io/
https://ant.design/docs/react/introduce



[model]: ./images/datamodel.PNG
[image1]: ./images/login.PNG
[image2]: ./images/signup.PNG
[image4]: ./images/profile.PNG
[image6]: ./images/activityList.PNG
[image8]: ./images/createitem.PNG
[image9]: ./images/privacyscreen.PNG
[testingimage1]: ./images/unitTest.PNG
[testingimage2]: ./images/integTest.PNG
