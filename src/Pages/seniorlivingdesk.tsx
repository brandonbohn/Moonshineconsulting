import React from 'react';
import BlogComponent from '../components/blogcomponentengine.tsx';



function SeniorLivingDesk() {
  return (
    <section className="senior-living-desk">
      <style>{`
        .senior-living-desk {
          margin-top: 150px;
        }
        
        .welcome-section {
          width: 100vw;
          background-color: #08023a;
          border-radius: 10px;
          height: 50vh;
          padding: 20px;
        }
        
        .welcome-title {
          text-align: center;
          color: #ffffff;
          font-size: 28px;
          font-family: "Open Sans, sans-serif";
        }
        
        .welcome-subtitle {
          font-size: 18px;
          font-family: "Open Sans, sans-serif";
          color: #ffffff;
          padding: 0 20px;
        }
        
        .featured-section {
          background: #ffffff;
          border-radius: 8px;
          padding: 20px;
        }
        
        .featured-title {
          text-align: center;
          font-size: 28px;
          font-family: "Open Sans, sans-serif";
        }
        
        /* Extra Large Screens (1400px and up) - For Multiple Monitor Setups */
        @media (min-width: 1400px) {
          .senior-living-desk {
            margin-top: 180px;
          }
          
          .welcome-section {
            height: 55vh;
            padding: 30px;
          }
          
          .welcome-title {
            font-size: 42px !important;
          }
          
          .welcome-subtitle {
            font-size: 22px !important;
            padding: 0 30px !important;
          }
          
          .featured-title {
            font-size: 36px !important;
          }
          
          .featured-section {
            padding: 30px;
          }
        }
        
        /* Ultra Wide Screens (1600px and up) - For Ultrawide Monitors */
        @media (min-width: 1600px) {
          .senior-living-desk {
            margin-top: 200px;
          }
          
          .welcome-section {
            height: 60vh;
            padding: 40px;
          }
          
          .welcome-title {
            font-size: 48px !important;
          }
          
          .welcome-subtitle {
            font-size: 24px !important;
            padding: 0 40px !important;
          }
          
          .featured-title {
            font-size: 42px !important;
          }
          
          .featured-section {
            padding: 40px;
          }
        }
        
        /* Super Ultra Wide (1920px and up) - For 4K and Multiple Monitor Dev Setups */
        @media (min-width: 1920px) {
          .senior-living-desk {
            margin-top: 220px;
          }
          
          .welcome-section {
            height: 65vh;
            padding: 50px;
          }
          
          .welcome-title {
            font-size: 56px !important;
          }
          
          .welcome-subtitle {
            font-size: 26px !important;
            padding: 0 50px !important;
          }
          
          .featured-title {
            font-size: 48px !important;
          }
          
          .featured-section {
            padding: 50px;
          }
        }
      `}</style>
      
      <div className="text-white featured-section">
        <div className="welcome-section">
          <h1 className="welcome-title" style={{ padding: "20px" }}>
            <strong>Welcome to the Senior Living Desk,</strong>
          </h1>
          <h2 className="welcome-subtitle">where we provide resources and support for seniors and their families.</h2>
        </div>
        <h2 className="featured-title">Featured Articles</h2>
        <ul>
          <BlogComponent id={4} /> 
        </ul>
      </div>
    </section>
  );
};





export default SeniorLivingDesk;