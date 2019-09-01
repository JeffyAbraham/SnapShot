import React from 'react';
import './Search.css'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'

class Search extends React.Component {
  
  constructor(props)
  {
      super(props)
     
      this.state={

        username:"",
     
        UserInfo:[
        
                {
                    username:"Jeffy",
                    imagelink:"edwffwf"
            
            
            },
            {
                username:"Jake",
                imagelink:"edwffwf"
        
        
        }



        
        ]
      }

      
      }


      handlechange=(event)=>
  {
      this.setState({
          username:event.target.value
      })

  }
  
      


  }
  
  

render() 
{
      
  return (
     <div>
    <input type="text"  value={this.state.username} placeholder="Search for names.." onChange={this.handlechange}/>
    <ul id="myUL">
    {this.state.UserInfo.map((userinfo,index)=> <li><a href="#">Adele</a></li>)}
   
    
    
    
    
    </ul>
    </div> 
    
  );

  }
export default Search;
