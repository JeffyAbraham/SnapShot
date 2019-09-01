import React from 'react';





class Search extends React.Component {
  constructor(props){
      super(props)
      this.state={
       username:"",
       userinfo:[
           {user:"Jeffy"}
           ,{user:"Jacub"}

       ]

      }

      
  
  
      handlechange=(event)=>
      {
          this.setState({
              username:event.target.value
    
    
          })
          
        
      

  }

  
  render(){
 
  return (
    <div>
      



    </div>
  
  );
}
}
export default Search;
