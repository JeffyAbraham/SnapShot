import React from 'react';
import Search from './Search'
import './Post.css'
import  { Redirect } from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import decode from 'jwt-decode'
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');




class Post extends React.Component {
  
  constructor(props)
  {
      super(props)
      this.state={
         Title:"",
         Text:"",
         ImageLink:"Enter image or submit",
         selectedfile:null,
         redirect:false
        
      

      
      }

  }
  
  handleTitlechange=(event)=>
  {
      this.setState({
          Title:event.target.value


      })


  }
  filehandler=(event)=>
  {

   this.setState({selectedfile:event.target.files[0]})
   console.log(event.target.files[0])

 

   
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
    var tokens=decode(localStorage.getItem("JWTToken"))

     console.log(tokens);
    
 
    const token=localStorage.getItem("JWTToken")
    
  
    let config = {
      headers: {
        "Authorization": token
      }
    }

    const fd=new FormData();
    fd.append('selectedfile',this.state.selectedfile,this.state.selectedfile.name)



    axios.post("http://localhost:3001/Post/"+tokens.userId,{

        
        Title:this.state.Title,
        Text:this.state.Text,
        PostedBy:tokens.userId,
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
     ImageLink:"",
    

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
    <Form.Label><h4 style={{color:'black',tabSize:'10px',fontWeight:"500",fontFamily:"Verdana",marginBottom:"5px"}}>paste a link or</h4> <input type="file" name="fileToUpload" id="fileToUpload" onChange={this.filehandler}/></Form.Label>
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
