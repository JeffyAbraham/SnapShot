import React from 'react';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap'
import axios from 'axios'
import Historypost from './Historypost';


class History extends React.Component {
    componentDidMount()
    {
     
        axios.post("http://localhost:3001/post/"+this.props.match.params.id).then(result=>
        {
          alert(result)
        })
        
    }
 
  constructor(props){
      super(props)

      
  }

  
  
  render(){

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
        <Historypost/>
   
    
  </div>
    </div>
    
  );
}
}
export default History;
