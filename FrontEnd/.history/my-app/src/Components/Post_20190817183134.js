import React from 'react';
import Search from './Search'
import './Post.css'
import  { Redirect } from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');




class Post extends React.Component {
  
  constructor(props)
  {
      super(props)
      this.state={
         Title:"",
         Text:"",
         ImageLink:"Enter image or submit",
         redirect:false
        
      

      
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
    var token=decode(localStorage.JWTToken)
      console.log(token)
    
 
    const token=localStorage.getItem("JWTToken")
    
  
    let config = {
      headers: {
        "Authorization": token
      }
    }

    axios.post("http://localhost:3001/Post/5d56c6a9bcde083d10edd06f",{

        
        Title:this.state.Title,
        Text:this.state.Text,
        PostedBy:"5d56c6a9bcde083d10edd06f",
        ImageLink:this.state.ImageLink,
        PostedOn:new Date()
    },config).then(response=>{
      

      
        
    }).catch(error => {
      console.log("Error:" + error.message);
      this.setState({redirect: true});
      console.log(this.state)
    })

   

   
   this.setState({
     Text:"",
     Title:"",
     ImageLink:""

   })
   
 
   
event.preventDefault();
  }
  

render() { 

  if(this.state.redirect===true)
  {
    (alert("please Sign in to continue"))
    return <Redirect to='/' />
   
  }
      
  return (
    <div>
    
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
