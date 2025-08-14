import React from "react";
import BlogComponent from "../components/blogcomponentengine.tsx";

function MoonshinesCorner() {
    return (
        <div className="moonshines-corner" style={{ fontFamily: "sans-serif", background: "#C9A17D", minHeight: "100vh" }}>
            <style>{`
                .moonshines-header {
                    background: #7B3F00;
                    padding: 30px;
                    text-align: center;
                }
                
                .moonshines-title {
                    margin: 30px;
                    padding: 20px;
                    font-size: 28px;
                    color: #ffffff;
                    font-family: "Open Sans, sans-serif";
                }
                
                .moonshines-subtitle {
                    font-size: 18px;
                    color: #ffffff;
                    font-family: "Open Sans, sans-serif";
                }
                
                .moonshines-main {
                    max-width: auto;
                    margin: 20px;
                    padding: 20px;
                }
                
                .interviews-title {
                    color: #ffffff;
                    font-size: 28px;
                    font-family: "Open Sans, sans-serif";
                }
                
                .moonshines-footer {
                    text-align: center;
                    padding: 1rem 0;
                    color: #b08968;
                }
                
                /* Extra Large Screens (1400px and up) - For Multiple Monitor Setups */
                @media (min-width: 1400px) {
                    .moonshines-header {
                        padding: 40px;
                    }
                    
                    .moonshines-title {
                        font-size: 42px !important;
                        margin: 40px;
                        padding: 30px;
                    }
                    
                    .moonshines-subtitle {
                        font-size: 22px !important;
                    }
                    
                    .moonshines-main {
                        margin: 30px;
                        padding: 30px;
                    }
                    
                    .interviews-title {
                        font-size: 36px !important;
                    }
                    
                    .moonshines-footer {
                        font-size: 18px !important;
                        padding: 2rem 0;
                    }
                }
                
                /* Ultra Wide Screens (1600px and up) - For Ultrawide Monitors */
                @media (min-width: 1600px) {
                    .moonshines-header {
                        padding: 50px;
                    }
                    
                    .moonshines-title {
                        font-size: 48px !important;
                        margin: 50px;
                        padding: 40px;
                    }
                    
                    .moonshines-subtitle {
                        font-size: 24px !important;
                    }
                    
                    .moonshines-main {
                        margin: 40px;
                        padding: 40px;
                    }
                    
                    .interviews-title {
                        font-size: 42px !important;
                    }
                    
                    .moonshines-footer {
                        font-size: 20px !important;
                        padding: 2.5rem 0;
                    }
                }
                
                /* Super Ultra Wide (1920px and up) - For 4K and Multiple Monitor Dev Setups */
                @media (min-width: 1920px) {
                    .moonshines-header {
                        padding: 60px;
                    }
                    
                    .moonshines-title {
                        font-size: 56px !important;
                        margin: 60px;
                        padding: 50px;
                    }
                    
                    .moonshines-subtitle {
                        font-size: 26px !important;
                    }
                    
                    .moonshines-main {
                        margin: 50px;
                        padding: 50px;
                    }
                    
                    .interviews-title {
                        font-size: 48px !important;
                    }
                    
                    .moonshines-footer {
                        font-size: 22px !important;
                        padding: 3rem 0;
                    }
                }
            `}</style>
            
            <header className="moonshines-header">
                <h1 className="moonshines-title">Moonshine's Corner</h1>
                <p className="moonshines-subtitle">
                    A blog where Moonshine the dog interviews therapy dogs about their amazing work!
                </p>
            </header>
            
            <main className="moonshines-main">
                <section>
                    <h2 className="interviews-title">Latest Interviews</h2>
                    <div className="col 100">
                        <BlogComponent id={1} />
                    </div>
                </section>
            </main> 
            
            <footer className="moonshines-footer">
                © {new Date().getFullYear()} Moonshine's Corner
            </footer>
        </div>
    );
};

export default MoonshinesCorner;