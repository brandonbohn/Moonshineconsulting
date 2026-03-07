import { useMemo, useState } from "react";
import { BlogEntry } from "./types";
import blogEntries from '../data/blogEntries.unified.json';
import '../css/mainblog.css';

interface BlogComponentProps {
	category?: string;
	id?: number;
	limit?: number;
	sortOrder?: 'asc' | 'desc';
}

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
	if (entry.id && !Number.isNaN(entry.id)) {
		return `/blog/${entry.id}`;
	}
	if (entry.slug) {
		return `/blog/${entry.slug}`;
	}
	if (entry.title) {
		return `/blog/${slugify(entry.title)}`;
	}
	return entry.link || "/mainblog";
};

const BlogComponent = ({ category = 'all', id, limit, sortOrder = 'desc' }: BlogComponentProps) => {
	const [page, setPage] = useState(1);
	const pageSize = 5;

	// Map blogEntries to BlogEntry type, filling missing fields
	const allEntries: BlogEntry[] = useMemo(() => {
		return (blogEntries as any[]).map(entry => ({
			...entry,
			imageUrl: entry.imageUrl || entry.image || '/images/placeholder.jpg',
			newsSection: entry.newsSection || entry.NewsSection || '',
			slug: entry.slug || (entry.title ? slugify(entry.title) : undefined),
			content: entry.content || entry.article || '',
		}));
	}, []);

	const filteredEntries = useMemo(() => {
		if (id !== undefined) {
			const entry = allEntries.find((blog) => blog.id === id);
			return entry ? [entry] : [];
		}
		let filtered = allEntries;
		if (category !== 'all' && category) {
			filtered = allEntries.filter((blog) => matchesCategory(blog.category, category));
		}
		const sorted = [...filtered].sort((first, second) => {
			const firstId = Number.isNaN(first.id) ? 0 : first.id;
			const secondId = Number.isNaN(second.id) ? 0 : second.id;
			return sortOrder === 'asc' ? firstId - secondId : secondId - firstId;
		});
		return sorted;
	}, [allEntries, category, id, sortOrder]);

	const totalPages = Math.ceil(filteredEntries.length / pageSize);
	const entries = filteredEntries.slice((page - 1) * pageSize, page * pageSize);

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
				}}>
					<p className="Title" style={{ fontSize: "27px", fontWeight: "bold", marginBottom: "8px", lineHeight: "1.2", marginTop: "0", textAlign: "left", fontFamily: "Open Sans, Arial, sans-serif" }}>{entry.title}</p>
					<div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "16px", width: "100%" }}>
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
							}}>{typeof entry.content === 'string' ? entry.content : entry.article}</p>
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
	}

	export default BlogComponent;