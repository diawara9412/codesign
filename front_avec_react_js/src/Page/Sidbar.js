import React from 'react';
import './Sidbar.css'
import { Link } from 'react-router-dom';

function Sidbar(){
  let loginData;

 
    return (
     <div className="left-sidebar-pro">
  <nav id="sidebar" className>
    <div className="sidebar-header">
      <a><img className="main"  src="assets/img/logo/to_do.png"   alt /></a>
      <strong><img src="img/logo/logosn.png" alt /></strong>
    </div>
    <div className="nalika-profile">
      <div className="profile-dtl">
        <a href="#"><img src="assets/img/logo/mon1.png" alt /></a>
        <h2> Ibrahim <span className="min-dtn"> DIAWARA </span></h2>
      </div>
      
    </div>
   
  </nav>
</div>


    );
};

export default Sidbar;