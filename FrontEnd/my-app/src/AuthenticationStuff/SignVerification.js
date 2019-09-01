import React from "react";
import './formpage.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');


var poolData = {
  UserPoolId : 'us-east-2_jCHTM0Rjo', // Your user pool id here
  ClientId : '4k3v7bubp10p1hi1cvfi1ld1s0' // Your client id here
};


class SignVerification extends React.Component {

  constructor(props)
  {
      super(props)
      this.state={
          
        VerificationCode:""
      
        
      }
  
  }
  
  
  handleChange=(event)=>
  {
    
    this.setState({
      VerificationCode:event.target.value
    })



  }

  onSubmitform=(event)=>{

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var userData = {
        Username : 'existentialcrisis1994@gmail.com',
        Pool : userPool
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.confirmRegistration(this.state.VerificationCode, true, function(err, result) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        alert('call result: ' + result);
    });


event.preventDefault();
  }
    render() {
      return (
          <div className="centre">
        <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={this.onSubmitform}>
            <p className="h4 text-center mb-1">Verification</p>
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Enter your verification code
            </label>
            <br />
            <input
              type="text"
              id="defaultFormRegisterTextEx"
              className="form-control" value={this.state.VerificationCode} onChange={this.handleChange}
             
            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Verify
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>       
      );
    }
  }
  

export default SignVerification;
