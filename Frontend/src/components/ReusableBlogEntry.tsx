import { useEffect, useMemo, useState } from 'react';
import BlogNavigation from './BlogNavigation';
import ProductComponent from './productgenerator';

const PRODUCTS_API_URL = 'https://moonshineconsultingbackend.onrender.com/api/products';

type ProductEntry = {
  productid: number;
  name: string;
  description: string;
  price: number;
  photo: string;
  link: string;
  affilatelinkstatement: string;
  imageUrl?: string;
  productAdvisory?: string;
  blogEntryId?: string;
  paragraphNumber?: string;
};

const API_ORIGIN = 'https://moonshineconsultingbackend.onrender.com';
const BLOGS_API_URL = `${API_ORIGIN}/api/blogs`;

type ApiBlogContentSection = {
  heading?: string;
  paragraphs?: string[];
};

type ApiBlogReference = {
  id?: string;
  citation?: string;
  url?: string;
};

type ApiBlogBlock = {
  type?: 'callout' | 'cta' | 'list' | 'signature';
  tone?: 'primary' | 'warning' | 'info' | 'success';
  title?: string;
  body?: string;
  items?: string[];
  linkLabel?: string;
  linkUrl?: string;
};

type ApiBlogContent = {
  intro?: string;
  sections?: ApiBlogContentSection[];
  blocks?: ApiBlogBlock[];
  references?: ApiBlogReference[];
};

type ApiBlogEntry = {
  id: number;
  sourceFile?: string;
  slug?: string;
  NewsSection?: string;
  newsSection?: string;
  category?: string;
  image?: string;
  title?: string;
  article?: string | string[];
  date?: string;
  author?: string;
  link?: string;
  content?: ApiBlogContent | string;
  ads?: number[];
};

type ReusableBlogEntryProps = {
  entryKeys: string[];
};


let cachedBlogs: ApiBlogEntry[] | null = null;
let inFlightBlogsRequest: Promise<ApiBlogEntry[] | null> | null = null;

const fetchBlogs = async (): Promise<ApiBlogEntry[] | null> => {
  if (cachedBlogs) {
    return cachedBlogs;
  }

  if (inFlightBlogsRequest) {
    return inFlightBlogsRequest;
  }

  inFlightBlogsRequest = (async () => {
    try {
      const response = await fetch(BLOGS_API_URL);
      if (!response.ok) {
        return null;
      }

      const payload = (await response.json()) as ApiBlogEntry[];
      if (!Array.isArray(payload)) {
        return null;
      }

      cachedBlogs = payload;
      return payload;
    } catch {
      return null;
    } finally {
      inFlightBlogsRequest = null;
    }
  })();

  return inFlightBlogsRequest;
};

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const extractKeyFromSourceFile = (sourceFile?: string): string => {
  if (!sourceFile) {
    return '';
  }
  return sourceFile.replace(/\.tsx$/i, '').trim().toLowerCase();
};

const extractKeyFromLink = (link?: string): string => {
  if (!link) {
    return '';
  }
  const normalized = link.replace(/\\/g, '/');
  const parts = normalized.split('/').filter(Boolean);
  return (parts[parts.length - 1] || '').toLowerCase();
};

const normalizeImageUrl = (imagePath?: string): string => {
  const normalizedImagePath = (imagePath || '')
    .replace(/^\.\//, '/')
    .replace(/^images\//i, '/images/')
    .replace(/^Images\//, '/images/');

  if (!normalizedImagePath) {
    return `${API_ORIGIN}/images/logo.PNG`;
  }

  if (/^https?:\/\//i.test(normalizedImagePath)) {
    return normalizedImagePath;
  }

  if (normalizedImagePath.startsWith('/')) {
    return `${API_ORIGIN}${normalizedImagePath}`;
  }

  return `${API_ORIGIN}/images/${normalizedImagePath}`;
};

const resolveCategoryName = (entry: ApiBlogEntry): string => {
  const value = entry.newsSection || entry.NewsSection || entry.category || 'Main Blog';
  return value;
};

const resolveCategoryLink = (entry: ApiBlogEntry): string => {
  const value = (entry.newsSection || entry.NewsSection || entry.category || '').toLowerCase();
  if (value.includes('policy')) {
    return '/seniorpolicybeat';
  }
  if (value.includes('living')) {
    return '/seniorlivingdesk';
  }
  if (value.includes('voice')) {
    return '/voicesincare';
  }
  if (value.includes('moonshine')) {
    return '/moonshinescorner';
  }
  return '/mainblog';
};

const extractSections = (entry: ApiBlogEntry): ApiBlogContentSection[] => {
  if (entry.content && typeof entry.content === 'object' && Array.isArray(entry.content.sections)) {
    return entry.content.sections;
  }

  const articleParagraphs = Array.isArray(entry.article)
    ? entry.article
    : (entry.article ? [entry.article] : []);

  if (articleParagraphs.length === 0) {
    return [];
  }

  return [{ heading: '', paragraphs: articleParagraphs }];
};

const extractIntro = (entry: ApiBlogEntry): string => {
  if (entry.content && typeof entry.content === 'object' && typeof entry.content.intro === 'string') {
    return entry.content.intro;
  }
  return '';
};

const extractBlocks = (entry: ApiBlogEntry): ApiBlogBlock[] => {
  if (entry.content && typeof entry.content === 'object' && Array.isArray(entry.content.blocks)) {
    return entry.content.blocks;
  }
  return [];
};

const extractReferences = (entry: ApiBlogEntry): ApiBlogReference[] => {
  if (entry.content && typeof entry.content === 'object' && Array.isArray(entry.content.references)) {
    return entry.content.references;
  }
  return [];
};

const blockToneStyleByType: Record<string, { background: string; border: string; heading: string }> = {
  primary: { background: '#eef4ff', border: '#1f4db8', heading: '#0d2f7a' },
  warning: { background: '#fff9e6', border: '#b8860b', heading: '#7a5a00' },
  info: { background: '#eefbfd', border: '#1f8ca3', heading: '#0f5f6f' },
  success: { background: '#edf8ef', border: '#1f7a34', heading: '#135220' },
};

const matchesAnyKey = (entry: ApiBlogEntry, keys: string[]): boolean => {
  const entryKeys = new Set<string>([
    String(entry.id),
    (entry.slug || '').toLowerCase(),
    extractKeyFromSourceFile(entry.sourceFile),
    extractKeyFromLink(entry.link),
    slugify(entry.title || ''),
  ]);

  return keys.some((key) => entryKeys.has(key));
};

function ReusableBlogEntry({ entryKeys }: ReusableBlogEntryProps) {
  const [entries, setEntries] = useState<ApiBlogEntry[] | null>(cachedBlogs);
  const [products, setProducts] = useState<ProductEntry[]>([]);

  useEffect(() => {
    let isMounted = true;

    const loadEntries = async () => {
      const payload = await fetchBlogs();
      if (isMounted && payload) {
        setEntries(payload);
      }
    };

    const loadProducts = async () => {
      try {
        const res = await fetch(PRODUCTS_API_URL);
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && Array.isArray(data)) {
          setProducts(data);
        }
      } catch {}
    };

    loadEntries();
    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const normalizedKeys = useMemo(
    () => entryKeys.map((key) => key.trim().toLowerCase()).filter(Boolean),
    [entryKeys],
  );

  const entry = useMemo(() => {
    if (!entries) {
      return null;
    }
    return entries.find((item) => matchesAnyKey(item, normalizedKeys)) || null;
  }, [entries, normalizedKeys]);

  if (!entries) {
    return null;
  }

  if (!entry) {
    return <div style={{ padding: '24px' }}>Blog entry not found.</div>;
  }

  const categoryName = resolveCategoryName(entry);
  const categoryLink = resolveCategoryLink(entry);
  const imageUrl = normalizeImageUrl(entry.image);
  const intro = extractIntro(entry);
  const sections = extractSections(entry);
  const blocks = extractBlocks(entry);
  const references = extractReferences(entry);
  const ads = (entry.ads || []).slice(0, 6);
  const ADS_PER_ROW = 3;

  // Group ads into rows of 3
  const adRows: number[][] = [];
  for (let i = 0; i < ads.length; i += ADS_PER_ROW) {
    adRows.push(ads.slice(i, i + ADS_PER_ROW));
  }

  // Build content items and insert targeted ads after the correct paragraph
  const contentItems: Array<{ type: 'heading' | 'paragraph' | 'adrow'; text?: string; key: string; products?: ProductEntry[] }> = [];
  let paragraphCount = 0;

  sections.forEach((section, sectionIndex) => {
    if (section.heading) {
      contentItems.push({ type: 'heading', text: section.heading, key: `heading-${sectionIndex}` });
    }
    (section.paragraphs || []).forEach((paragraph, pIndex) => {
      contentItems.push({ type: 'paragraph', text: paragraph, key: `${sectionIndex}-${pIndex}` });
      paragraphCount++;
      // Filter products for this blog and paragraph
      const targetedProducts = products.filter(
        (p) =>
          p.blogEntryId === String(entry.id) &&
          p.paragraphNumber === String(paragraphCount)
      );
      if (targetedProducts.length > 0) {
        contentItems.push({ type: 'adrow', products: targetedProducts, key: `adrow-${sectionIndex}-${pIndex}` });
      }
    });
  });

  return (
    <div>
      <BlogNavigation categoryName={categoryName} categoryLink={categoryLink} />

      <div style={{ backgroundColor: '#08023a', borderRadius: '10px', padding: '32px 0 24px 0', margin: '50px 0 0 0', width: '100%' }}>
        <h1 style={{ color: '#fff', textAlign: 'center', fontSize: '27px', fontWeight: 'bold', marginBottom: '16px', letterSpacing: '1px', width: '100%', fontFamily: 'Open Sans, Arial, sans-serif' }}>
          {entry.title || 'Untitled'}
        </h1>
        <h2 style={{ color: '#fff', fontSize: '20px', fontStyle: 'italic', textAlign: 'left', margin: '0 0 8px 0', width: '100%', fontFamily: 'Open Sans, Arial, sans-serif' }}>
          Author: {entry.author || 'Unknown'}
        </h2>
        <div style={{ color: '#fff', textAlign: 'left', fontSize: '21px', marginBottom: '16px', width: '100%', fontFamily: 'Georgia, serif' }}>
          {entry.date
            ? new Date(entry.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
            : ''}
        </div>
        <img
          src={imageUrl}
          alt={entry.title || 'Blog image'}
          style={{ display: 'block', margin: '0 auto 12px auto', maxWidth: '400px', width: '100%', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        />
      </div>

      <div className="content mb-4 box text-dark" style={{ padding: '32px', fontSize: '21px', fontFamily: 'Georgia, serif', width: '100%', margin: '30px 0 0 0', background: '#fff', borderRadius: '10px', textAlign: 'left', boxSizing: 'border-box' }}>
        {intro && (
          <p style={{ fontSize: '21px', fontFamily: 'Georgia, serif', lineHeight: '1.6', marginBottom: '16px' }}>
            {intro}
          </p>
        )}

  {contentItems.map((item) => {
    if (item.type === 'heading') {
      return (
        <h2 key={item.key} style={{ fontSize: '27px', fontFamily: 'Open Sans, Arial, sans-serif', color: '#08023a', marginTop: '20px', marginBottom: '12px' }}>
          {item.text}
        </h2>
      );
    }
    if (item.type === 'paragraph') {
      return (
        <p key={item.key} style={{ fontSize: '21px', fontFamily: 'Georgia, serif', lineHeight: '1.6', marginBottom: '14px' }}>
          {item.text}
        </p>
      );
    }
    if (item.type === 'adrow' && item.products) {
      return (
        <div key={item.key} style={{ margin: '32px 0', padding: '20px 0', borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0' }}>
          <p style={{ fontSize: '12px', fontFamily: 'Open Sans, sans-serif', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 16px 0', textAlign: 'center' }}>
            Sponsored
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center', alignItems: 'stretch' }}>
            {item.products.map((product) => (
              <ProductComponent key={product.productid} productid={product.productid} />
            ))}
          </div>
        </div>
      );
    }
    return null;
  })}

        {blocks.map((block, blockIndex) => {
          const tone = blockToneStyleByType[block.tone || 'primary'] || blockToneStyleByType.primary;

          if (block.type === 'signature') {
            return (
              <p
                key={`block-signature-${blockIndex}`}
                style={{ fontSize: '24px', fontFamily: 'Open Sans, Arial, sans-serif', lineHeight: '1.6', margin: '28px 0 0 0', textAlign: 'center', color: '#08023a', fontWeight: 'bold' }}
              >
                {block.body || block.title || ''}
              </p>
            );
          }

          return (
            <div
              key={`block-${block.type || 'box'}-${blockIndex}`}
              style={{
                backgroundColor: tone.background,
                border: `2px solid ${tone.border}`,
                borderRadius: '10px',
                padding: '22px',
                marginTop: '24px',
              }}
            >
              {block.title && (
                <h3 style={{ fontSize: '24px', fontFamily: 'Open Sans, Arial, sans-serif', color: tone.heading, margin: '0 0 12px 0' }}>
                  {block.title}
                </h3>
              )}

              {block.body && (
                <p style={{ fontSize: '21px', fontFamily: 'Georgia, serif', lineHeight: '1.6', marginBottom: block.items && block.items.length ? '12px' : '0' }}>
                  {block.body}
                </p>
              )}

              {block.items && block.items.length > 0 && (
                <ul style={{ fontSize: '21px', fontFamily: 'Georgia, serif', lineHeight: '1.6', margin: '0', paddingLeft: '28px' }}>
                  {block.items.map((item, itemIndex) => (
                    <li key={`block-item-${blockIndex}-${itemIndex}`} style={{ marginBottom: '8px' }}>{item}</li>
                  ))}
                </ul>
              )}

              {block.type === 'cta' && block.linkLabel && block.linkUrl && (
                <a
                  href={block.linkUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '14px',
                    backgroundColor: '#08023a',
                    color: '#fff',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '18px',
                    fontFamily: 'Open Sans, Arial, sans-serif',
                    fontWeight: '600',
                  }}
                >
                  {block.linkLabel}
                </a>
              )}
            </div>
          );
        })}

        {references.length > 0 && (
          <div style={{ marginTop: '30px', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '24px', fontFamily: 'Open Sans, Arial, sans-serif', color: '#08023a', marginBottom: '16px' }}>
              References
            </h2>
            {references.map((reference, index) => (
              <p key={`ref-${reference.id || index}`} style={{ fontSize: '17px', fontFamily: 'Georgia, serif', lineHeight: '1.5', marginBottom: '10px' }}>
                {reference.id ? <strong>{reference.id}. </strong> : null}
                {reference.citation || ''}
                {reference.url ? (
                  <>
                    {' '}
                    <a href={reference.url} target="_blank" rel="noopener noreferrer" style={{ color: '#08023a' }}>
                      {reference.url}
                    </a>
                  </>
                ) : null}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default ReusableBlogEntry;
