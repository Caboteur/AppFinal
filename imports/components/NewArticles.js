import React, {Component} from 'react';
import {Form, Segment} from 'semantic-ui-react';
import {markdown} from 'markdown';
import moment from 'moment';


export default class NewArticles extends Component {
  constructor(){
    super();
    this.state= {
     filename:'',
     image:'/image/' + "",
     date:moment().format("D MMM YY")
    };
  }

  componentDidMount(){
    var titre = "Je suis un titre";
    console.log( markdown.toHTML("# Gros titre \n## Un second titre \n Un paragraphe \n[Je suis un lien](http://google.fr)" ) );
  }

  handleChange(e){
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
    if(e.target.name=='description'){
      this.setState({html: markdown.toHTML(e.target.value)})
    }
    console.log(this.state)
  }

  handleCancel(e){
    e.preventDefault();
    FlowRouter.go('/');
  }

  handleSave(e){
    e.preventDefault();
    Meteor.call('saveArticle', this.state, (err, res)=> {
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
        FlowRouter.go('/');
      }
    });
  }



  render(){

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
          <Form.Input
            name="image"
            onChange={this.handleChange.bind(this)}
            value={this.state.image}
            label='Image'
            placeholder='/image/persona.jpg'/>
        <Form.Group>

          <Form.Button onClick={this.handleSave.bind(this)} content="Enregistrer" positive />
          <Form.Button onClick={this.handleCancel.bind(this)} content="Annuler" negative />
          <li><input onChange={this.uploadFile} ref="file" className='filepicker' id="file" type="file"/></li>
        </Form.Group>
      </Form>
      <Segment dangerouslySetInnerHTML={ {__html: this.state.html} }>
      </Segment>
      </div>
    );
  }
}
