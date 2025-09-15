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
					flexDirection: window.innerWidth < 768 ? "column" : "column", // Title always on top
					justifyContent: "flex-start",
					height: "100%",
					minHeight: "300px",
					padding: "0"
				}}>
					{/* Title on top */}
					<p className="Title" style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", lineHeight: "1.2", marginTop: "0", textAlign: "left" }}>{entry.title}</p>
					{/* Image left, text right */}
					<div style={{ display: "flex", flexDirection: window.innerWidth < 768 ? "column" : "row", alignItems: "flex-start", gap: "20px" }}>
						{/* Image left */}
						<div style={{ flex: "0 0 200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
							<img
								src={entry.imageUrl}
								alt={entry.title}
								className="px-2"
								width={200}
								height={200}
								style={{ objectFit: "cover", borderRadius: "8px" }}
							/>
						</div>
						{/* Text right */}
						<div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
							<p className="text-left" style={{ fontSize: "16px", fontWeight: "600", color: "#08023a", marginBottom: "5px", textAlign: "left" }}>{entry.newsSection}</p>
							<p className="body" style={{ 
								fontSize: "16px", 
								lineHeight: "1.5", 
								marginBottom: "15px",
								overflow: "hidden",
								display: "-webkit-box",
								WebkitLineClamp: 3,
								WebkitBoxOrient: "vertical" as const,
								textOverflow: "ellipsis",
								maxHeight: "72px",
								textAlign: "left"
							}}>{entry.article}</p>
							<p className="text-left" style={{ fontSize: "14px", color: "#666", marginBottom: "15px", textAlign: "left" }}>{entry.date}</p> 
							<a
								href={entry.link || `./blogentries/${entry.category.toLowerCase()}blogentry`}
								className="mb-4 text-white btn btn-warning btn-block btn mt-3"
								style={{ 
									backgroundColor: "#08023a", 
									borderColor: "#08023a",
									fontSize: "12px",
									width: "100px",
									height: "50px",
									borderRadius: "8px",
									textDecoration: "none",
									display: "inline-block",
									textAlign: "center",
									lineHeight: "15px",
									padding: "0"
								}}
							>
								<span style={{ display: "inline-block", width: "100%", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Read More</span>
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
    );
};

export default BlogComponent;