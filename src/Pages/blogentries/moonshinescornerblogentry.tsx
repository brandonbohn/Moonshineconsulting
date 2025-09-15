import BlogNavigation from "../../components/BlogNavigation";
// ...existing imports...

function MoonshinesCornerBlog() {
  return (
    <div>
      {/* Blog Navigation */}
      <BlogNavigation 
        categoryName="Moonshine's Corner" 
        categoryLink="/moonshinescorner" 
      />
      <div style={{ backgroundColor: "#08023a", borderRadius: "10px", padding: "32px 0 24px 0", margin: "50px 0 0 0", width: "100%" }}>
        <h1 style={{ color: "#fff", textAlign: "center", fontSize: "2.8rem", fontWeight: "bold", marginBottom: "16px", letterSpacing: "1px", width: "100%" }}>
          Moonshine's Corner: Wisdom from Experience
        </h1>
        <h2 style={{ color: "#fff", fontSize: "1.3rem", fontStyle: "italic", textAlign: "left", margin: "0 0 8px 0", width: "100%" }}>Author: Moonshine</h2>
        <div style={{ color: "#fff", textAlign: "left", fontSize: "1.2rem", marginBottom: "16px", width: "100%" }}>
          {new Date('2025-07-01').toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <img
          src="/images/moonshine.jpg"
          alt="Moonshine's Corner"
          style={{ display: "block", margin: "0 auto 12px auto", maxWidth: "400px", width: "100%", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
        />
      </div>
      <div className="content mb-4 box text-dark" style={{ padding: "32px", fontSize: "22px", width: "100%", margin: "30px 0 0 0", background: "#fff", borderRadius: "10px", textAlign: "left", boxSizing: "border-box" }}>
        {/* Story content starts here */}
        {/* ...existing story content... */}
      </div>
    </div>
  );
}
export default MoonshinesCornerBlog;
