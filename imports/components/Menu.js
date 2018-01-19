import React, { Component } from 'react';
import styles from '../style/Menu.css';

export default class Menu extends Component {



render () {

return (

  <div className="MEnu">


<div className="outer-menu">
  <input className="checkbox-toggle" type="checkbox" />
  <div className="hamburger">
    <div></div>
  </div>
  <div className="menu">
    <div>
      <div>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>

)


}
}
