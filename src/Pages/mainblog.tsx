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
  <div className='container-fluid' style={{ fontFamily: "Georgia, serif", fontSize: "21px" }}>
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
          <div className="welcome-box" style={{ 
            backgroundColor: "none", 
            padding: "40px", 
            borderRadius: "0", 
            boxShadow: "none", 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            margin: "0 20px"
          }}>
          {/* Newspaper Header - Ultra Compact - No Top Margin */}
          <div className="boxtwo text-center" style={{  padding: "8px", backgroundColor: "#08023a", borderRadius: "0", width: "100%", height: "auto", marginBottom: "8px", marginTop: "-40px", marginLeft: "-40px", marginRight: "-40px" }}>
            <h1 style={{ fontSize: "27px", fontFamily: "Open Sans, Arial, sans-serif", letterSpacing: "0.5px", margin: "18px 0 0 0" }} className="text-white">
              The Care Professional Chronicle
            </h1>
            <div style={{ borderTop: "1px solid #ffffff", width: "40%", margin: "5px auto" }}></div>
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
                borderBottom: "3px solid #08023a", 
                marginBottom: "20px",
                paddingBottom: "8px",
                background: "none",
                borderRadius: "0"
              }}>
                <h3 style={{ 
                  fontSize: "2px", 
                  fontFamily: "Georgia, serif", 
                  color: "#08023a",
                  margin: "0 0 8px 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  background: "none",
                  padding: "0",
                  borderRadius: "0",
                  boxShadow: "none",
                  textAlign: "center"
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
                  textAlign: "center",
                  borderBottom: "3px solid #08023a",
                  paddingBottom: "6px"
                }}>Voices in Care</h3>
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
          </div>

          {/* Entertainment Section - Moonshine's Corner */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{ 
              borderBottom: "3px solid #08023a", 
              marginBottom: "20px",
              paddingBottom: "8px"
            }}>
              <h3 style={{ 
                fontSize: "24px", 
                fontFamily: "Georgia, serif", 
                color: "#08023a",
                margin: "0",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>Entertainment</h3>
            </div>
            <div style={{
              padding: "15px",
              backgroundColor: "#fff9e6",
              borderRadius: "8px",
              border: "2px dashed #08023a"
            }}>
              <BlogComponent id={1} />
            </div>
          </div>

        
          </div>
          </div>
        
        {/* Extra Large Screen Media Queries */}
        <style>
          {`
            /* Extra Large Screens (1400px and up) - For Multiple Monitor Setups */
            @media (min-width: 1400px) {
              .container {
                max-width: 1320px;
                margin: 0 auto;
              }
              
              /* Larger newspaper header for big screens */
              .boxtwo h1 {
                font-size: 60px !important;
                letter-spacing: 3px !important;
              }
              
              .boxtwo p {
                font-size: 24px !important;
              }
              
              /* Better spacing for wide screens */
              .main-sections-grid {
                gap: 60px !important;
              }
              
              /* Larger section headers */
              .section-header h3 {
                font-size: 28px !important;
              }
              
              .section-header p {
                font-size: 16px !important;
              }
            }
            
            /* Ultra Wide Screens (1600px and up) - For Ultrawide Monitors */
            @media (min-width: 1600px) {
              .container {
                max-width: 1500px;
              }
              
              /* Even larger newspaper header */
              .boxtwo h1 {
                font-size: 72px !important;
                letter-spacing: 4px !important;
              }
              
              .boxtwo p {
                font-size: 28px !important;
              }
              
              /* More spacing for ultrawide */
              .main-sections-grid {
                gap: 80px !important;
              }
              
              /* Larger content text for better readability */
              .blog-content {
                font-size: 18px !important;
                line-height: 1.8 !important;
              }
              
              /* Larger section headers */
              .section-header h3 {
                font-size: 32px !important;
              }
            }
            
            /* Super Ultra Wide (1920px and up) - For 4K and Multiple Monitor Dev Setups */
            @media (min-width: 1920px) {
              .container {
                max-width: 1800px;
              }
              
              /* Maximum newspaper header size */
              .boxtwo h1 {
                font-size: 84px !important;
                letter-spacing: 5px !important;
              }
              
              .boxtwo p {
                font-size: 32px !important;
              }
              
              /* Maximum spacing */
              .main-sections-grid {
                gap: 100px !important;
              }
              
              /* Larger content for 4K readability */
              .blog-content {
                font-size: 20px !important;
                line-height: 2.0 !important;
              }
              
              /* Maximum section header sizes */
              .section-header h3 {
                font-size: 36px !important;
              }
              
              .section-header p {
                font-size: 18px !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}
  export default MainBlog;