import React from 'react';

import axios from 'axios';


class UserDesign extends React.Component {
 
  constructor(props){
      super(props)


  }

  
  
  render(){
    console.log(this.props)
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
    

     


      {this.props.blogs.ImageLink !== 'Enter image or submit'?<div id="logo"><Card.Img variant="top" src={this.props.blogs.ImageLink}/><div id="logo"></div></div> : null }

      
    <Card.Body>
      
     <div className="ol" style={{marginLeft:"30px"}}><Card.Text style={{fontFamily:"Verdana",fontWeight:"530"}} >
      {this.props.blogs.Text}
      
      </Card.Text>
     
      </div>
      <div style={{ position: "absolute", 
                bottom: "0px" ,marginLeft:"30px",marginTop:"10px" }}><Comment style={{display:"inline",marginTop:"15px"}} size="15"/><h6 style={{fontWeight:"550",color:"grey",fontSize:"13px",fontFamily:"Verdana"}}> {this.props.blogs.Comments} comments</h6></div>
     
    </Card.Body>
   
  </Card>



















       <img src="https://avatarfiles.alphacoders.com/951/95107.jpg" alt="ex" width="50" height="50" style={{marginLeft:"10px" ,marginTop:"15px"}}></img>
      <h5 style={{marginLeft:"70px",marginTop:"-27px",color:"black"}}> {this.props.info.username}</h5>
      
    </div>
    

  );
}
}
export default UserDesign;
