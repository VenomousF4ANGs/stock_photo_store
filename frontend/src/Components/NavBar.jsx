import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="70"
              height="20"
              alt="Logo"
            />
          </div>
        </div>

        <div id="NavBar" className="navbar-menu is-active">
          <div className="navbar-start">
            
            <div className="navbar-item"><Link style={{ textDecoration: 'none' , color:"black" }} to="/search">Search</Link></div>
            <div className="navbar-item"><Link style={{ textDecoration: 'none' , color:"black" }} to="/upload">Upload</Link></div>
            <div className="navbar-item"><Link style={{ textDecoration: 'none' , color:"black" }} to="/about">About</Link></div>
            
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
