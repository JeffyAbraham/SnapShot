import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SignVerification from './AuthenticationStuff/SignVerification'
import axios from 'axios'
import ControlledTabs from './AuthenticationStuff/ControlledTabs';
import Home from './Components/Home';
import { Upvote } from 'styled-icons/boxicons-solid/Upvote/Upvote';
import Single from './Components/Single';
import History from './Components/History';



class App extends React.Component {
  componentDidMount()
  {
    
    axios.get("http://localhost:3001/post").then(res=>this.setState({BlogInfo:res.data.Posts}))
  }
  constructor(props) {
    
    super(props)

 
    this.state={
     
      BlogInfo:[
        
           



        
      ]
    }
    
 

  }
  addPost = (post) => {
    var newPost={
      Title:post.Title,
      Text:post.Text,
      ImageLink:post.ImageLink,
      Comments:"0",
      PostId:"edwdwfwfwf",
      Postedby:"sdqdqdq",
      Upvotes:0
    }

    this.setState({
      BlogInfo: [...this.state.BlogInfo,newPost ]

    })

    }
    sortByComments=()=>
    {

      const sortedpost= this.state.BlogInfo.sort((a, b) => (b.Comments- a.Comments))
      this.setState({ BlogInfo: sortedpost });




    }
    sortByVotes=()=>
    {

         const sortedpost= this.state.BlogInfo.sort((a, b) => (b.Upvotes - a.Upvotes))
      this.setState({ BlogInfo: sortedpost });



      


    }
    addPost = (post) => {
      var newPost={
        Title:post.Title,
        Text:post.Text,
        ImageLink:post.ImageLink,
        Comments:"0",
        PostId:"edwdwfwfwf",
        Postedby:"sdqdqdq",
        Upvotes:0
      }
  
      this.setState({
        BlogInfo: [...this.state.BlogInfo,newPost ]
  
      })
  
      }

    addDownvote = (blogs) => {
      
      axios.post("http://localhost:3001/post/Upvote/",{PostId:blogs.PostId}).then
      (function(response){
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRe")
        console.log(blogs)
        
      }).catch
      (function(err)
      {
  
      })
      for(var i=0;i<this.state.BlogInfo.length;i++)
     {
       if (this.state.BlogInfo[i].PostId===blogs.PostId)
       {
        const newBlogInfo = this.state.BlogInfo.slice()
        newBlogInfo[i].Upvotes = parseInt(newBlogInfo[i].Upvotes)-1
        console.log(newBlogInfo)
         this.setState({BlogInfo:newBlogInfo})
         
       }

     }   
  
    }
    addUpvote = (blogs) => {
      
      axios.post("http://localhost:3001/post/Upvote/"+blogs.PostId).then
      (function(response){
        
        console.log(blogs)
        
      }).catch
      (function(err)
      {
         alert(err)
      })
      for(var i=0;i<this.state.BlogInfo.length;i++)
     {
       if (this.state.BlogInfo[i].PostId===blogs.PostId)
       {
        const newBlogInfo = this.state.BlogInfo.slice()
        newBlogInfo[i].Upvotes = parseInt(newBlogInfo[i].Upvotes)+1
        console.log(newBlogInfo)
         this.setState({BlogInfo:newBlogInfo})
         
       }

     }
    }
  
  
  
  render(){
    console.log("++++++++++++++++++++++")
   console.log(this.state.BlogInfo)
   console.log("+++++++++++++")
  return (
    <Router>
    <div className="App">

    <Switch>
   
    
     <Route exact path="/" component={()=><ControlledTabs />} />
    <Route exact path="/SignUp" component={SignVerification}/>
      
    <Route exact path="/Home" component={()=><Home BlogInfo={this.state.BlogInfo} onAddUpvote={this.addUpvote} onAddPost={this.addPost} onDownVote={this.addDownvote} sortByVotes={this.sortByVotes} sortByComments={this.sortByComments}/>} />
       
        <Route exact path="/One/:id" render={(params)=>(<Single BlogInfo={this.state.BlogInfo}{...params} />)}/>
        <Route exact path="/profiles/:id" component={History}/>
  
  
  </Switch>
  
  
    </div>
  
    </Router>
  );
}
}
export default App;