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
    



  }
  
  render(){
    
  return (

    <MDBCol md="6">
    <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" />
  </MDBCol>

  );
}
}
export default Search;
