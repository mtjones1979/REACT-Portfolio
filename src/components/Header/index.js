import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header () {
  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Michael Thomas Jones
      </Link>
    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false">
      <span className="navbar-toggler-icon"></span>
    </button> */}

  <div className="collapse navbar-collapse justify-content-end" id="navbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/"
          className={window.location.pathname === "/" || window.location.pathname === "/about"
          ? "nav-link active" : "nav-link"}>
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/portfolio" 
          className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
          Portfolio
        </Link>
      </li>
        <li className="nav-item">
        <Link to="/contact" 
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          Contact
        </Link>
      </li>
    </ul>
  </div>  
</nav>
    )
}
    export default Header