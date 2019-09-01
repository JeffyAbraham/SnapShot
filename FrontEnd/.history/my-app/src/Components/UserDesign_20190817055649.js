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
       <img src="https://avatarfiles.alphacoders.com/951/95107.jpg" alt="ex" width="30" height="30" style={{marginLeft:"-10px" ,marginTop:"15px"}}></img>
      <h5 style={{marginLeft:"30px",marginTop:"-30px"}}> {this.props.info.username}</h5>
      
    </div>
    

  );
}
}
export default UserDesign;
