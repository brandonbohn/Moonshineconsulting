import React from 'react';
import '../homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return(

<section>

     
<div className="Header bg-light  text-white">

<nav className="navbar navbar-expand-lg  text-white  "> 

<div className="container-fluid d-flex justify-content-between align-items-center">
                        {/* Logo aligned left */}
                        <img
                            src="./images/logo.png"
                            className="img-fluid logo"
                            alt="mom3"
                            width="150px"
                            height="150px"
                        />
                        {/* Navbar items aligned right */}
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/blog">blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/registration">contact</a>
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













