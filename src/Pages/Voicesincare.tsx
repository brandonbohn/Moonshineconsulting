import React from 'react';
import BlogComponent from '../components/blogcomponentengine.tsx';
function Voicesincare() {
  return (
        <div style={{ fontFamily: "sans-serif", background: "#ffffff", minHeight: "100vh" }}>
            <header style={{ background: "#08023a", padding: "30px", textAlign: "center", marginTop: "50px", borderRadius: "10px" }}>
                <h1 style={{ margin:"30px", padding:"20px", fontSize: "28px", color: "#ffffff", fontFamily: "Open Sans, sans-serif" }}>Voices In Care</h1>
                <p style={{ fontSize: "18px", color: "#ffffff", fontFamily: "Open Sans, sans-serif" }}>
                   A place where caregivers and professionals can share their insights, stories, and struggles from the field.
                </p>
            
            </header>
            <main style={{ maxWidth:"auto", margin: "20px", padding: "20px"  }}>
                <section>
                  
                     <div>
                    <BlogComponent id={3} />
                </div>
                <div style={{ marginTop: "20px" }}>
                    <BlogComponent id={5} />
                </div>
                </section>
            </main> 
            <footer style={{ textAlign: "center", padding: "1rem 0", color: "#b08968" }}>
                © {new Date().getFullYear()} Voices In Care. All rights reserved.
            </footer>
        </div>
    );
};

export default Voicesincare;