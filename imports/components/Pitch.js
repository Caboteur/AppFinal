import React, { Component } from 'react';
import { Button, Divider, Form } from 'semantic-ui-react'

import Menu from '../components/Menu.js';

import styles from '../style/Pitch.css';

export default class Pitch extends Component {

Sendmail() { Meteor.call(
    'sendEmail',
    'Alice <alice@example.com>',
    'bob@example.com',
    'Hello from Meteor!',
    'This is a test of Email.send.'
  );
}

render () {

  return (
  <div className="pitch-div">

  <div className="text"><div className="trait-fin"></div><h2 className="Entete">Simon </h2><p>est un acteur qui est lassé des rôles peu valorisants qu’il décroche. Il ne réussit pas mieux sa vie sentimentale. Pour une question de passeport, il rate l’opportunité de relancer son couple en Thaïlande.
Il végète seul à Paris. Son ami Albert lui propose de venir séjourner dans une auberge de jeunesse dans le sud de la France. A son arrivée, les conditions ne sont pas celles auxquelles il s’attendait… Pourra-t-il s’adapter à un mode de vie si nouveau pour lui ?</p></div>
  <Button onClick={this.Sendmail.bind(this)} />
  </div>
)
}
}
