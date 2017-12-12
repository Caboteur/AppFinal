import React, {Component} from 'react';
import {Button, Form, Segment, Icon } from 'semantic-ui-react';
import NewProfiles from '../components/NewProfiles.js';
import NewArticles from '../components/NewArticles.js';


export default class Admin extends Component {




  render(){

    return(
      <div>

     <NewProfiles />
     <NewArticles />
     <Button   size="mini"
        color="green"
        content="Aller sur mon site" href='/Slide' />
      </div>
    );
  }
}
