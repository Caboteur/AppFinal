import React, { Component } from 'react';
import styles from '../style/Menu.css';

export default class Menu extends Component {



render () {

return (

  <div id="menuArea">
    <input type="checkbox" id="menuToggle"></input>

  <label htmlFor="menuToggle" className="menuOpen">
    <div className="open"></div>
  </label>

  <div className="menu menuEffects">
    <label htmlFor="menuToggle"></label>
    <div className="menuContent">
      <ul>
        <li><a href="#">MENU 1</a></li>
        <li><a href="#">MENU 2</a></li>
        <li><a href="#">MENU 3</a></li>
        <li><a href="#">MENU 4</a></li>
      </ul>
    </div>
  </div>
  </div>

)


}
}
