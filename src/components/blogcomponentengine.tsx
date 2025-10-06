import { BlogEntry } from "./types";
// Adjust the import to match the actual export from blogdata.ts
import { blogData } from "./blogdata.ts";
import '../css/mainblog.css';


// Define ProductEntry type based on your ProductData structure

interface BlogComponentProps {
    category?: 'MoonshinesCorner' | 'Rehabsolutions' | 'SeniorTips' | 'all';
    id?: number;
    newSection?: string;
    imageUrl?: string;
    title?: string;
    article?: string;
    date?: string;
}



const BlogComponent = ({ category = 'all', id }: BlogComponentProps) => {let entries: BlogEntry[] = [];

    if (id !== undefined) {
        const entry = blogData.find(blog => blog.id === id);
        if (entry) entries = [{ ...entry, imageUrl: entry.image }];
    } else if (category === 'all' || !category) {
        entries = blogData.map(blog => ({ ...blog, imageUrl: blog.image }));
    } else {
        entries = blogData
            .filter(blog => blog.category === category)
            .map(blog => ({ ...blog, imageUrl: blog.image }));
    }
     if (entries.length === 0) {
        return <div>No blog entries found.</div>;
    }

	 return (
		 <div style={{ height: "100%", width: "100%" }}>
			 {entries.map((entry) => (
								 <div key={entry.id} className="blog-entry blog-content" style={{ 
									 width: "100%", 
									 margin: "0 0 12px 0",  
									 display: "flex", 
									 flexDirection: "column",
									 justifyContent: "flex-start",
									   minHeight: window.innerWidth < 768 ? "320px" : "220px",
									   height: "auto",
									 padding: "12px",
									 backgroundColor: "#f8f9fa",
									 borderRadius: "6px",
									 border: "2px solid #08023a",
									   // overflow: "hidden"
								 }}>
					{/* Title on top */}
					<p className="Title" style={{ fontSize: "21px", fontWeight: "bold", marginBottom: "8px", lineHeight: "1.2", marginTop: "0", textAlign: "left", fontFamily: "Open Sans, Arial, sans-serif" }}>{entry.title}</p>
					{/* Row: image left, info right */}
					<div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "16px", width: "100%" }}>
						{/* Image left with date below */}
						<div style={{ flex: "0 0 100px", display: "flex", flexDirection: "column", alignItems: "center" }}>
							<img
								src={entry.imageUrl}
								alt={entry.title}
								className="px-1"
								width={100}
								height={100}
								style={{ objectFit: "cover", borderRadius: "6px" }}
							/>
							<p className="text-left" style={{ fontSize: "21px", color: "#666", margin: "8px 0 0 0", textAlign: "left", fontFamily: "Georgia, serif", width: "100%" }}>{entry.date}</p>
						</div>
						{/* Info right */}
						<div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "center", gap: "6px" }}>
							<p className="text-left" style={{ fontSize: "21px", fontWeight: "600", color: "#08023a", marginBottom: "2px", textAlign: "left", fontFamily: "Georgia, serif" }}>{entry.newsSection}</p>
							<p className="body" style={{ 
								fontSize: "21px", 
								lineHeight: "1.4", 
								marginBottom: "6px",
								overflow: "hidden",
								display: "-webkit-box",
								WebkitLineClamp: 6,
								WebkitBoxOrient: "vertical" as const,
								textOverflow: "ellipsis",
								maxHeight: "140px",
								textAlign: "left",
								fontFamily: "Georgia, serif"
							}}>{entry.article}</p>
							<div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginTop: "8px", width: "100%" }}>
								<a
									href={entry.link || `./blogentries/${entry.category.toLowerCase()}blogentry`}
									className="senior-btn"
									style={{ textDecoration: "none", display: "inline-block" }}
								>
									<span style={{ display: "inline-block", width: "100%", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Read More</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
    );
};

export default BlogComponent;