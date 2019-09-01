import React from 'react';
import './Search.css';
import { MDBCol, MDBInput } from "mdbreact";
import axios from 'axios';


class Search extends React.Component {
 
  constructor(props){
      super(props)

    this.state={
       
        username:"",
        userinfo:[
          
        ]





    }  
  
  
  
          
        
      

  }

  handlechange=(event)=>{
    
    this.setState({username:event.target.value})
  if(event.target.value.length>0)
  {
    axios.get("http://localhost:3001/User/Search/"+this.state.username).then(res=>{if 
    (res.status=200){

      this.setState({userinfo:res.data.message})


    }else
  {
    
this.setState({userinfo:[]})



  }}
    ).catch(err=>console.log(err))
  
    console.log(this.state.userinfo)

    
}
else{
  this.setState({userinfo:[]})
} 



  }
  
  render(){
    
  return (

    <MDBCol md="6">
    <MDBInput hint="Search" type="text" containerClass="active-orange active-orange-2 mt-0 mb-3" value={this.state.username} onChange={this.handlechange} />
    {this.state.userinfo.map((info,index)=><h1>{info.username}</h1>)}
   
  </MDBCol>

  );
}
}
export default Search;
