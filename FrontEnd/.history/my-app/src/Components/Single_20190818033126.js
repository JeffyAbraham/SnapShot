import React from 'react';
import Currentpost from './Currentpost';
import {Card,Button} from 'react-bootstrap'
import {Upvote} from 'styled-icons/boxicons-solid/Upvote'
import {Downvote} from 'styled-icons/boxicons-solid/Downvote'
import{Comment} from 'styled-icons/boxicons-solid/Comment'
import decode from 'jwt-decode'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


import {Form} from 'react-bootstrap'
import Comnt from './Comment';


class Single extends React.Component {

    constructor(props)
    {
      
        super(props)
    this.state={
      redirect:"",
     comments:"",
      commentInfo:[
    ]
,
    GetSinglePost:[

    ]

    }
    
    
}

componentDidMount()
      {
        axios.get("http://localhost:3001/comment/"+this.props.match.params.id).then(res=>this.setState({commentInfo:res.data.Comment}))
        axios.get("http://localhost:3001/Post/single/"+this.props.match.params.id).then(res=>this.setState({GetSinglePost:res.data.Posts}))
      }
handleCommentchange=(event)=>
    {
        this.setState({
            comments:event.target.value
  
  
        })
  
  
    }
    
    handleSubmit=(event)=>
    {

      var token=decode(localStorage.getItem("JWTToken"))
      console.log(token)
      let config = {
        headers: {
          "Authorization": localStorage.getItem("JWTToken")
        }
      }
      axios.post("http://localhost:3001/Comment/"+this.props.match.params.id,
         
        {Comment :this.state.comments,
        PostId:this.props.match.params.id,
        Time:new Date(),
        Username:token.username,
        UserId:token.userId,
        ParentId:"None"
        },config      

    ).then((response) => {
      console.log(response)
      var data={comment:response.data.result.Comments,
        Username:response.data.result.Username
        };
        this.setState({commentInfo:[data,...this.state.commentInfo]})
        
      }).catch(err=>{

       this.setState({redirect:true})

      });








      
      event.preventDefault();
    
    
    this.setState({comments:""})
    
    
    
    }

    addUpvoteComment = (comm) => {
     const CommentId=comm._CommentId
     
      axios.post(" http://localhost:3001/Comment/Upvote/"+CommentId).then
      (function(response){
        
        
      }).catch
      (function(err)
      {
        alert(err)
  
      })
      for(var i=0;i<this.state.commentInfo.length;i++)
     { 
       if (this.state.commentInfo[i].CommentId===comm.CommentId)
       {
        const newCommentInfo = this.state.commentInfo.slice()
        newCommentInfo[i].Upvotes = newCommentInfo[i].Upvotes+1
         this.setState({commentInfo:newCommentInfo})
         
       }

     }
    }
   
  render(){

 if(this.state.redirect==true)
 {
  (alert("please Sign in to continue"))
  return <Redirect to='/' />
 }
  
  return (
     <body style={{backgroundColor:"#EFF7FF"}} >
    <div style={{marginTop:"40px"}}>
    
    <Card style={{ width: '50rem',marginLeft:"110px",marginTop:"30px" ,paddingTop:"10px"}}    >
    <div style={{width:"500rem",backgroundColor:"black",marginTop:"-10px",paddingTop:"10px"}}>   <div style={{width:"100%"}}>
    <Upvote size ="20"style={{color:"	#FF5700" ,marginTop:"6px",marginLeft:"6px"}} 
    />
    <h6 style= {{marginLeft:"6px", marginTop:"8px",fontWeight:"550",fontSize:"15px",color:"white"}}>{this.state.GetSinglePost.Upvotes}</h6>
    <Downvote size ="20"style={{color:"#CEE3F8" ,marginTop:"6px",marginLeft:"6px"}}/>
    </div>
    <div style={{width:"30"}}><Card.Title><h6 style={{color:"white",marginLeft:"30px",marginBottom:"-3px",marginTop:"3px",fontFamily:"Verdana",letterSpacing:"-1px",fontSize:"15px"} }>{this.state.GetSinglePost.Title}</h6></Card.Title></div></div>
     
    <h6 style={{color:"white",marginLeft:"30px",marginBottom:"-3px",marginTop:"3px",fontFamily:"Verdana",letterSpacing:"-1px",fontSize:"15px"} }>The Bouldering Legend</h6>
      <div id="logo" style={{marginTop:"20px"}}><Card.Img variant="top" src={this.state.GetSinglePost.ImageLink}/><div id="logo"></div></div>
    <Card.Body>
      
     <div  style={{marginLeft:"30px"}}><Card.Text style={{fontFamily:"Verdana",fontWeight:"530"}} >
      {this.state.GetSinglePost.Text}
      
      </Card.Text>
     
      </div>
      <div style={{ position: "relative", 
                bottom: "0px" ,marginLeft:"30px",marginTop:"100px" }}><h6 style={{fontWeight:"500",color:"grey",fontSize:"13px",fontFamily:"Verdana"}}>{this.state.GetSinglePost.Comments} comments</h6>  <h6 style={{fontWeight:"500",color:"grey",fontSize:"13px",marginLeft:"5px",fontFamily:"Verdana"}}>Give Award</h6></div>
    </Card.Body>
    <Form onSubmit={this.handleSubmit}>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    
    <Form.Control as="textarea" rows="3" style={{width: '85%' ,height:'200px',fontWeight:"500",color:"gray",marginLeft:"50px",bordercolor:"black",}}value={this.state.comments} onChange={this.handleCommentchange} ></Form.Control>
   
    <Button variant="primary" type="submit" size="sm" style={{marginLeft:"620px",marginTop:"5px",float:"left",color:"gray",textTransform:"none"}}><h6 style={{color:"white"}} >comment</h6></Button>
  </Form.Group>
  </Form>












  {this.state.commentInfo.map((comments,index)=><Comnt key={index} comments={comments} onAddUpvoteComment={this.addUpvoteComment}  />)}
  
  </Card>

  </div>
  </body>
  );
}
}
export default Single;
