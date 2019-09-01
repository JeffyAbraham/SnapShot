import React from "react";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import './formpage.css'
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');



var poolData = {
    UserPoolId : 'us-east-2_jCHTM0Rjo', // Your user pool id here
    ClientId : '4k3v7bubp10p1hi1cvfi1ld1s0' // Your client id here
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var attributeList = [];

class FormPage2 extends React.Component
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
     console.log(event)


      var dataEmail = {
        Name : 'email',
        Value : this.state.email
    };
    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    attributeList.push(attributeEmail);
    userPool.signUp(this.state.email,this.state.password,attributeList,null,function(err,result){
        if(err)
        {
          
         
        }
        else
        {  
          alert(result.userSub)
         
        }
    alert(userPool.getCurrentUser())
    })









    event.preventDefault();






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
            
            
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control" value={this.state.email} onChange={this.handleChange}
            name="email"/>
            <br />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Confirm your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
              value={this.state.password} onChange={this.handlpassword}
            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};
}
export default FormPage2;