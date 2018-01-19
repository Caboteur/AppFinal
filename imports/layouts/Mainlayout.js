import React from 'react';


import Menu from '../components/Menu.js';





 const Mainlayout = ({ content }) => (

     <div className="main-layout">
      <Menu />

      {content}

     </div>

 );

export default Mainlayout;
