import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import axios from 'axios';


class History extends React.Component {
 
  constructor(props){
      super(props)


  }

  
  
  render(){
    console.log(this.props)
  return (


    <div>


<Card>
<Card>
    <ImageHeader imageSrc="http://via.placeholder.com/600x250" />
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
  </Card>
      
      
    </div>
    

  );
}
}
export default History;
