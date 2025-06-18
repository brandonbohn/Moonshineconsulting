// Sample blog data; replace or import as needed
const blogs = [
  {
    image: "./images/moonshine.jpg",
    title: "How I Herded Hearts Instead of Sheep",
    article: "Moonshine Introduces Himself as a caring loving nursing companion that tried to be a therapy dog but while too scared to do so still inspired elderly patients.",
    date: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
  },
{
    image: "./images/moonshine.jpg",
    title: "How I Herded Hearts Instead of Sheep",
    article: "Moonshine Introduces Himself as a caring loving nursing companion that tried to be a therapy dog but while too scared to do so still inspired elderly patients.",
    date: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
  },
  {
    image: "./images/moonshine.jpg",
    title: "How I Herded Hearts Instead of Sheep",
    article: "Moonshine Introduces Himself as a caring loving nursing companion that tried to be a therapy dog but while too scared to do so still inspired elderly patients.",
    date: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
  },
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
<div >

<div className="bg-dark text-white p-4">

<h1 className="text-white text-center">The Care Professional Chronicle </h1>
    <p className="text-center text-white" style={{ fontSize: "24px", marginBottom: "20px" }}>
      Your Trusted Source for Senior Care and Advocacy
     <div className="">

      {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
     </div>

    </p>
      <div className=" text mb-3">

  </div>



</div>
    
     




            
    <div className="">
       
    

      </div>

       <main style={{ maxWidth:"auto", margin: "20px", padding: "20px", fontSize: "24px", fontFamily: "sans-serif",  minHeight: "100vh" }}>
                <section>
                
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                        {blogs.map((blog, idx) => (
                            <article
                            key={idx}
                            style={{
                              background: "#fff", // White card background
                              borderRadius: 12,
                              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                              flex: "1 1 250px",
                              minWidth: 250,
                              maxWidth: 300,
                              padding: "1rem",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              fontSize: "24px",
                            }}
                            >
                            <img
                              src={blog.image}
                              alt={blog.title}
                              style={{ width: "100%", borderRadius: 8, marginBottom: "1rem", background: "none" }}
                            />
                            <h3 style={{ margin: "0 0 0.5rem 0", color: "#212529", fontSize: "24px" }}>{blog.title}</h3>
                            <p style={{ fontSize: "24px", color: "#333" }}>{blog.article}</p>
                            <span style={{ fontSize: "24px", color: "#b08968", marginTop: "auto" }}>
                              <a
                              href="./blogentries/moonshinescornerblogentry"
                              className="btn btn-warning btn-sm"
                              style={{ fontSize: "24px", marginLeft: "10px" }}
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