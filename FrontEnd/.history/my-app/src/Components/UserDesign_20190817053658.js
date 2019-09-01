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
       <img src="https://avatarfiles.alphacoders.com/951/95107.jpg"></img>
       <p>{this.props.info}</p>
      
    </div>
    

  );
}
}
export default UserDesign;
