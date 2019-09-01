import React from 'react';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap'
import Historypost from './Historypost';


class History extends React.Component {
    componentWillMount()
    {
      axios.get("http://localhost:3001/User/single/"+this.props.match.params.id).then(res=>this.setState({userinfo:res.data.userinfo}))
      axios.get("http://localhost:3001/post/"+this.props.match.params.id).then(res=>this.setState({post:res.data.result

      }))
        
      
    }
 
  constructor(props){
      super(props)

     this.state={
     userinfo:[],


      post:[
        
           



        
      ]


     }



      
  }

  
  
  render(){
  
  return (
  
  <div>
    <h2 style={{marginLeft:"20px",marginTop:"40px",fontStyle:"Bolder"}}>Post History</h2>
    <div style={{marginLeft:"1020px",marginTop:"40px",height:"10px"}}>
        <Card style={{ width: '10rem' ,marginLeft:"15px",height:'5rem' }}>
  <Card.Img variant="top" src="https://avatarfiles.alphacoders.com/951/95107.jpg" style={{marginLeft:"0px"}} />
  <Card.Body>
    <Card.Title>{this.state.userinfo.username}</Card.Title>
    <Card.Text>
      <h5>Total Points {this.state.userinfo.points}</h5>
    
    </Card.Text>

  
  </Card.Body>
</Card>




  
      
      
    </div>

    <div style={{marginLeft:"20px" ,marginTop:"20px"}}>
    {this.state.post.map((posts,index)=><Historypost posts={posts}/>)}
   
     
  </div>
    </div>
    
  );
}
}
export default History;
