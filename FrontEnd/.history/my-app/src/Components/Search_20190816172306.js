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

  }
  handleImagechange=(event)=>
  {
      this.setState({
          username:event.target.value
      })

      


  }
  
  

render() 
{
      
  return (
     <div>
    <input type="text" id="myInput" value={this.state.username} placeholder="Search for names.." onChange={this.handlechange}/>
    {this.state.UserInfo.map((userinfo,index)=><h1>we are jere</h1>)}
    
    <ul id="myUL">
    
    
    </ul>
    </div> 
    
  );

  }
export default SearchDevicesRequest;
