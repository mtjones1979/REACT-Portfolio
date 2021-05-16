import React from "react";
// import "./style.css";

function Header () {
    return (
     
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark px-3" style="background-color: black">
  <a class="navbar-brand" href="/">Michael Thomas Jones</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false">
      <span class="navbar-toggler-icon"></span>
    </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="index.html">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="portfolio.html">Portfolio</a>
      </li>
        <li class="nav-item">
        <a class="nav-link active" href="contact.html">Contact</a>
      </li>
    </ul>
  </div>  
</nav>
    )
}
    export default Header