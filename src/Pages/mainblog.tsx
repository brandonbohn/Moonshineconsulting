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
      <section className="">
        <div className="" style={{ padding: "20px", backgroundColor: "#ffffff",  width: "auto", height: "auto",marginTop: "150px" }}>
          {/* Newspaper Header */}
          <div className="boxtwo text-center" style={{  padding: "30px", backgroundColor: "#08023a", borderRadius: "10px", width: "auto", height: "auto", marginBottom: "30px" }}>
            <h1 style={{ fontSize: "48px", fontFamily: "Georgia, serif", letterSpacing: "2px" }} className="text-white">
              The Care Professional Chronicle
            </h1>
            <div style={{ borderTop: "3px solid #ffffff", width: "60%", margin: "15px auto" }}></div>
            <p className="text-white" style={{ fontSize: "20px", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
              Your Trusted Source for Senior Care and Advocacy
            </p>
            <p className="text-white" style={{ fontSize: "16px", fontFamily: "Georgia, serif", marginTop: "10px" }}>
              {new Date().toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })} • Volume 1 • Issue 1
            </p>
          </div>

          {/* Featured Story Section - Policy/Medicare News */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{ 
              borderBottom: "4px solid #08023a", 
              marginBottom: "20px",
              paddingBottom: "10px"
            }}>
              <h2 style={{ 
                fontSize: "32px", 
                fontFamily: "Georgia, serif", 
                color: "#08023a",
                margin: "0",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}>Breaking: Medicare & Policy News</h2>
            </div>
            <div style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "30px",
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              border: "2px solid #08023a"
            }}>
              <div style={{ flex: isMobile ? "none" : "1", width: "100%" }}>
                <BlogComponent id={2} />
              </div>
            </div>
          </div>

          {/* Main Sections */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
            gap: "40px",
            marginBottom: "40px"
          }}>
            
            {/* Lifestyle Section */}
            <div>
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
                }}>Senior Living & Lifestyle</h3>
                <p style={{ 
                  fontSize: "14px", 
                  fontFamily: "Georgia, serif", 
                  color: "#666",
                  margin: "5px 0 0 0",
                  fontStyle: "italic"
                }}>Planning & Practical Guidance</p>
              </div>
              <div style={{ 
                padding: "15px", 
                backgroundColor: "#ffffff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                height: "fit-content",
                minHeight: "200px",
                marginBottom: "20px"
              }}>
                <BlogComponent id={4} />
              </div>
              
              {/* Contributors Section */}
              <div>
                <div style={{ 
                  borderBottom: "2px solid #08023a", 
                  marginBottom: "15px",
                  paddingBottom: "5px"
                }}>
                  <h4 style={{ 
                    fontSize: "18px", 
                    fontFamily: "Georgia, serif", 
                    color: "#08023a",
                    margin: "0",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>Contributors</h4>
                  <p style={{ 
                    fontSize: "12px", 
                    fontFamily: "Georgia, serif", 
                    color: "#666",
                    margin: "3px 0 0 0",
                    fontStyle: "italic"
                  }}>Meet Our Expert Writers</p>
                </div>
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "15px"
                }}>
                  <div style={{ 
                    padding: "12px", 
                    backgroundColor: "#ffffff",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    height: "fit-content"
                  }}>
                    <ContributorsComponent id={1} />
                  </div>
                  <div style={{ 
                    padding: "12px", 
                    backgroundColor: "#ffffff",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    height: "fit-content"
                  }}>
                    <ContributorsComponent id={2} />
                  </div>
                </div>
              </div>
            </div>

            {/* Voices in Care Section */}
            <div>
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
                }}>Voices in Care</h3>
                <p style={{ 
                  fontSize: "14px", 
                  fontFamily: "Georgia, serif", 
                  color: "#666",
                  margin: "5px 0 0 0",
                  fontStyle: "italic"
                }}>Reports from the Field • Caregiver Perspectives</p>
              </div>
              <div style={{ 
                padding: "15px", 
                backgroundColor: "#ffffff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                marginBottom: "20px",
                height: "auto"
              }}>
                <BlogComponent id={3} />
              </div>
              <div style={{ 
                padding: "15px", 
                backgroundColor: "#ffffff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                height: "auto"
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

          {/* Footer Information */}
          <div style={{
            borderTop: "3px double #08023a",
            paddingTop: "20px",
            textAlign: "center",
            backgroundColor: "#f8f9fa",
            padding: "25px",
            borderRadius: "8px"
          }}>
            <p style={{ 
              fontSize: "18px", 
              fontFamily: "Georgia, serif", 
              color: "#08023a",
              fontWeight: "bold",
              marginBottom: "10px"
            }}>
              Subscribe to The Care Professional Chronicle
            </p>
            <p style={{ 
              fontSize: "16px", 
              fontFamily: "Georgia, serif", 
              color: "#666",
              lineHeight: "1.6"
            }}>
              Stay informed about the latest in senior care, healthcare policy, and professional insights.<br/>
              Written by nurses and care professionals with over 30 years of combined experience.
            </p>
          </div>
        </div>
      </section>
    );
  }

  export default MainBlog;

 