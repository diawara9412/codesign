import React from 'react';
import './Header.css';
import { useParams,useNavigate } from 'react-router-dom';


function Header(){
  const navigate = useNavigate();
  let loginData;

  if(localStorage["isLogin"]){
    loginData=JSON.parse(localStorage["isLogin"]);
    
  }
  function logOut(){
    localStorage.removeItem('isLogin');
    navigate("/");
    console.log("bien")
}
    return (
      <div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="logo-pro">
          <a href="index.html"><img className="main-logo" src="img/logo/todo-list.jpg" alt /></a>
        </div>
      </div>
    </div>
  </div>
  <div className="header-advance-area">
    <div className="header-top-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="header-top-wraper">
              <div className="row">
                <div className="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                  <div className="menu-switcher-pro">
                    <button type="button" id="sidebarCollapse" className="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn">
                      <i className="icon nalika-menu-task" />
                    </button>
                  </div>
                </div>
             
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                  <div className="header-right-info">
                    <ul className="nav navbar-nav mai-top-nav header-right-menu">
                      <li className="nav-item dropdown">
                       
                      </li>
                     
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Mobile Menu start */}
    
    {/* Mobile Menu end */}
   
     
  </div>
</div>

    );
};

export default Header;