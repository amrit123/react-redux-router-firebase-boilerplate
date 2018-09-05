import React from 'react'
import { Link } from "react-router-dom";
import { startLogout } from "../actions/authentication"
import { connect } from "react-redux";


export const Header = ({ startLogout }) => (
  <header className="header">
      <div className="content-container">
      <div className="header-content">
      <Link className="header__title" to="/dashboard"><h1>Boilerplate</h1></Link>
      <button className="button button__link" onClick={startLogout}>Logout</button>
      


      </div>
          

          </div>
    
  </header>
)


const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

//