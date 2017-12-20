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

  <div className="text"><div className="trait-fin"></div><h2 className="Entete">At</h2><p>vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque <p className="Entete-2">corrupti</p> quos dolores et quas molestiasexcepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem<p className="Entete-2">facilis</p> rerum  est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella</p></div>
  <Button onClick={this.Sendmail.bind(this)} />
  </div>
)
}
}
