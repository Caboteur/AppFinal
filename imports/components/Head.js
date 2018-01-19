import React, {Component} from 'react';
import { Form, Input, TextArea, Button, Grid} from 'semantic-ui-react'
import Pitch from '../components/Pitch.js';


import styles from '../style/Head.css'


export default class Head extends Component {




  render() {
    return (
      <div className="intro">


      <div className="bloc"></div>

       <Pitch />




      </div>
    );
  }
}
