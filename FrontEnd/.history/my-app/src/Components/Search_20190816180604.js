import React from 'react';
import './Post.css'


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

    <input type="text"  value={this.state.username} placeholder="Search for names.." onChange={this.handlechange}/>


  );
}
}
export default Search;
