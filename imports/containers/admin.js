import React, {Component} from 'react';
import {Form, Segment} from 'semantic-ui-react';

import NewProfiles from '../components/NewProfiles.js';
import NewArticles from '../components/NewArticles.js';


export default class Admin extends Component {




  render(){

    return(
      <div>

     <NewProfiles />
     <NewArticles />

      </div>
    );
  }
}
