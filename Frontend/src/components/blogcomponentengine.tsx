import { useEffect, useMemo, useState } from "react";
import { BlogEntry } from "./types";
import { blogntries } from "./blogentriesdata";



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

const getSimplePostPath = (entry: BlogEntry): string => {
	if (entry.link) {
		const normalized = entry.link.replace(/\\/g, '/').replace(/^\.?\/?/, '/');
		if (normalized.startsWith('/blog/')) {
			return normalized;
		}
		if (normalized.startsWith('/blogentries/')) {
			return normalized.replace('/blogentries/', '/blog/');
		}
	}

	if (entry.slug) {
		return `/blog/${entry.slug}`;
	}

	return `/blog/${entry.id}`;
};

const localHosts = new Set(['localhost', '127.0.0.1', '0.0.0.0']);
const isLocalDevHost = localHosts.has(window.location.hostname);
const API_ORIGIN = isLocalDevHost
	? 'http://localhost:8080'
	: 'https://moonshineconsultingbackend.onrender.com';

const BLOGS_API_URL = `${API_ORIGIN}/api/blogs`;

type ApiBlogEntry = {
	id: number;
	title?: string;
	author?: string;
	date?: string;
	image?: string;
	category?: string;
	article?: string | string[];
	link?: string;
	NewsSection?: string;
	newsSection?: string;
	slug?: string;
	content?: unknown;
};

const mapApiBlogToUiBlog = (entry: ApiBlogEntry): BlogEntry => {
	const articleText = Array.isArray(entry.article) ? entry.article.join(' ') : (entry.article || '');
	const contentText = typeof entry.content === 'string' ? entry.content : articleText;
	const imagePath = entry.image || '';
	const normalizedImagePath = imagePath
		.replace(/^\.\/Images\//i, '/images/')
		.replace(/^\.\/images\//, '/images/');
	const normalizedImageUrl = normalizedImagePath.startsWith('/images/')
		? `${API_ORIGIN}${normalizedImagePath}`
		: (normalizedImagePath || `${API_ORIGIN}/images/logo.PNG`);

	return {
		id: entry.id,
		title: entry.title || 'Untitled',
		author: entry.author || '',
		date: entry.date || '',
		imageUrl: normalizedImageUrl,
		category: entry.category || '',
		article: articleText,
		link: entry.link,
		newsSection: entry.newsSection || entry.NewsSection || '',
		slug: entry.slug,
		content: contentText,
	};
};

const normalizeLocalEntry = (entry: BlogEntry): BlogEntry => ({
	...entry,
	slug: entry.slug || (entry.title ? slugify(entry.title) : undefined),
	content: entry.content || entry.article || '',
});

type BlogComponentProps = {
	category?: string;
	id?: number;
	limit?: number;
	sortOrder?: 'asc' | 'desc';
};

const BlogComponent = ({ category = 'all', id, limit, sortOrder = 'desc' }: BlogComponentProps) => {
	const [liveEntries, setLiveEntries] = useState<BlogEntry[] | null>(null);
	const pageSize = limit ?? 5;

	useEffect(() => {
		let isMounted = true;

		const loadBlogs = async () => {
			try {
				const response = await fetch(BLOGS_API_URL);
				if (!response.ok) {
					return;
				}

				const payload = (await response.json()) as ApiBlogEntry[];
				if (!Array.isArray(payload)) {
					return;
				}

				if (isMounted) {
					setLiveEntries(payload.map(mapApiBlogToUiBlog));
				}
			} catch {
				// Keep local fallback data silently.
			}
		};

		loadBlogs();

		return () => {
			isMounted = false;
		};
	}, []);

	const allEntries: BlogEntry[] = useMemo(() => {
		if (liveEntries && liveEntries.length > 0) {
			return liveEntries.map(normalizeLocalEntry);
		}

		return blogntries.map(normalizeLocalEntry);
	}, [liveEntries]);

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

	const entries = filteredEntries.slice(0, pageSize);

	if (entries.length === 0) {
		return <div>No blog entries found.</div>;
	}

	const isMobileView = typeof window !== 'undefined' && window.innerWidth < 768;

	 return (
		 <div style={{ height: "100%", width: "100%" }}>
			{entries.map((entry) => (
				<div key={entry.id} className="blog-entry blog-content" style={{
					width: "100%",
					margin: "0 0 12px 0",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					minHeight: isMobileView ? "320px" : "220px",
					height: "auto",
					padding: "12px",
					backgroundColor: "#f8f9fa",
					borderRadius: "6px",
					border: "2px solid #08023a",
				}}>
					<p className="Title" style={{ fontSize: "27px", fontWeight: "bold", marginBottom: "8px", lineHeight: "1.2", marginTop: "0", textAlign: "left", fontFamily: "Open Sans, Arial, sans-serif" }}>{entry.title}</p>
					<div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "16px", width: "100%" }}>
						<div style={{ flex: "0 0 100px", display: "flex", flexDirection: "column", alignItems: "center" }}>
							{entry.imageUrl && (
								<img
									src={entry.imageUrl}
									alt={entry.title}
									className="px-1"
									width={100}
									height={100}
									style={{ objectFit: "cover", borderRadius: "6px" }}
								/>
							)}
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
									href={getSimplePostPath(entry)}
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