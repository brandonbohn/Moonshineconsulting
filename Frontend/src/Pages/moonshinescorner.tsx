import React from "react";
import BlogComponent from "../components/blogcomponentengine.tsx";

function MoonshinesCorner() {
    return (
    <div className='container-fluid' style={{ fontFamily: "Georgia, serif", fontSize: "21px" }}>
            <div className="hero-section" style={{ padding: "2px 10px" }}>
                <div className="moonshines-corner" style={{ fontFamily: "Georgia, serif", background: "#C9A17D", minHeight: "100vh", fontSize: "21px" }}>
            <style>{`
                .moonshines-header {
                    background: #7B3F00;
                    padding: 30px;
                    text-align: center;
                }
                .moonshines-title {
                    margin: 30px;
                    padding: 20px;
                    font-size: 27px;
                    color: #ffffff;
                    font-family: "Open Sans, Arial, sans-serif";
                }
                .moonshines-subtitle {
                    font-size: 21px;
                    color: #ffffff;
                    font-family: "Georgia, serif";
                }
                .moonshines-main {
                    max-width: auto;
                    margin: 20px;
                    padding: 20px;
                    font-size: 21px;
                    font-family: "Georgia, serif";
                }
                .interviews-title {
                    color: #ffffff;
                    font-size: 27px;
                    font-family: "Open Sans, Arial, sans-serif";
                }
                .moonshines-footer {
                    text-align: center;
                    padding: 1rem 0;
                    color: #b08968;
                    font-size: 21px;
                    font-family: "Georgia, serif";
                }
                @media (min-width: 1400px) {
                    .moonshines-header {
                        padding: 40px;
                    }
                    .moonshines-title {
                        font-size: 32px !important;
                        margin: 40px;
                        padding: 30px;
                    }
                    .moonshines-subtitle {
                        font-size: 24px !important;
                    }
                    .moonshines-main {
                        margin: 30px;
                        padding: 30px;
                        font-size: 24px;
                    }
                    .interviews-title {
                        font-size: 32px !important;
                    }
                    .moonshines-footer {
                        font-size: 24px !important;
                        padding: 2rem 0;
                    }
                }
                @media (min-width: 1600px) {
                    .moonshines-header {
                        padding: 50px;
                    }
                    .moonshines-title {
                        font-size: 36px !important;
                        margin: 50px;
                        padding: 40px;
                    }
                    .moonshines-subtitle {
                        font-size: 27px !important;
                    }
                    .moonshines-main {
                        margin: 40px;
                        padding: 40px;
                        font-size: 27px;
                    }
                    .interviews-title {
                        font-size: 36px !important;
                    }
                    .moonshines-footer {
                        font-size: 27px !important;
                        padding: 2.5rem 0;
                    }
                }
                @media (min-width: 1920px) {
                    .moonshines-header {
                        padding: 60px;
                    }
                    .moonshines-title {
                        font-size: 42px !important;
                        margin: 60px;
                        padding: 50px;
                    }
                    .moonshines-subtitle {
                        font-size: 32px !important;
                    }
                    .moonshines-main {
                        margin: 50px;
                        padding: 50px;
                        font-size: 32px;
                    }
                    .interviews-title {
                        font-size: 42px !important;
                    }
                    .moonshines-footer {
                        font-size: 32px !important;
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
            </div>
        </div>
    );
};

export default MoonshinesCorner;