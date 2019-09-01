import React from "react";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import './formpage.css'
import axios from 'axios'
import Axios from "axios";


class FormPage2 extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            
            email:'',
            password:'',
            username:'',
            
   
        
          
        }
    
    }
    handleusername=(event)=>
    {
      this.setState({
        username:event.target.value
      })
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
     

      Axios.post("http://localhost:3001/User/Signup",{
        username:this.state.username,
        password:this.state.password,
        email:this.state.email
      }).then(res=>{
        alert("Log in into your new account")
      }).catch(err=>
        {
          alert(err)
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
              username
            </label>
            <input
              type="text"
              className="form-control" value={this.state.username} onChange={this.handleusername}
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