import React from 'react';
import '../css/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return(

<section>

     
<div className="  text-white py-3 HeaderandFooter">

<nav className="navbar navbar-expand-lg text-white " style={{ backgroundColor: "#08023a" }}>
  <div className="container-fluid d-flex justify-content-between align-items-start px-0">
    {/* Logo fully left and top with 20px bottom margin */}
    <div style={{ marginRight: "24px", alignSelf: "flex-start" }}>
      <img
        src="/images/logo.PNG"
        className=" logo"
        alt="mom3"
        width="150px"
        height="150px"
     
      />
    </div>
    {/* Navbar items aligned right */}
    <ul className="navbar-nav ms-auto">
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













