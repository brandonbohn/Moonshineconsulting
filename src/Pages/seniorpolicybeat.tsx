import React from "react";
import BlogComponent from "../components/blogcomponentengine.tsx";

function SeniorPolicyBeat() {
  return (
    <section>
      
      
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
  );
};

export default SeniorPolicyBeat;