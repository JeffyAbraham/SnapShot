import React from 'react';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap'


class History extends React.Component {
 
  constructor(props){
      super(props)


  }

  
  
  render(){
    console.log(this.props)
  return (


    <div style={{marginLeft:"1020px",marginTop:"40px",height:"10px"}}>
        <Card style={{ width: '5rem' ,marginLeft:"15px",height:'5rem' }}>
  <Card.Img variant="top" src="https://avatarfiles.alphacoders.com/951/95107.jpg" style={{marginLeft:"0px"}} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>



      
      
    </div>
    

  );
}
}
export default History;
