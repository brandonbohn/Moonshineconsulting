import React from 'react';
import BlogComponent from '../components/blogcomponentengine.tsx';
function RehabSolutions() {
  return (
        <div style={{ fontFamily: "sans-serif", background: "#b8860b", minHeight: "100vh" }}>
            <header style={{ background: "#2d5a2d", padding: "30px", textAlign: "center" }}>
                <h1 style={{ margin:"30px", padding:"20px", fontSize: "2.5rem", color: "#ffffff" }}>Health and Wellness</h1>
                <p style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                    Your central location for the information you need to stay healthy.
                </p>
            
            </header>
            <main style={{ maxWidth:"auto", margin: "20px", padding: "20px"  }}>
                <section>
                  
                     <div>
                    <BlogComponent id={4} />
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