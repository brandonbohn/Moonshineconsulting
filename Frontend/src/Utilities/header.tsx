import React from 'react';
import '../css/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useWebsiteContent } from '../data/websiteContent';

function Header(){
  const websiteContent = useWebsiteContent();
  const navigation = websiteContent.navigation;

    return(

<section>
     {/* Skip Navigation Links for Seniors */}
     <div className="skip-links" style={{
       position: "absolute",
       top: "-100px",
       left: "0",
       width: "100%",
       zIndex: "9999",
       backgroundColor: "#08023a",
       padding: "10px",
       textAlign: "center"
     }}>
       <style>{`
         .skip-links a {
           color: #ffffff !important;
           background-color: #08023a !important;
           padding: 8px 16px !important;
           margin: 0 5px !important;
           text-decoration: none !important;
           border-radius: 4px !important;
           font-size: 18px !important;
           font-weight: bold !important;
           border: 2px solid #ffffff !important;
         }
         
         .skip-links a:focus {
           position: relative !important;
           top: 110px !important;
           display: inline-block !important;
           background-color: #ffffff !important;
           color: #08023a !important;
           outline: 3px solid #08023a !important;
         }
         
         .skip-links a:hover {
           background-color: #ffffff !important;
           color: #08023a !important;
         }
         
         /* Extra Large Screens - Skip Links */
         @media (min-width: 1400px) {
           .skip-links a {
             font-size: 20px !important;
             padding: 10px 20px !important;
           }
         }
         
         @media (min-width: 1600px) {
           .skip-links a {
             font-size: 22px !important;
             padding: 12px 24px !important;
           }
         }
         
         @media (min-width: 1920px) {
           .skip-links a {
             font-size: 24px !important;
             padding: 14px 28px !important;
           }
         }
       `}</style>
  <a href="#main-content" className="visually-hidden-focusable" aria-label="Skip to main content" tabIndex={0} style={{position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden'}}>Skip to Main Content</a>
  <a href="#breaking-news" className="visually-hidden-focusable" aria-label="Skip to breaking news" tabIndex={0} style={{position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden'}}>Skip to Breaking News</a>
  <a href="#senior-living" className="visually-hidden-focusable" aria-label="Skip to senior living" tabIndex={0} style={{position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden'}}>Skip to Senior Living</a>
  <a href="#contributors" className="visually-hidden-focusable" aria-label="Skip to contributors" tabIndex={0} style={{position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden'}}>Skip to Contributors</a>
  <a href="#tools-we-love" className="visually-hidden-focusable" aria-label="Skip to products" tabIndex={0} style={{position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden'}}>Skip to Products</a>
     </div>

     
<div className="  text-white py-3 HeaderandFooter">

<nav className="navbar navbar-expand-lg text-white" style={{ backgroundColor: "#08023a", padding: "0" }}>
  <div className="container-fluid d-flex justify-content-between align-items-center px-0" style={{ height: "auto" }}>
    {/* Logo with proportional spacing */}
    <div className="logo-container" style={{ 
      height: "100%", 
      display: "flex", 
      alignItems: "center",
      padding: "10px"
    }}>
      <img
        src="/images/logo.PNG"
        className="logo-stretched"
        alt={navigation.logoAlt}
        style={{
          height: "100px",
          width: "auto",
          objectFit: "contain",
          display: "block"
        }}
      />
    </div>
    {/* Navbar items aligned right with padding */}
    <ul className="navbar-nav ms-auto" style={{ paddingRight: "15px", margin: "0" }}>
      {navigation.links.map((link, index) => (
        <li className="nav-item" key={link.href}>
          <a className={`nav-link${index === 0 ? ' active' : ''}`} href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
</nav>

<div/>




        </div>

</section>

 


    )
}
export default Header













