import React from 'react';

import axios from 'axios';


class UserDesign extends React.Component {
 
  constructor(props){
      super(props)


  }

  
  
  render(){
    console.log(this.props)
  return (

    <div>



        
       <img src="https://avatarfiles.alphacoders.com/951/95107.jpg" alt="ex" width="50" height="50" style={{marginLeft:"10px" ,marginTop:"15px",padding:"10"}}></img>
      <h6 style={{marginLeft:"40px",marginTop:"-27px",color:" #ff4301",fontWeight:"bolder"}}> {this.props.info.username}</h6>
      
    </div>
    

  );
}
}
export default UserDesign;
