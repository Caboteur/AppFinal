import React, {Component} from 'react';
import {Form, Segment,Select, Checkbox, Radio} from 'semantic-ui-react';
import {markdown} from 'markdown';

export default class NewProfiles extends Component {
  constructor(){
    super();
    this.state= {
      type:""
    };
  }

  componentDidMount(){
    var titre = "Je suis un titre";
    console.log( markdown.toHTML("# Gros titre \n## Un second titre \n Un paragraphe \n[Je suis un lien](http://google.fr)" ) );
  }

  handleChange(e){
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
    if(e.target.name=='description' ){
      this.setState({html: markdown.toHTML(e.target.value)})
    }
  }


  handleCancel(e){
    e.preventDefault();
    FlowRouter.go('/Profile');
  }

  handleSave(e){
    e.preventDefault();
    Meteor.call('saveProfile', this.state, (err, res)=> {
      if(err){
        Bert.alert({
          title:"Désolé",
          message: err.error,
          type: 'danger'
        });
      } else {
        Bert.alert({
          title:"bravo",
          message: "Votre article a été sauvegardé",
          type: 'success'
        });

      }
      console.log(this.state)
    });
  }


test(e) {
console.log(options.value)

}

  render(){

    const options = [
      { key: 'm', text: 'Male', value:'Male'},
      { key: 'f', text: 'Female', value:'Male'},
    ]

    return(
      <div>
      <Form>
        <Form.Input
          name="title"
          onChange={this.handleChange.bind(this)}
          value={this.state.title}
          label='Titre'
          placeholder='Saisissez un titre...'/>
        <Form.TextArea
          name="description"
          onChange={this.handleChange.bind(this)}
          value={this.state.description}
          label='Description'
          placeholder='Contenu de votre article...'/>
          <Form.Group>
            <Form.Select label='Gender' options={options} placeholder='Gender' onChange={this.test.bind(this)} />
          <Form.Button onClick={this.handleSave.bind(this)} content="Enregistrer" positive />
          <Form.Button onClick={this.handleCancel.bind(this)} content="Annuler" negative />
        </Form.Group>
      </Form>
      <Segment dangerouslySetInnerHTML={ {__html: this.state.html} }>
      </Segment>
      </div>
    );
  }
}
