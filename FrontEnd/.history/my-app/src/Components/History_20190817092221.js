import React from 'react';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap'
import {Upvote} from 'styled-icons/boxicons-solid/Upvote'
import {Downvote} from 'styled-icons/boxicons-solid/Downvote'


class History extends React.Component {
    componentDidMount()
    {
        
    }
 
  constructor(props){
      super(props)


  }

  
  
  render(){
    console.log(this.props)
  return (

  <div>
    <div style={{marginLeft:"1020px",marginTop:"40px",height:"10px"}}>
        <Card style={{ width: '9rem' ,marginLeft:"15px",height:'5rem' }}>
  <Card.Img variant="top" src="https://avatarfiles.alphacoders.com/951/95107.jpg" style={{marginLeft:"0px"}} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Total Points  200 points
    </Card.Text>

  
  </Card.Body>
</Card>





      
      
    </div>
    <div style={{marginLeft:"20px" ,marginTop:"20px"}}>
   
    <div>
    
    <Card style={{ width: '40rem',marginLeft:"20px",marginTop:"40px"}}    >
      <div style={{width:"100%"}}>


    <Upvote size ="20"style={{color:"	#FF5700" ,marginTop:"6px",marginLeft:"6px"}} />



    <h6 style= {{marginLeft:"6px", marginTop:"6px",fontFamily:"Verdana",fontWeight:"500"}}>26</h6>
    <Downvote size ="20"style={{color:"#CEE3F8" ,marginTop:"6px",marginLeft:"6px"}} />
  
    </div>
      <Card.Title><h6 style={{color:"black",marginLeft:"30px",marginBottom:"-3px",marginTop:"3px",fontFamily:"Verdana",letterSpacing:"-1px"} }>why so much pain</h6></Card.Title>
    

    
      
    <Card.Body>
      
     
     
    </Card.Body>
   
  </Card>
  </div>
  </div>
    </div>
    
  );
}
}
export default History;
