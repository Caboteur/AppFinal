import React, {Component} from 'react';
import {Form, Segment,Select, Checkbox, Radio} from 'semantic-ui-react';

import styles from '../style/Sidebar.css';

export default class Sidebar extends Component {


  render(){



    return(
      <div className="sidebar">
       <div className="border"></div>
       <img className="side-img" src="/image/lg-def.svg"/>
       <p>Défi 66 : L’association Défi 66, basée à Canet-en-Roussillon, dans les Pyrénées-Orientales, a pour objet la mise en commun, à titre gracieux, des compétences de ses membres de toutes origines afin de partager l’aventure de la création et de la réalisation collective d’œuvres cinématographiques. Il y aura un peu de texte en plus que je te communiquerai dans quelques jours</p>
      <img className="side-img-2" src="/image/hublot.svg"/>
      </div>
    );
  }
}
