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
                    margin: "0",  
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "space-between",
                    height: "100%",
                    minHeight: "300px",
                    padding: "0"
                }}>
					<div style={{ flex: "0 0 auto" }}>
						<p className="Title" style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "5px", lineHeight: "1.2", marginTop: "0" }}>{entry.title}</p>
						<div style={{ display: "flex", justifyContent: "center", marginBottom: "8px" }}>
							<img
								src={entry.imageUrl}
								alt={entry.title}
								className="px-2"
								width={200}
								height={200}
								style={{ objectFit: "cover", borderRadius: "8px" }}
							/>
						</div>
						<p className="text-center" style={{ fontSize: "16px", fontWeight: "600", color: "#08023a", marginBottom: "5px" }}>{entry.newsSection}</p>
					</div>
                    <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
						<p className="body" style={{ 
							fontSize: "16px", 
							lineHeight: "1.5", 
							marginBottom: "15px",
							overflow: "hidden",
							display: "-webkit-box",
							WebkitLineClamp: 3,
							WebkitBoxOrient: "vertical" as const,
							textOverflow: "ellipsis",
							maxHeight: "72px"
						}}>{entry.article}</p>
						<div style={{ flex: "0 0 auto" }}>
							<p className="text-center" style={{ fontSize: "14px", color: "#666", marginBottom: "15px" }}>{entry.date}</p> 
							<a
								href={entry.link || `./blogentries/${entry.category.toLowerCase()}blogentry`}
								className="mb-4 text-white btn btn-warning btn-block btn mt-3"
								style={{ 
									backgroundColor: "#08023a", 
									borderColor: "#08023a",
									fontSize: "16px",
									padding: "10px 20px",
									borderRadius: "8px",
									textDecoration: "none",
									display: "block",
									textAlign: "center"
								}}
							>
								Read More
							</a>
						</div>
					</div>
        
				
                </div>
            ))}
        </div>
    );
};

export default BlogComponent;