import React from 'react';
import './Search.css';
import { MDBCol, MDBInput } from "mdbreact";


class Search extends React.Component {
  constructor(props){
      super(props)

    this.state={
       
        username:"",
        userinfo:[
            {usernames:"Jeffy"},
            {usernames:"Jak"}
        ]





    }  
  
  
  
          
        
      

  }

  handlechange=(event)=>{

    this.setState({username:event.target.value})
    this.setState({userinfo:[{username:"Rami"}]})
    alert(this.state.userinfo)
    



  }
  
  render(){
    
  return (

    <MDBCol md="6">
    <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" />
    {this.state.userinfo.map((info,index)=><h1>Inner me</h1>)}
   
  </MDBCol>

  );
}
}
export default Search;
