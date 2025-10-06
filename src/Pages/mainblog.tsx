import BlogComponent from "../components/blogcomponentengine.tsx";
import ContributorsComponent from "../components/contributorscomponent.tsx";
import '../css/mainblog.css';
import '../css/mainblog.css';
import { useState, useEffect } from "react";

function MainBlog() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);



    return (
  <div className='container-fluid Mainbox' style={{ fontFamily: "Georgia, serif", fontSize: "21px" }}>
    <style>{`
      .mainblog-title, .boxtwo h1 {
        font-size: 27px !important;
        font-family: 'Open Sans, Arial, sans-serif' !important;
      }
      .mainblog-body, .boxtwo p, .welcome-box, .featured-story, .main-sections-grid {
        font-size: 21px !important;
        font-family: 'Georgia, serif' !important;
      }
      @media (max-width: 768px) {
        #contributors {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        .welcome-box {
          padding: 10px !important;
          width: 100% !important;
          margin: 0 !important;
        }
        .main-sections-grid {
          gap: 20px !important;
        }
        .section-header, .boxtwo {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .mainblog-title, .boxtwo h1, .section-header h3, #contributors h4 {
          font-size: 27px !important;
          font-family: 'Open Sans, Arial, sans-serif' !important;
        }
      }
    `}</style>
        <div className="hero-section" style={{ padding: "2px 10px" }}>
          {/* Newspaper Layout: Blue Header above unified white background */}
          <div className="boxtwo text-center" style={{
            padding: "8px",
            backgroundColor: "#08023a",
            borderRadius: "8px 8px 0 0",
            width: "100%",
            height: "auto",
            marginBottom: "0",
            marginTop: "0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
          }}>
            <h1 style={{
              fontSize: "54px",
              fontFamily: "Open Sans, Arial, sans-serif",
              fontWeight: "bold",
              letterSpacing: "2px",
              margin: "18px 0 0 0",
              textTransform: "uppercase",
              textAlign: "center"
            }} className="text-white">
              The Care Professional Chronicle
            </h1>
            <div style={{ borderTop: "2px solid #08023a", width: "40%", margin: "5px auto" }}></div>
            <p className="text-white" style={{ fontSize: "21px", fontFamily: "Georgia, serif", fontStyle: "italic", margin: "2px 0" }}>
              Your Trusted Source for Senior Care and Advocacy
            </p>
            <p className="text-white" style={{ fontSize: "21px", fontFamily: "Georgia, serif", margin: "2px 0" }}>
              {new Date().toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long"
              })} • Volume 1 • Issue 1
            </p>
          </div>
          {/* Main white background box behind all content */}
          <div className="mainbox">
            {/* Featured Story Section - Policy/Medicare News */}
            <div id="breaking-news" style={{ marginBottom: "15px", marginTop: "0" }}>
              <div style={{ 
                borderBottom: "2px solid #08023a", 
                marginBottom: "8px",
                paddingBottom: "3px"
              }}>
                <h2 style={{ 
                  fontSize: "24px", 
                  fontFamily: "Georgia, serif", 
                  color: "#08023a",
                  margin: "0",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>Breaking: Medicare & Policy News</h2>
              </div>
              <div style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "20px",
                padding: "4px",
                backgroundColor: "#f8f9fa",
                borderRadius: "6px",
                border: "2px solid #08023a"
              }}>
                <div style={{ flex: isMobile ? "none" : "1", width: "100%" }}>
                  <BlogComponent id={2} />
                </div>
              </div>
            </div>

            {/* Main Sections */}
            <div className="main-sections-grid" style={{ 
              display: "grid", 
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
              gap: "40px",
              marginBottom: "40px"
            }}>
            
            {/* Lifestyle Section */}
            <div id="senior-living">
              <div className="section-header" style={{ 
                borderBottom: "2px solid #08023a", 
                marginBottom: "20px",
                paddingBottom: "8px",
                background: "none",
                borderRadius: "0"
              }}>
                <h3 style={{ 
                  fontSize: "24px", 
                  fontFamily: "Georgia, serif", 
                  color: "#08023a",
                  margin: "0 0 8px 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  background: "none",
                  padding: "0",
                  borderRadius: "0",
                  boxShadow: "none",
                  textAlign: "left"
                }}>Senior Living Desk</h3>
              </div>
              <div style={{ 
                padding: "10px", 
                backgroundColor: "#ffffff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                minHeight: "120px",
                height: "auto",
                marginBottom: "16px"
              }}>
                <BlogComponent id={4} />
              </div>
              {/* Contributors Section */}
              <div id="contributors">
                <div style={{ 
                  borderBottom: "2px solid #08023a", 
                  marginBottom: "15px",
                  paddingBottom: "5px"
                }}>
                  <h4 style={{ 
                    fontSize: "21px", 
                    fontFamily: "Open Sans, Arial, sans-serif", 
                    color: "#08023a",
                    margin: "0",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>Guest Contributors</h4>
                  <p style={{ 
                    fontSize: "21px", 
                    fontFamily: "Georgia, serif", 
                    color: "#666",
                    margin: "3px 0 0 0",
                    fontStyle: "italic"
                  }}>Meet Our Expert Writers</p>
                </div>
                <ContributorsComponent id={1} />
              </div>
            </div>
            {/* Voices in Care Section */}
            <div id="opinions">
              <div className="section-header" style={{ 
                borderBottom: "2px solid #08023a",
                background: "none",
                marginBottom: "20px",
                paddingBottom: "8px",
                borderRadius: "0"
              }}>
                <h3 style={{ 
                  fontSize: "24px",
                  fontFamily: "Georgia, serif",
                  color: "#08023a",
                  margin: "0 0 8px 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  textAlign: "left"
                }}>Voices in Care</h3>
              </div>
              <div style={{ 
                padding: "10px", 
                backgroundColor: "#ffffff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                minHeight: "120px",
                height: "auto",
                marginBottom: "16px"
              }}>
                <BlogComponent id={3} />
              </div>
              <div style={{ 
                padding: "10px", 
                backgroundColor: "#ffffff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                minHeight: "120px",
                height: "auto",
                marginBottom: "16px"
              }}>
                <BlogComponent id={5} />
              </div>
            </div>
            {/* Entertainment Section - Moonshine's Corner */}
            <div style={{ marginBottom: "16px " }}>
              <div style={{ 
                marginBottom: "20px",
                paddingBottom: "8px",
                background: "none",
                borderRadius: "0"
              }}>
                <h3 style={{ 
                  fontSize: "24px", 
                  fontFamily: "Georgia, serif", 
                  color: "#08023a",
                  margin: "0",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  textAlign: "left"
                }}>Entertainment</h3>
                <div style={{ borderTop: "2px solid #08023a", width: "200%", margin: "8px 0 0 0" }}></div>
              </div>
              <div className="entertainment-box" style={{
                padding: "10px",
                backgroundColor: "#fff9e6",
                border: "2px dashed #08023a",
                borderRadius: "8px",
                minHeight: "120px",
                height: "auto",
                marginBottom: "16px",
                width: "200%"
              }}>
                <BlogComponent id={1} />
              </div>
            </div>
          </div> {/* Close mainbox */}
        </div> {/* Close hero-section */}
      </div> {/* Close container-fluid */}
    </div>
  );
}
export default MainBlog;