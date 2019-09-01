import React from 'react';

import axios from 'axios';
import {Link} from 'react-router-dom'


class UserDesign extends React.Component {
 
  constructor(props){
      super(props)


  }

  
  
  render(){
    console.log(this.props)
  return (

    <div>



        
       <img src="https://avatarfiles.alphacoders.com/951/95107.jpg" alt="ex" width="50" height="50" style={{marginLeft:"10px" ,marginTop:"15px",padding:"10",borderRadius: "10%"}}></img>
      <h6 style={{marginLeft:"25px",marginTop:"-27px",color:"#149EF0",fontWeight:"bolder"
}}><Link to={`profiles/${this.props.blogs.PostId}`}> {this.props.info.username}</Link></h6>
      
    </div>
    

  );
}
}
export default UserDesign;
