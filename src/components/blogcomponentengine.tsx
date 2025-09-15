import { BlogEntry } from "./types";
// Adjust the import to match the actual export from blogdata.ts
import { blogData } from "./blogdata.ts";


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
					margin: "0 0 32px 0",  
					display: "flex", 
					flexDirection: "column",
					justifyContent: "flex-start",
					height: "100%",
					minHeight: "200px",
					padding: "0"
				}}>
					{/* Title on top */}
					<p className="Title" style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", lineHeight: "1.2", marginTop: "0", textAlign: "left" }}>{entry.title}</p>
					{/* Row: image left, info right */}
					<div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "24px", width: "100%" }}>
						{/* Image left */}
						<div style={{ flex: "0 0 140px", display: "flex", justifyContent: "center", alignItems: "center" }}>
							<img
								src={entry.imageUrl}
								alt={entry.title}
								className="px-2"
								width={140}
								height={140}
								style={{ objectFit: "cover", borderRadius: "8px" }}
							/>
						</div>
						{/* Info right */}
						<div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px" }}>
							<p className="text-left" style={{ fontSize: "16px", fontWeight: "600", color: "#08023a", marginBottom: "2px", textAlign: "left" }}>{entry.newsSection}</p>
							<p className="body" style={{ 
								fontSize: "16px", 
								lineHeight: "1.5", 
								marginBottom: "8px",
								overflow: "hidden",
								display: "-webkit-box",
								WebkitLineClamp: 2,
								WebkitBoxOrient: "vertical" as const,
								textOverflow: "ellipsis",
								maxHeight: "48px",
								textAlign: "left"
							}}>{entry.article}</p>
							<p className="text-left" style={{ fontSize: "14px", color: "#666", marginBottom: "2px", textAlign: "left" }}>{entry.date}</p>
						</div>
					</div>
					{/* Read More button at bottom right */}
					<div style={{ width: "100%", display: "flex", justifyContent: "flex-end", marginTop: "12px" }}>
						<a
							href={entry.link || `./blogentries/${entry.category.toLowerCase()}blogentry`}
							className="senior-btn"
							style={{ textDecoration: "none", display: "inline-block" }}
						>
							<span style={{ display: "inline-block", width: "100%", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Read More</span>
						</a>
					</div>
				</div>
			))}
		</div>
    );
};

export default BlogComponent;