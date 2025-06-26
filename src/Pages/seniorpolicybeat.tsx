import React from "react";
import BlogComponent from "../components/blogcomponentengine.tsx";

function SeniorPolicyBeat() {
  return (
    <section>
      <div className="header  text-white" style={{ textAlign: "center",  background: "#b8860b", padding: "50px", borderRadius: "8px",  marginTop: "100px", }}>
        <h1>Senior Policy Beat</h1>
        <h1 className="Titles" style={{ textAlign: "center", padding: "20px", background: "#000000", margin: "15px", borderRadius: "8px" }}>
          <strong>Welcome to the Senior Policy Beat,</strong> where we break down the most important issues affecting older adults and their care. Whether you’re navigating Medicare, helping a loved one age at home, or just trying to understand how today’s health policies impact real people — you’re in the right place.
        </h1>
      </div>
      
      <div className="text-white" style={{  background: "#000000", padding: "50px", borderRadius: "8px", marginBottom: "150px", }}>
        <h2>Featured Articles</h2>
        <ul>
          <BlogComponent id={2} /> 
        </ul>
      </div>

    
    </section>
  );
};

export default SeniorPolicyBeat;