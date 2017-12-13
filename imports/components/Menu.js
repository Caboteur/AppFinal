import React, { Component } from 'react';
import styles from '../style/Menu.css';

export default class Menu extends Component {



render () {

return (

  <div className="wrapper">

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li> <a href="#">About</a></li>
        <li> <a href="#">Get in Touch</a></li>
      </ul>
    </nav>

  </div>

)


}
}
