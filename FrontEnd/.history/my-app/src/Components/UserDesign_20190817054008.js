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
       <img src="https://avatarfiles.alphacoders.com/951/95107.jpg" width="30" height="30"></img>
       <p>{this.props.uerdata.username}</p>
      
    </div>
    

  );
}
}
export default UserDesign;
