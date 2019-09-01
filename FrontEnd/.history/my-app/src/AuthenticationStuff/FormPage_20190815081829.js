import React from "react";
import Signup from './SignVerification'
import { Redirect } from 'react-router-dom'
import './formpage.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn ,MDBInput} from 'mdbreact';
import SignVerification from "./SignVerification";
import { CognitoUserSession } from "amazon-cognito-identity-js";
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');




var poolData = {
    UserPoolId : 'us-east-2_jCHTM0Rjo', // Your user pool id here
    ClientId : '4k3v7bubp10p1hi1cvfi1ld1s0' // Your client id here
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


class FormPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            email:'',
            password:'',
   
        
          
        }
    
    }
    
    
    handleChange=(event)=>
    {
      
      this.setState({
        email:event.target.value
      })



    }
    handlpassword=(event)=>
{
  this.setState({
    password:event.target.value
  })
}

    onSubmitform=(event)=>{

      alert("Loggined")
    var authenticationData = {
      Username : this.state.email,
      Password : this.state.password,
  };
  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
      var userData = {
        Username : this.state.email,
        Pool : userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            
            console.log('access token + ' + result.getAccessToken().getJwtToken());
            console.log('id token + ' + result.getIdToken().getJwtToken());
            console.log('refresh token + ' + result.getRefreshToken().getToken());
        },
        onFailure: function(err) {
           console.log(err)
        },

    });     
    
            console.log(userPool.getCurrentUser().username)
        
            event.preventDefault()

          
    

    }
    render()
    {
  return (
    <div className="centre">
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={this.onSubmitform}>
            <div className="up"></div>
            <img src="http://www.clker.com/cliparts/f/e/J/8/3/w/purple-flame-logo-md.png" height="50" width="40"/>
           
           
            <p className="h3 text-center mb-4">Athithi</p>
            <div/>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"value={this.state.email} onChange={this.handleChange}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate value={this.state.password} onChange={this.handlpassword}
              />
            </div>
            <div className="text-center">
              <MDBBtn color="unique" type="submit">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};
}
export default FormPage;