import React, {Component} from 'react';
import {Button, Form, Segment, Icon } from 'semantic-ui-react';
import NewProfiles from '../components/NewProfiles.js';
import NewArticles from '../components/NewArticles.js';


export default class Admin extends Component {

constructor (){
   super();
   this.state={
    pics:'/image/' + "",


   }
}



  handleChange(e){
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleCancel(e){
    e.preventDefault();

  }

  handleSave(e){
    e.preventDefault();
    Meteor.call('savePics', this.state, (err, res)=> {
      if(err){
        Bert.alert({
          title:"Désolé",
          message: err.error,
          type: 'danger'
        });
      } else {
        Bert.alert({
          title:"bravo",
          message: "Votre imagesa été sauvegardé",
          type: 'success'
        });
      }
    });
  }


  render(){

    return(
      <div>

     <NewProfiles />
     <NewArticles />
     <h1>Gallerie</h1>
     <Form.Input
       name="pics"
       onChange={this.handleChange.bind(this)}
       value={this.state.pics}
       label='pics'
       placeholder='/image/persona.jpg'/>
         <Form.Button onClick={this.handleSave.bind(this)} content="Enregistrer" positive />
     <Button   size="mini"
        color="green"
        content="Aller sur mon site" href='/Slide' />
      </div>
    );
  }
}
