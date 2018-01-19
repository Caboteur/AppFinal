import React, {Component} from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

import styles from '../style/FormReact.css'


export default class FormReact extends Component {
  constructor(){
     super();
     this.state={
       Email: "",
       Name: "",

     };
   }


  handleChange(e){
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value
  });
  console.log(this.state)
}
sendMail() {
Meteor.call('sendEmail',this.state.Email, this.state.Name)
}


  render() {
    return (
      <div className="form-group">

      <Form>
        <Form.Group widths='equal'>
          <Form.Field id='form-input-control-first-name' color="green" control={Input} name="Email" label='Email' placeholder='Email' value={this.state.Email} onChange={this.handleChange.bind(this)} />
          <Form.Field id='form-input-control-last-name' color="green" control={Input}  name="Name" label='Last name' placeholder='Last name' value={this.state.Name} onChange={this.handleChange.bind(this)} />
        </Form.Group>
        <Form.Field id='form-textarea-control-opinion' color="green" control={TextArea} label='Opinion' placeholder='Opinion' />
        <Form.Field id='form-button-control-public' color="blue" control={Button} content='Confirm' label='Label with htmlFor' onClick={this.sendMail.bind(this)} />
      </Form>

      </div>
    );
  }
}
