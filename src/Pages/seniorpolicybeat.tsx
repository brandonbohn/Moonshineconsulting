import React from "react";
import BlogComponent from "../components/blogcomponentengine.tsx";

function SeniorPolicyBeat() {
    return (
        <main style={{ padding: "2rem", maxWidth: 800, margin: "0 auto", background: "#b8860b", borderRadius: "8px", fontFamily: "Arial, sans-serif", color: "#ffffff" }}>
            <h1>Senior Policy Beat</h1>
            <p>
                Welcome to the Senior Policy Beat, your trusted source for the latest news, analysis, and resources on policies impacting seniors. Stay informed with expert insights, legislative updates, and community stories.
            </p>
            <section style={{ marginTop: "2rem",  background: "#000000", padding: "1rem", borderRadius: "8px" }}>
                <h2>Featured Articles</h2>
                <ul>
             <BlogComponent id={2} /> 
                </ul>
            </section>
            <section style={{ marginTop: "2rem" }}>
                <h2>Get Involved</h2>
                <p>
                    Join our newsletter or participate in upcoming events to stay connected with the senior policy community.
                </p>
            </section>
        </main>
    );
};

export default SeniorPolicyBeat;