import React, { Component } from 'react';
import { Segment} from 'semantic-ui-react'

export default class Actualites extends Component {

  constructor(){
      super();
      this.state = {};
    }

    getArticle(titre){
      Meteor.call('getArticle', titre, (err, res)=>{
        if(err){
          Bert.alert({
            title:"Erreur",
            message: err.error,
            type: 'danger'
          })
        } else {
          this.setState(res)
        }
      });
    }

    componentWillMount(){
      this.getArticle(this.props.titre);
    }


    render(){
      return(
        <Segment>
        <h1>{this.state.title}</h1>
        <p>
        {this.state.description}
        </p>
        </Segment>
      );
    }
  }
