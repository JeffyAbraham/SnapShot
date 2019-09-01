import React from 'react';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap'


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
    <h1 style={{float:"left",color:"grey",marginLeft:"15px",fontFamily:"Verdana"}}>Post History</h1>
    </div>
    
  );
}
}
export default History;
