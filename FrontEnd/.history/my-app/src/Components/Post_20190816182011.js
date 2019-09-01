import React from 'react';
import './Post.css'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');


var getIdToken;
var poolData = {
    UserPoolId : 'us-east-2_jCHTM0Rjo', // Your user pool id here
    ClientId : '4k3v7bubp10p1hi1cvfi1ld1s0' // Your client id here
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

class Post extends React.Component {
  
  constructor(props)
  {
      super(props)
      this.state={
         Title:"",
         Text:"",
         ImageLink:"Enter image or submit"
        
      

      
      }

  }
  
  handleTitlechange=(event)=>
  {
      this.setState({
          Title:event.target.value


      })


  }
  handleTextchange=(event)=>
  {
      this.setState({
          Text:event.target.value
      })


  }
  handleImagechange=(event)=>
  {
      this.setState({
          ImageLink:event.target.value
      })


  }
  
  handleSubmit=(event)=>{
    
    userPool.getCurrentUser().getSession((err,session)=>{

      if(err)
      {
              console.log("ARGGGGGGGGGGGGGGGGGGGG")
      }
    else{

        getIdToken= session.getIdToken().getJwtToken()   
    }
    
    
    })
    

    console.log(getIdToken)
    let config = {
      headers: {
        "Authorization": getIdToken
      }
    }

    axios.post("https://3em19ts012.execute-api.us-east-2.amazonaws.com/Dev/showusers/{UserId}/Ask",{

        Title:this.state.Title,
        Text:this.state.Text,
        PostedBy:userPool.getCurrentUser().getUsername(),
        ImageLink:this.state.ImageLink,
        PostedOn:new Date()
    },config).then(function(response){
        console.log(response.data.messgae)
      
        
    }).catch(function (err)
    {
      alert(err)
    })



    

  

    this.props.onAddPost(this.state)   
   
   this.setState({
     Text:"",
     Title:"",
     ImageLink:""

   })
   
 
   
event.preventDefault();
  }
  

render() { 

      
  return (
    <div>
    <Search/>
     <Form className="post" onSubmit={this.handleSubmit}>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label><h4 style={{color:'black',tabSize:'10px',fontWeight:"500",fontFamily:"Verdana",marginBottom:"-5px"}}>*title</h4></Form.Label>
    <Form.Control as="textarea" rows="3" style={{width: '400px' ,height:'50px',fontWeight:"500",color:"black"}}value={this.state.Title} onChange={this.handleTitlechange} required="true"/>
  </Form.Group>
  <br/>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label><h4 style={{color:'black',tabSize:'10px',fontWeight:"500",fontFamily:"Verdana",marginBottom:"-5px"}}> text</h4></Form.Label>
    <Form.Control as="textarea" rows="3" style={{width: '400px' ,height:'200px',fontWeight:"500",color:"black"}}value={this.state.Text} onChange={this.handleTextchange} />
  </Form.Group>
  <br/>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label><h4 style={{color:'black',tabSize:'10px',fontWeight:"500",fontFamily:"Verdana",marginBottom:"5px"}}>paste a link or</h4> <input type="file" name="fileToUpload" id="fileToUpload"/></Form.Label>
    <Form.Control as="textarea" rows="3" style={{width: '400px' ,height:'30px',fontWeight:"500",color:"black"}}value={this.state.ImageLink} onChange={this.handleImagechange} />
  </Form.Group>
  <Button variant="primary" size="sm" type="submit">
   
      <small>submit</small>
    </Button>
   <footer style={{float:"right"}}><p style={{color:"Lapis Lazuli"}}>content  policy   help</p></footer>
  </Form> 
    </div>
  );
}
}
export default Post;
