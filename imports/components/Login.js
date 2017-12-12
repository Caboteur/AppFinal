import React, { Component } from 'react';
import { Button, Divider, Form } from 'semantic-ui-react'
import { withTracker } from 'meteor/react-meteor-data';
import Userstore from '../store/store.js'

export default class LoginReact extends Component {

  constructor(){
     super();
     this.state={
       Email: "",
       Password: "",

     };
   }


  handleChange(e){
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value
  });
}


handleSubmit(e){
  e.preventDefault();
  Userstore.login(this.state.Email, this.state.Password, (err)=>{
    if(err){
      Bert.alert({
        message: err.message,
        type: 'danger'
      })
    } else {
      Bert.alert({
        message: "Vous êtes connecté",
        type: 'success'
      });
      FlowRouter.go('/Admin');
    }
  })
}


render () {
  console.log(Userstore.loggedin.get())
  return (
  <div>
     <label>Connection</label>
      <Form onSubmit={this.handleSubmit.bind(this)} size="huge" >
        <Form.Group widths='equal'>
          <Form.Field name="Email" label='Email' control='input'  onChange={this.handleChange.bind(this)}
          value={this.state.Email} />
          <Form.Field name="Password" label='Password' control='input'  onChange={this.handleChange.bind(this)}
          value={this.state.Password} />
        </Form.Group>
        <Button type='submit' color='green'>Connect</Button>

      </Form>

  </div>
)
}
}
