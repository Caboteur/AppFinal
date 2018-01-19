import React, { Component } from 'react';
import { Button, Divider, Form } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import Userstore from '../store/store.js';

export default class Inscription extends Component {

constructor () {
super()
this.state={
  Firstname:"",
  Lastname:"",
  Password:"",
  Email:""
}

}

handleChange(e){
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value
  });
}

handelSubmit (e) {
e.preventDefault();
const user = {
 email: this.state.Email,
 password: this.state.Password,
  profile: {
      firstname: this.state.Firstname,
      lastname: this.state.Lastname


}

};
Accounts.createUser(user, function(err) {
  if (err){   Bert.alert({
          message: err.message,
          type: 'danger'
        })
      }
   else {
     Bert.alert({
       message: "Vous êtes connecté",
       type: 'success'
     })
     FlowRouter.go('/Admin');
     Userstore.loggedin.set(Meteor.userId());
   }

})
}





render () {
console.log(this.state.Email);
return (


  <div>
     <label>Join-us</label>
      <Form onSubmit={this.handelSubmit.bind(this)} size="huge" >
        <Form.Group widths='equal'>
          <Form.Field name='Email' onChange={this.handleChange.bind(this)} value={this.state.Email} control='input' placeholder='Email' />
          <Form.Field name='Firstname'  onChange={this.handleChange.bind(this)}value={this.state.Firstname} control='input' placeholder='Firstname' />
          <Form.Field name='Lastname' onChange={this.handleChange.bind(this)} value={this.state.Lastname} control='input' placeholder='Lastname' />
          <Form.Field name='Password' onChange={this.handleChange.bind(this)} value={this.state.Password} control='input' placeholder='Password' />
        </Form.Group>
        <Button type='submit' color='green'>Submit</Button>

      </Form>

  </div>
)


}
}
