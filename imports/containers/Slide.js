import React, { Component } from 'react';
import { Button, Grid, Card, Image, Icon} from 'semantic-ui-react'
import {SectionsContainer, Section} from 'react-fullpage';

import Actualites from '../components/Actualites.js';

import styles from '../style/Slide.css';

export default class Slide extends Component {



    render(){
      let options = {
         sectionClassName:     'section',
         anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
         scrollBar:            false,
         navigation:           true,
         verticalAlign:        false,
         sectionPaddingTop:    '50px',
         sectionPaddingBottom: '50px',
         arrowNavigation:      true
       };

        return (
          <SectionsContainer {...options}>
          <Section className="page"><Actualites /></Section>
          <Section >Page 2</Section>
          <Section>Page 3</Section>
          vcc</SectionsContainer>
        );
      }
    }
