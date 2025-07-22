import BlogComponent from "../components/blogcomponentengine.tsx";
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

    const cardContainerStyle = {
      display: isMobile ? "block" : "flex",
      gap: "20px",
      padding: "20px",
    };

    return (
      <section className="container columns px-0">
        <div style={{ padding: "20px" }}>
          <div className="text-center mb-4 cards">
            <h1 style={{ fontSize: "64px", marginTop: "10px" }}>
              The Care Professional Chronicle
            </h1>
            <p className="text-white">
              Your Trusted Source for Senior Care and Advocacy
            </p>
            <div
              className="text-white"
              style={{ fontSize: "20px", marginBottom: "20px" }}
            >
              {new Date().toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>

          <div style={cardContainerStyle}>
            <div className="col-12 col-md-6">
              <div className="text-center mb-4">
                <h1>Top Stories</h1>
                <p className="justify-items-center">
                  Stay informed with the latest updates on senior care policies that affect you and your loved ones.
                </p>
              </div>
              <BlogComponent id={2} />
            </div>
            <div className="col-12 col-md-6">
              <div className="text-center mb-4">
                <h1>Voices In Care</h1>
                <p>
                  Where caregivers and professionals share their insights, stories, and struggles from the field.
                </p>
              </div>
              <BlogComponent id={3} />
            </div>
          </div>
        </div>

        <div style={{ padding: "20px" }}>
          <div className="text-center mb-4">
            <h1>Moonshines Corner</h1>
            <p>
              Join Moonshine, our lovable mascot, as he shares heartwarming interviews with therapy animals.
            </p>
          </div>
          <BlogComponent id={1} />
        </div>
      </section>
    );
  }

  export default MainBlog;

 