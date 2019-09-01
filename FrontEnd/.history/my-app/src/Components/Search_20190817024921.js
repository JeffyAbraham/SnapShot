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
    if(this.state.username==="")
    {
      this.setState({userinfo:["me"]})
      alert(this.state.userinfo)
    }
    this.setState({userinfo:[{username:"Jeff"}]})
    this.setState({userinfo:[{username:""}]})
    
    



  }
  
  render(){
    
  return (

    <MDBCol md="6">
    <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" value={this.state.username} onChange={this.handlechange} />
    {this.state.userinfo.map((info,index)=><h1>{info.username}</h1>)}
   
  </MDBCol>

  );
}
}
export default Search;
