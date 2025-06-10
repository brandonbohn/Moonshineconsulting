import React from "react";
function MoonshinesCorner() {
const blogs = [
    {
        title: "Meet Bella: The Golden Retriever Therapist",
        article:
            "Bella shares her journey from playful pup to certified therapy dog, helping children overcome anxiety.",
        date: "June 10, 2024",
        image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=400&q=80",
    },
    {
        title: "Interview with Max: Comforting Seniors",
        excerpt:
            "Max talks about his favorite moments visiting nursing homes and the friendships he's made.",
        date: "June 3, 2024",
        image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
    },
    {
        title: "Luna's Story: From Rescue to Therapy Star",
        excerpt:
            "Luna opens up about her rescue story and how she now brings joy to hospital patients.",
        date: "May 27, 2024",
        image: "https://images.unsplash.com/photo-1518715308788-3005759c61e9?auto=format&fit=crop&w=400&q=80",
    },
];

    return (
        <div style={{ fontFamily: "sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
            <header style={{ background: "#ffe4b5", padding: "2rem 0", textAlign: "center" }}>
                <h1 style={{ margin: 0, fontSize: "2.5rem", color: "#6b3e26" }}>Moonshine's Corner</h1>
                <p style={{ fontSize: "1.25rem", color: "#6b3e26" }}>
                    A blog where Moonshine the dog interviews therapy dogs about their amazing work!
                </p>
            </header>
            <main style={{ maxWidth: 900, margin: "2rem auto", padding: "0 1rem" }}>
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
                                <p style={{ fontSize: "0.95rem", color: "#444" }}>{blog.excerpt}</p>
                                <span style={{ fontSize: "0.85rem", color: "#b08968", marginTop: "auto" }}>
                                    {blog.date}
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