import { BlogEntry } from "./types";
// Adjust the import to match the actual export from blogdata.ts
import { blogData } from "./blogdata.ts";


// Define ProductEntry type based on your ProductData structure

interface BlogComponentProps {
    category?: 'MoonshinesCorner' | 'Rehabsolutions' | 'SeniorTips' | 'all';
    id?: number;
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
        <div>
            {entries.map((entry) => (
                <div key={entry.id} className="blog-entry card mb-3" style={{ maxWidth: "400px", margin: "auto", height: "650px" }}>
					<p className="Title">{entry.title}</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<img
							src={entry.imageUrl}
							alt={entry.title}
							className="px-2"
							width={250}
							height={250}
						/>
					</div>
                    <p className="body">{entry.article}</p>
					 <p className="text-center">{entry.date}</p> 
                    <a
						href={entry.link || `./blogentries/${entry.category.toLowerCase()}blogentry`}
                        className="text-center mb-4 text-white btn btn-warning btn-block btn-lg mt-3"
                    >
                        Read More
                    </a>
        
				
                </div>
            ))}
        </div>
    );
};

export default BlogComponent;