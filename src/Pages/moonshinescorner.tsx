import React from "react";
import BlogComponent from "../components/blogcomponentengine.tsx";

function MoonshinesCorner() {

   
    return (
        <div style={{ fontFamily: "sans-serif", background: "#C9A17D", minHeight: "100vh" }}>
            <header style={{ background: "#7B3F00", padding: "30px", textAlign: "center" }}>
                <h1 style={{ margin:"30px", padding:"20px", fontSize: "2.5rem", color: "#ffffff" }}>Moonshine's Corner</h1>
                <p style={{ fontSize: "1.25rem", color: "#ffffff" }}>
                    A blog where Moonshine the dog interviews therapy dogs about their amazing work!
                </p>
            
            </header>
            <main style={{ maxWidth:"auto", margin: "20px", padding: "20px"  }}>
                <section>
                    <h2 style={{ color: "#ffffff" }}>Latest Interviews</h2>
                     <div className="col 100">
                    <BlogComponent id={1} />
                </div>
                </section>
            </main> 
            <footer style={{ textAlign: "center", padding: "1rem 0", color: "#b08968" }}>
                © {new Date().getFullYear()} Moonshine's Corner
            </footer>
        </div>
    );
};

export default MoonshinesCorner;