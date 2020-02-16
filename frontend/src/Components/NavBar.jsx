import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <img
                src="/resources/icon.png"
                width="30"
                height="30"
                alt="Logo"
              />
            </Link>
          </div>
        </div>

        <div id="NavBar" className="navbar-menu is-active">
          <div className="navbar-start">
            
            <div className="navbar-item"><Link style={{ textDecoration: 'none' , color:"grey" }} to="/search">Search</Link></div>
            <div className="navbar-item"><Link style={{ textDecoration: 'none' , color:"grey" }} to="/upload">Upload</Link></div>
            <div className="navbar-item"><Link style={{ textDecoration: 'none' , color:"grey" }} to="/about">About</Link></div>
            
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
