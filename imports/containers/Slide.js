import React, { Component } from 'react';
import { Button, Grid, Card, Image, Icon} from 'semantic-ui-react'
import {SectionsContainer, Section} from 'react-fullpage';
import {withTracker} from 'meteor/react-meteor-data';

import Userstore from '../store/store.js'

import Actualites from '../components/Actualites.js';
import Profile from '../components/Profile.js';
import FormReact from '../components/Form.js';
import Pitch from '../components/Pitch.js';
import Menu from '../components/Menu.js';

import styles from '../style/Slide.css';


class Slide extends Component {

  logout(){
   Userstore.logout((err)=>{
     if(err){
       Bert.alert({
         title:"Erreur réseau ",
         message: "Nous n'avons pas pu vous déconnecter",
         type: 'danger'
       });
     } else {
       Bert.alert({
         title:"Déconnexion",
         message: "Vous êtes maintenant déconnecté",
         type: 'success'
       });
     }
   });
 }




    render(){
      let options = {
         sectionClassName:     'section',
         anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive'],
         scrollBar:            false,
         navigation:           true,
         verticalAlign:        false,
         sectionPaddingTop:    '0px',
         sectionPaddingBottom: '0px',
         arrowNavigation:      true
       };


       const LogoutButton = () => {
             if (this.props.loggedin) {
           return (<Button
             size="mini"
             icon="delete"
             color="red"
             content="Logout"
             onClick={this.logout}/>)
           }

       }


        return (
          <SectionsContainer {...options}>
          <Section className="page">

          <Pitch />
          </Section>
          <Section className="page">

          <Actualites />
          </Section>

          <Section className="page-2">
          <Profile/>
          </Section>
          <Section>

            <FormReact />
            </Section>
          </SectionsContainer>
        );
      }
    }


    const SlideReact = withTracker( ()=>{
     console.log(Userstore.loggedin.get())
     return {
       loggedin: Userstore.loggedin.get(),
     }

   })(Slide);

     export default SlideReact
