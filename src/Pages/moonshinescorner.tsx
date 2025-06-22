import React from "react";
function MoonshinesCorner() {
const blogs = [
    {
        title: "How I Herded Hearts Instead of Sheep",
        article:
            "Moonshine introduces Himself as a carring loving nursing companion that tried to be a therapy dog but while to scared to do so still inspired elderly patients",
        date: "June 10, 2024",
        image: "./images/moonshine.jpg",
        link:"./privacypolicy"
    },

   
];
   
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
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                        {blogs.map((blog, idx) => (
                            <article
                                key={idx}
                                style={{
                                    background: "#fff",
                                    borderRadius: 12,
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                                    flex: "1 1 250px",
                                    minWidth: 250,
                                    maxWidth: 300,
                                    padding: "1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    style={{ width: "100%", borderRadius: 8, marginBottom: "1rem" }}
                                />
                                <h3 style={{ margin: "0 0 0.5rem 0", color: "#6b3e26" }}>{blog.title}</h3>
                                <p style={{ fontSize: "0.95rem", color: "#444" }}>{blog.article}</p>
                                <span style={{ fontSize: "0.85rem", color: "#b08968", marginTop: "auto" }}>
                                    {blog.date}
                              <a
                    href="./blogentries/moonshinescornerblogentry"
                    className="btn btn-warning btn-sm"
                    >
                    Read More
                    </a>        
                                </span>
                            </article>
                        ))}
                   
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