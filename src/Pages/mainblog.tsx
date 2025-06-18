// Sample blog data; replace or import as needed
const blogs = [
  {
    image: "./images/moonshine.jpg",
    title: "How I Herded Hearts Instead of Sheep",
    article: "Moonshine Introduces Himself as a caring loving nursing companion that tried to be a therapy dog but while too scared to do so still inspired elderly patients.",
    date: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
  },

];

function MainBlog() {
  return (
    <div>
    <h1 className="text-white text-center">Blog Posts </h1>

      <div className="card text-bg-dark mb-3">




            
    <div className="card-body">
       
    

      </div>

       <main style={{ maxWidth:"auto", margin: "20px", padding: "20px"  }}>
                <section>
                    <h2 style={{ color: "#6b3e26" }}>Latest Interviews</h2>
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




    </div>
    </div>
  );
}
export default MainBlog;