import React from 'react';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap'
import {Upvote} from 'styled-icons/boxicons-solid/Upvote'
import {Downvote} from 'styled-icons/boxicons-solid/Downvote'
import './Currentpost.css'


class Historypost extends React.Component {
  
 
  constructor(props){
      super(props)


  }

  
  
  render(){
    console.log(this.props)
  return (

    <div>
    
    <Card style={{ width: '40rem',marginLeft:"20px",marginTop:"40px"}}    >
      <div style={{width:"100%"}}>


    <Upvote size ="20"style={{color:"	#FF5700" ,marginTop:"6px",marginLeft:"6px"}} />



    <h6 style= {{marginLeft:"6px", marginTop:"6px",fontFamily:"Verdana",fontWeight:"500"}}>{this.props.posts.upvotes}</h6>
    <Downvote size ="20"style={{color:"#CEE3F8" ,marginTop:"6px",marginLeft:"6px"}} />
  
    </div>
      <Card.Title><h6 style={{color:"black",marginLeft:"30px",marginBottom:"-3px",marginTop:"3px",fontFamily:"Verdana",letterSpacing:"-1px"} }>{this.props.Title}</h6></Card.Title>
    

    
      
    <Card.Body>
    <Card.Body>
      
      <div className="ol" style={{marginLeft:"30px"}}><Card.Text style={{fontFamily:"Verdana",fontWeight:"530"}} >
       {this.props.posts.Text}
       
       </Card.Text>
      
       </div>
       
     </Card.Body>
    
      
     
     
    </Card.Body>
   
  </Card>
  </div>
    
  );
}
}
export default Historypost;
