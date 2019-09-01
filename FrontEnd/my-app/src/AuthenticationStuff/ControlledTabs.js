import React from 'react';
import{Tab,Tabs} from 'react-bootstrap'
import FormPage from './FormPage'
import './formpage.css'
import FormPage2 from './Formpage2';


class ControlledTabs extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        key: 'home',
      };
    }
  
    render() {
      console.log(this.props.handler)
      return (
        <Tabs 
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="home" title="Sign In">
            <div className="centre">
            <FormPage handler={this.props.handler}/>
            </div>
          
          </Tab>
          <Tab eventKey="profile" title="Sign Up">
          <div className="centre">
            <FormPage2/>
            </div>
          </Tab>
         
        </Tabs>
      );
    }
  }
  

export default ControlledTabs;
