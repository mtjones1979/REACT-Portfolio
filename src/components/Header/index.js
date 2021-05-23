import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header () {
  return (
    <nav className="navbar  navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        <h3 className="text-white">Michael Thomas Jones</h3>
      </Link>
    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false">
      <span className="navbar-toggler-icon"></span>
    </button> */}

  <div className="collapse navbar-collapse justify-content-end" id="navbar">
    <ul className="navbar-nav">
     
        <Link to="/"
          className={window.location.pathname === "/" || window.location.pathname === "/about"
          ? "nav-link active" : "nav-link"}>
          <h4 className="text-white">About</h4>
        </Link>
 
   
        <Link to="/portfolio" 
          className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
          <h4 className="text-white">Portfolio</h4>
        </Link>

 
        <Link to="/contact" 
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          <h4 className="text-white">Contact</h4>
        </Link>

    </ul>
  </div>  
</nav>
    )
}
    export default Header