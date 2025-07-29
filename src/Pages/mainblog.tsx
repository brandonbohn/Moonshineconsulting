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



    return (
      <section className="">
        <div className="" style={{ padding: "20px", backgroundColor: "#ffffff",  width: "auto", height: "auto",marginTop: "150px" }}>
          <div className="boxtwo text-center" style={{  padding: "20px", backgroundColor: "#08023a", borderRadius: "10px", width: "auto", height: "auto" }}>

            <h1 style={{ fontSize: "34px", }} className="text-white">
              The Care Professional Chronicle
            </h1>
            <p className="text-white ">
              Your Trusted Source for Senior Care and Advocacy
            </p>
           {new Date().toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })} 
          </div>
          <div className="text-center mb-4 cards">
            
            <div
              className="text-white"
              style={{ fontSize: "20px", marginBottom: "20px" }}
            >
              
            </div>
            <div className="">
 </div>
{[  [1, 2, 3, 4],
 
].map((row, rowIndex) => (
  <div className="gap-3"
    key={rowIndex}
    style={{
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: isMobile ? "center" : "space-between",
      marginBottom: "20px",
    }}
  >
    {row.map((id) => (
      <div
        key={id}
        style={{
          width: isMobile ? "100%" : "48%",
          marginBottom: isMobile ? "20px" : "0",
        }}
      >
        <BlogComponent id={id} />
      </div>
    ))}
  </div>
))}
           

        

            </div>
          </div>
      </section>
    );
  }

  export default MainBlog;

 