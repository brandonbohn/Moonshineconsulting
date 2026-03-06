import { useEffect, useMemo, useState } from "react";
import { BlogEntry } from "./types";
import { blogData } from "./blogdata.ts";
import '../css/mainblog.css';


// Define ProductEntry type based on your ProductData structure

interface BlogComponentProps {
	category?: string;
    id?: number;
	limit?: number;
	sortOrder?: 'asc' | 'desc';
    newSection?: string;
    imageUrl?: string;
    title?: string;
    article?: string;
    date?: string;
}

interface RawBlogEntry {
	id?: number | string;
	slug?: string;
	title?: string;
	article?: string;
	content?: string;
	body?: string;
	author?: string;
	date?: string;
	image?: string;
	imageUrl?: string;
	category?: string;
	link?: string;
	newsSection?: string;
	NewsSection?: string;
}

const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env || {};
const BLOG_API_BASE_URL = env.REACT_APP_BLOG_API_BASE_URL || "https://moonshineconsultingbackend.onrender.com";
const BLOG_API_ENDPOINT = env.REACT_APP_BLOG_API_ENDPOINT || "/api/blogs";

const getBlogApiUrl = (): string => {
	if (/^https?:\/\//i.test(BLOG_API_ENDPOINT)) {
		return BLOG_API_ENDPOINT;
	}

	return `${BLOG_API_BASE_URL}${BLOG_API_ENDPOINT}`;
};

const slugify = (value: string): string => {
	return value
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");
};

const normalizeCategory = (value: string): string => {
	return value.toLowerCase().replace(/[^a-z0-9]/g, '');
};

const categoryAliasMap: Record<string, string[]> = {
	voicesincare: ['rehabsolutions'],
};

const matchesCategory = (entryCategory: string, targetCategory: string): boolean => {
	const normalizedEntryCategory = normalizeCategory(entryCategory || '');
	const normalizedTargetCategory = normalizeCategory(targetCategory || '');

	if (!normalizedTargetCategory || normalizedTargetCategory === 'all') {
		return true;
	}

	if (normalizedEntryCategory === normalizedTargetCategory) {
		return true;
	}

	const aliases = categoryAliasMap[normalizedTargetCategory] || [];
	return aliases.includes(normalizedEntryCategory);
};

const getDynamicPostPath = (entry: BlogEntry): string => {
	if (entry.slug) {
		return `/blog/${entry.slug}`;
	}

	if (entry.id && !Number.isNaN(entry.id)) {
		return `/blog/${entry.id}`;
	}

	if (entry.title) {
		return `/blog/${slugify(entry.title)}`;
	}

	return entry.link || "/mainblog";
};

const normalizeBlogEntry = (entry: RawBlogEntry): BlogEntry => ({
	id: Number(entry.id),
	slug: entry.slug || (entry.title ? slugify(entry.title) : undefined),
	title: entry.title || "Untitled",
	article: entry.article || "",
	content: entry.content || entry.body || entry.article || "",
	author: entry.author || "",
	date: entry.date || "",
	imageUrl: entry.imageUrl || entry.image || "/images/placeholder.jpg",
	category: entry.category || "",
	link: entry.link,
	newsSection: entry.newsSection || entry.NewsSection || "",
});

const getFallbackEntries = (): BlogEntry[] => {
	return blogData.map((entry) =>
		normalizeBlogEntry({
			id: entry.id,
			slug: entry.title ? slugify(entry.title) : undefined,
			title: entry.title,
			article: entry.article,
			content: entry.article,
			author: entry.author,
			date: entry.date,
			image: entry.image,
			category: entry.category,
			link: entry.link,
			NewsSection: entry.NewsSection,
		})
	);
};

const fetchBlogs = async (): Promise<BlogEntry[]> => {
	const targetUrl = getBlogApiUrl();
	const response = await fetch(targetUrl);

	if (!response.ok) {
		throw new Error(`Failed to fetch blogs: ${response.status}`);
	}

	const payload = await response.json();
	const source = Array.isArray(payload) ? payload : payload?.data;

	if (!Array.isArray(source)) {
		return [];
	}

	return source.map((entry: RawBlogEntry) => normalizeBlogEntry(entry));
};

const BlogComponent = ({ category = 'all', id, limit, sortOrder = 'desc' }: BlogComponentProps) => {
	const [allEntries, setAllEntries] = useState<BlogEntry[]>(getFallbackEntries());

	useEffect(() => {
		let isMounted = true;

		const loadBlogs = async () => {
			try {
				const apiEntries = await fetchBlogs();
				if (isMounted && apiEntries.length > 0) {
					setAllEntries(apiEntries);
				}
			} catch (error) {
				console.error('Blog API unavailable, using local fallback.', error);
			}
		};

		loadBlogs();

		return () => {
			isMounted = false;
		};
	}, []);

	const entries = useMemo(() => {
		if (id !== undefined) {
			const entry = allEntries.find((blog) => blog.id === id);
			return entry ? [entry] : [];
		}

		let filteredEntries = allEntries;

		if (category !== 'all' && category) {
			filteredEntries = allEntries.filter((blog) => matchesCategory(blog.category, category));
		}

		const sortedEntries = [...filteredEntries].sort((first, second) => {
			const firstId = Number.isNaN(first.id) ? 0 : first.id;
			const secondId = Number.isNaN(second.id) ? 0 : second.id;
			return sortOrder === 'asc' ? firstId - secondId : secondId - firstId;
		});

		if (limit && limit > 0) {
			return sortedEntries.slice(0, limit);
		}

		return sortedEntries;
	}, [allEntries, category, id, limit, sortOrder]);

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
					<p className="Title" style={{ fontSize: "27px", fontWeight: "bold", marginBottom: "8px", lineHeight: "1.2", marginTop: "0", textAlign: "left", fontFamily: "Open Sans, Arial, sans-serif" }}>{entry.title}</p>
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
									href={getDynamicPostPath(entry)}
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