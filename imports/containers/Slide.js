import React, { Component } from 'react';
import { Button, Grid, Card, Image, Icon} from 'semantic-ui-react'
import {SectionsContainer, Section} from 'react-fullpage';
import {withTracker} from 'meteor/react-meteor-data';

import Userstore from '../store/store.js'

import Actualites from '../components/Actualites.js';

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
         anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
         scrollBar:            false,
         navigation:           false,
         verticalAlign:        false,
         sectionPaddingTop:    '0px',
         sectionPaddingBottom: '0px',
         arrowNavigation:      false
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
          <Section className="page">{LogoutButton()}
          <div className="section-title"><h1>News!</h1></div>
          <Actualites />
          </Section>
          <Section >Page 2</Section>
          <Section>Page 3</Section>
          vcc</SectionsContainer>
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
