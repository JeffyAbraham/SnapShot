import React from 'react';
import './Search.css'


class Search extends React.Component {
  constructor(props){
      super(props)

    this.state={
       
        username:""





    }  
  
  
  
          
        
      

  }

  handlechange=(event)=>{

    this.setState({username:event.target.value})
    



  }
  
  render(){
    
  return (

    <input type="text"  value={this.state.username} placeholder="Search for names.." onChange={this.handlechange} style={{ backgroundPosition: "10px" ,width:"100px"}}/>


  );
}
}
export default Search;
