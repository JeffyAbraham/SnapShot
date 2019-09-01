import React from 'react';
import {Card,Button} from 'react-bootstrap'
import './Currentpost.css'
import Post from './Post'
import {Upvote} from 'styled-icons/boxicons-solid/Upvote'
import {Downvote} from 'styled-icons/boxicons-solid/Downvote'
import{Comment} from 'styled-icons/boxicons-solid/Comment'
import axios from 'axios';
import {Link} from 'react-router-dom'



class Currentpost extends React.Component {
 

  
  render(){
    
    const ImageLink = this.props.blogs.ImageLink;
    
  return (
    <div>
    
    <Card style={{ width: '50rem',marginLeft:"110px",marginTop:"30px"}}    >
      <div style={{width:"100%"}}>


    <Upvote size ="20"style={{color:"	#FF5700" ,marginTop:"6px",marginLeft:"6px"}} 
    onClick={(event)=>{
     
(this.props.onAddUpvote(this.props.blogs))}}/>



    <h6 style= {{marginLeft:"6px", marginTop:"6px",fontFamily:"Verdana",fontWeight:"500"}}>{this.props.blogs.Upvotes}</h6>
    <Downvote size ="20"style={{color:"#CEE3F8" ,marginTop:"6px",marginLeft:"6px"}}  onClick={(event)=>{
     
     (this.props.onDownVote(this.props.blogs))}}/>
  
    </div>
      <Card.Title><Link to={`One/${this.props.blogs.PostId}`}><h5 style={{color:"black",marginLeft:"30px",marginBottom:"-3px",marginTop:"3px",fontFamily:"Verdana",letterSpacing:"-1px"} }>{this.props.blogs.Title}</h5></Link></Card.Title>
    

     


      {this.props.blogs.ImageLink !== 'choose a Image or submit'?<div id="logo"><Card.Img variant="top" src={this.props.blogs.ImageLink}/><div id="logo"></div></div> : null }

      
    <Card.Body>
      
     <div className="ol" style={{marginLeft:"30px"}}><Card.Text style={{fontFamily:"Verdana",fontWeight:"530"}} >
      {this.props.blogs.Text}
      
      </Card.Text>
     
      </div>
      <div style={{ position: "absolute", 
                bottom: "0px" ,marginLeft:"30px",marginTop:"10px" }}><Comment style={{display:"inline",marginTop:"15px"}} size="15"/><h6 style={{fontWeight:"550",color:"grey",fontSize:"13px",fontFamily:"Verdana"}}> {this.props.blogs.Comments} comments</h6></div>
     
    </Card.Body>
   
  </Card>
  </div>
  );
}
}
export default Currentpost;
