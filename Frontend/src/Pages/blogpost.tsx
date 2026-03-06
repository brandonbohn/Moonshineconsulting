import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogNavigation from '../components/BlogNavigation.tsx';
import { blogData } from '../components/blogdata.ts';
import { BlogEntry } from '../components/types';

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
const BLOG_API_BASE_URL = env.REACT_APP_BLOG_API_BASE_URL || 'https://moonshineconsultingbackend.onrender.com';
const BLOG_API_ENDPOINT = env.REACT_APP_BLOG_API_ENDPOINT || '/api/blogs';

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
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

const normalizeBlogEntry = (entry: RawBlogEntry): BlogEntry => ({
  id: Number(entry.id),
  slug: entry.slug || (entry.title ? slugify(entry.title) : undefined),
  title: entry.title || 'Untitled',
  article: entry.article || '',
  content: entry.content || entry.body || entry.article || '',
  author: entry.author || '',
  date: entry.date || '',
  imageUrl: entry.imageUrl || entry.image || '/images/placeholder.jpg',
  category: entry.category || '',
  link: entry.link,
  newsSection: entry.newsSection || entry.NewsSection || '',
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
  const response = await fetch(getBlogApiUrl());

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

const categoryRouteMap: Record<string, { name: string; link: string }> = {
  MoonshinesCorner: { name: "Moonshine's Corner", link: '/moonshinescorner' },
  SeniorPolicyBeat: { name: 'Senior Policy Beat', link: '/seniorpolicybeat' },
  'Senior Living Desk': { name: 'Senior Living Desk', link: '/seniorlivingdesk' },
  'Voices In Care': { name: 'Voices in Care', link: '/voicesincare' },
};

const getCategoryNavigation = (entry?: BlogEntry): { name: string; link: string } => {
  if (!entry) {
    return { name: 'Main Blog', link: '/mainblog' };
  }

  return categoryRouteMap[entry.category] ||
    (entry.newsSection ? { name: entry.newsSection, link: '/mainblog' } : { name: 'Main Blog', link: '/mainblog' });
};

const findBlogPost = (entries: BlogEntry[], slugOrId: string): BlogEntry | undefined => {
  const normalizedParam = slugOrId.toLowerCase();

  return entries.find((entry) => {
    const entryId = String(entry.id);
    const entrySlug = (entry.slug || '').toLowerCase();
    const titleSlug = slugify(entry.title || '');
    const legacyLinkTail = (entry.link || '').split('/').pop()?.toLowerCase() || '';

    return (
      entryId === normalizedParam ||
      entrySlug === normalizedParam ||
      titleSlug === normalizedParam ||
      legacyLinkTail === normalizedParam
    );
  });
};

function BlogPost() {
  const { slugOrId } = useParams();
  const [allEntries, setAllEntries] = useState<BlogEntry[]>(getFallbackEntries());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadBlogs = async () => {
      try {
        const apiEntries = await fetchBlogs();
        if (isMounted && apiEntries.length > 0) {
          setAllEntries(apiEntries);
        }
      } catch (error) {
        console.error('Blog API unavailable for post view, using local fallback.', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  const entry = useMemo(() => {
    if (!slugOrId) {
      return undefined;
    }

    return findBlogPost(allEntries, slugOrId);
  }, [allEntries, slugOrId]);

  const articleParagraphs = useMemo(() => {
    const rawText = entry?.content || entry?.article || '';
    return rawText
      .split(/\n\n+/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);
  }, [entry]);

  const categoryNavigation = getCategoryNavigation(entry);

  if (isLoading) {
    return <div style={{ padding: '40px', fontSize: '21px' }}>Loading blog post...</div>;
  }

  if (!entry) {
    return (
      <div>
        <BlogNavigation categoryName="Main Blog" categoryLink="/mainblog" />
        <div style={{ padding: '40px', fontSize: '21px' }}>Blog post not found.</div>
      </div>
    );
  }

  return (
    <div>
      <BlogNavigation categoryName={categoryNavigation.name} categoryLink={categoryNavigation.link} />
      <div style={{ backgroundColor: '#08023a', borderRadius: '10px', padding: '32px 0 24px 0', margin: '50px 0 0 0', width: '100%' }}>
        <h1 style={{ color: '#fff', textAlign: 'center', fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '16px', letterSpacing: '1px', width: '100%' }}>
          {entry.title}
        </h1>
        <h2 style={{ color: '#fff', fontSize: '1.3rem', fontStyle: 'italic', textAlign: 'left', margin: '0 0 8px 0', width: '100%' }}>
          Author: {entry.author || 'Moonshine Consulting'}
        </h2>
        <div style={{ color: '#fff', textAlign: 'left', fontSize: '1.2rem', marginBottom: '16px', width: '100%' }}>
          {entry.date || new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <img
          src={entry.imageUrl}
          alt={entry.title}
          style={{ display: 'block', margin: '0 auto 12px auto', maxWidth: '400px', width: '100%', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        />
      </div>

      <div className="content mb-4 box text-dark" style={{ padding: '32px', fontSize: '22px', width: '100%', margin: '30px 0 0 0', background: '#fff', borderRadius: '10px', textAlign: 'left', boxSizing: 'border-box' }}>
        {articleParagraphs.length > 0 ? (
          articleParagraphs.map((paragraph, index) => (
            <p
              key={`${entry.id}-${index}`}
              style={{ fontSize: '22px', fontFamily: 'Open Sans, sans-serif', lineHeight: '1.7', marginBottom: '24px' }}
            >
              {paragraph}
            </p>
          ))
        ) : (
          <p style={{ fontSize: '22px', fontFamily: 'Open Sans, sans-serif', lineHeight: '1.7', marginBottom: '24px' }}>
            {entry.article}
          </p>
        )}
      </div>
    </div>
  );
}

export default BlogPost;
