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
       <img src="https://avatarfiles.alphacoders.com/951/95107.jpg" alt="ex" width="30" height="30" style={{marginLeft:"-10px"}}></img>
      
      
    </div>
    

  );
}
}
export default UserDesign;
