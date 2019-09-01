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
  
  

render() 
{
      
  return (
     <div>
    <input type="text" id="myInput" placeholder="Search for names.."/>

    <ul id="myUL">
      <li><a href="#">Adele</a></li>
      <li><a href="#">Agnes</a></li>
    
      <li><a href="#">Billy</a></li>
      <li><a href="#">Bob</a></li>
    
      <li><a href="#">Calvin</a></li>
      <li><a href="#">Christina</a></li>
      <li><a href="#">Cindy</a></li>
    </ul>
    </div> 
    
  );

  }
export default SearchDevicesRequest;
