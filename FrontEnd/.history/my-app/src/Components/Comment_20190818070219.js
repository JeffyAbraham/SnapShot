import React from 'react';


import {Upvote} from 'styled-icons/boxicons-solid/Upvote'
import {Downvote} from 'styled-icons/boxicons-solid/Downvote'


class Comnt extends React.Component {
  constructor(props){
      super(props)

      console.log(this.props)
  
  
  
          
        
      

  }

  
  render(){
 
  return (

    <div style={{marginTop:"-10px"}} className="container">
        <ul className="simple-nested">
                <li style={{listStyleType:"none"}}>
                    <div className="comment" >
                    <div> 
                      <Upvote size={18} style={{marginLeft:"-25px",marginTop:"10px",color:"gray"}}  onClick={(event)=>{
     
     (this.props.onAddUpvoteComment(this.props.comments))}}/>     
                    <p style={{margin:'0',fontWeight:'550'} }><a href="true"><small>{this.props.comments.Username}</small></a> <small style={{color:"gray",fontWeight:"400",fontWeight:"500",marginLeft:"5px"}}> {this.props.comments.Upvotes} points</small></p>
                    <Downvote size={18} style={{marginLeft:"-25px",marginTop:"-15px",color:"gray"}}/>
                    </div>
                    <div style={{marginLeft:"2px",marginTop:"-25px",position:"relative"}}>
                    <p><font size="3" >Give it</font></p>
                    <p style={{marginTop:'-20px'}}><a href><small style={{color:"gray",fontWeight:"400",fontWeight:"500"}}>Reply</small></a><a href>   <small style={{color:"gray",marginLeft:"5px",fontWeight:"500"}}>Give Award</small></a><a href>   <small style={{color:"gray",marginLeft:"5px",fontWeight:"500"}}>Share</small></a></p>
                    </div>
                    </div>
                
                </li>
        </ul>
        </div>
  );
}
}
export default Comnt;
