import React from 'react';
import '../css/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return(

<section>

     
<div className="  text-white py-3 HeaderandFooter">

<nav className="navbar navbar-expand-lg text-white" style={{ backgroundColor: "#08023a", padding: "0" }}>
  <div className="container-fluid d-flex justify-content-between align-items-center px-0" style={{ height: "100%" }}>
    {/* Logo with proportional spacing */}
    <div className="logo-container" style={{ 
      height: "100%", 
      display: "flex", 
      alignItems: "center",
      padding: "20px"
    }}>
      <img
        src="/images/logo.PNG"
        className="logo-stretched"
        alt="Moonshine Consulting Logo"
        style={{
          height: "120px",
          width: "auto",
          objectFit: "contain",
          display: "block"
        }}
      />
    </div>
    {/* Navbar items aligned right with padding */}
    <ul className="navbar-nav ms-auto" style={{ paddingRight: "15px", margin: "0" }}>
      <li className="nav-item">
        <a className="nav-link active" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/mainblog">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/registration">Contact</a>
      </li>
        <li className="nav-item">
        <a className="nav-link" href="/biopage">Who We Are</a>
      </li>
    </ul>
  </div>
</nav>

<div/>




        </div>

</section>

 


    )
}
export default Header













