import React from 'react';
import {Tab,Tabs,Dropdown,DropdownButton} from 'react-bootstrap'
import './Home.css'
import Post from './Post'
import Currentpost from './Currentpost'
import Search from './Search'

class Home extends React.Component {
  constructor(props){
      super(props)

      
  
  
  
          
        
      

  }

  
  render(){
    console.log(this.props)
   console.log("????????????????")
  return (

      <body style={{backgroundColor:"#EFF7FF"}}>
        
        
     <div className="Navbar" >
       
     <Tabs defaultActiveKey="profile" transition={false} id="noanim-tab-example">
  <Tab eventKey="home" title="Home">
  <Search style={{marginLeft:"100px"}}/>
  <div className="BlogContainer"><Post onAddPost={this.props.onAddPost}/>
    <aside><li style={{listStyle: "none"}}></li></aside>
</div>
</Tab>

  <Tab eventKey="profile" title="Trending Posts">
  
    
  <DropdownButton id="dropdown-basic-button" title="sort by" style={{marginLeft:"100px" ,marginTop:"7px",padding:"-10px"}}>
  <Dropdown.Item href="#/action-1" onClick={this.props.sortByVotes}>Upvotes</Dropdown.Item>
  <Dropdown.Item href="#/action-2" onClick={this.props.sortByComments}>Comments</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Date</Dropdown.Item>
</DropdownButton>
  {this.props.BlogInfo.map((blogs,index)=><h1><Currentpost key={index} blogs={blogs} onAddUpvote={this.props.onAddUpvote} onDownVote={this.props.onDownVote}/></h1>)}
   
  </Tab>

  <Tab eventKey="contact" title="Contact" disabled>
   
  </Tab>
</Tabs>
</div>
</body>
  );
}
}
export default Home;
