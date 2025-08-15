import React from "react";
import BlogComponent from "../components/blogcomponentengine.tsx";

function SeniorPolicyBeat() {
  return (
    <div className='container-fluid' style={{ fontFamily: "Open Sans, sans-serif" }}>
      <div className="hero-section" style={{ padding: "2px 10px" }}>
        <section className="senior-policy-beat">
      <style>{`
        /* Extra Large Screens (1400px and up) - For Multiple Monitor Setups */
        @media (min-width: 1400px) {
          .senior-policy-beat {
            margin-top: 180px;
          }
          
          .senior-policy-beat .text-center h1 {
            font-size: 48px !important;
          }
          
          .senior-policy-beat h2 {
            font-size: 24px !important;
            line-height: 1.6 !important;
          }
          
          .senior-policy-beat .text-center:last-of-type h2 {
            font-size: 36px !important;
          }
        }
        
        /* Ultra Wide Screens (1600px and up) - For Ultrawide Monitors */
        @media (min-width: 1600px) {
          .senior-policy-beat {
            margin-top: 200px;
          }
          
          .senior-policy-beat .text-center h1 {
            font-size: 56px !important;
          }
          
          .senior-policy-beat h2 {
            font-size: 26px !important;
            line-height: 1.7 !important;
          }
          
          .senior-policy-beat .text-center:last-of-type h2 {
            font-size: 42px !important;
          }
        }
        
        /* Super Ultra Wide (1920px and up) - For 4K and Multiple Monitor Dev Setups */
        @media (min-width: 1920px) {
          .senior-policy-beat {
            margin-top: 220px;
          }
          
          .senior-policy-beat .text-center h1 {
            font-size: 64px !important;
          }
          
          .senior-policy-beat h2 {
            font-size: 28px !important;
            line-height: 1.8 !important;
          }
          
          .senior-policy-beat .text-center:last-of-type h2 {
            font-size: 48px !important;
          }
        }
      `}</style>
      
      
      <div className="text-white" style={{  background: "#ffffff", borderRadius: "8px", marginTop: "150px", }}>
       <div className=" text-white" style={{  width: "100vw", backgroundColor: "#08023a", borderRadius: "10px", height: "50vh",  }}>
     
        <h1 className=" text-center" style={{ padding: "20px", color: "#ffffff" }}>
          <strong>Welcome to the Senior Policy Beat,</strong> </h1>
          <h2>where we break down the most important issues affecting older adults and their care. Whether you’re navigating Medicare, helping a loved one age at home, or just trying to understand how today’s health policies impact real people you’re in the right place.</h2>
      </div>
       <h2 className="text-center">Featured Articles</h2>
        <ul>
          <BlogComponent id={2} /> 
        </ul>
      </div>

        </section>
      </div>
    </div>
  );
};

export default SeniorPolicyBeat;