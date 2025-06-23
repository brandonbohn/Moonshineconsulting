import React from 'react';
import BlogComponent from '../components/blogcomponentengine.tsx';
function RehabSolutions() {
  return (
        <div style={{ fontFamily: "sans-serif", background: "#f0f8f5", minHeight: "100vh" }}>
            <header style={{ background: "#006a70", padding: "30px", textAlign: "center" }}>
                <h1 style={{ margin:"30px", padding:"20px", fontSize: "2.5rem", color: "#ffffff" }}>Health and Wellness</h1>
                <p style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                    Your central location for the information you need to stay healthy.
                </p>
            
            </header>
            <main style={{ maxWidth:"auto", margin: "20px", padding: "20px"  }}>
                <section>
                  
                     <div>
                    <BlogComponent id={2} />
                </div>
                </section>
            </main> 
            <footer style={{ textAlign: "center", padding: "1rem 0", color: "#b08968" }}>
                © {new Date().getFullYear()} Moonshine's Corner
            </footer>
        </div>
    );
};

export default RehabSolutions;