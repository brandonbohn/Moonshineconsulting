import React from 'react';
import BlogComponent from '../components/blogcomponentengine.tsx';
function SeniorLivingDesk() {
  return (
    <section>
      
      
      <div className="text-white" style={{  background: "#ffffff", borderRadius: "8px", marginTop: "150px", }}>
       <div className=" text-white" style={{  width: "100vw", backgroundColor: "#08023a", borderRadius: "10px", height: "50vh",  }}>
     
        <h1 className=" text-center" style={{ padding: "20px", color: "#ffffff" }}>
          <strong>Welcome to the Senior Living Desk,</strong> </h1>
          <h2>where we provide resources and support for seniors and their families.</h2>
      </div>
       <h2 className="text-center">Featured Articles</h2>
        <ul>
          <BlogComponent id={4} /> 
        </ul>
      </div>

    
    </section>
  );
};




export default SeniorLivingDesk;