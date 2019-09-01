import React from "react";
import Signup from './SignVerification'
import { Redirect } from 'react-router-dom'
import './formpage.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn ,MDBInput} from 'mdbreact';
import axios from 'axios'





class FormPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            email:'',
            password:'',
            loggedin:false
   
        
          
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
    
      axios.post("http://localhost:3001/User/login",{
      email:this.state.email,
      password:this.state.password

      }).then(response=>{
        localStorage.setItem("JWTToken",response.data.Token)
        this.setState({loggedin:true})

      
        
    }).catch(err=>{
      alert("Please SignUp if you dont have an account")
    })
      
          
    event.preventDefault();

    }
    render()
    {
      if(this.state.loggedin==true)
      {
        return <Redirect to="/Home"/>
      }
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