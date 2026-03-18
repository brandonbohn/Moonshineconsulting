import { useEffect, useMemo, useState } from 'react';
import BlogNavigation from './BlogNavigation';
import ProductComponent from './productgenerator';

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

  useEffect(() => {
    let isMounted = true;

    const loadEntries = async () => {
      const payload = await fetchBlogs();
      if (!isMounted || !payload) {
        return;
      }
      setEntries(payload);
    };

    loadEntries();

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

  // Distribute ads after every 2 sections; remaining ads go after the last section
  const adsPerSection = 2;

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

        {sections.map((section, sectionIndex) => (
          <div key={`section-group-${sectionIndex}`}>
            <section>
              {section.heading && (
                <h2 style={{ fontSize: '27px', fontFamily: 'Open Sans, Arial, sans-serif', color: '#08023a', marginTop: '20px', marginBottom: '12px' }}>
                  {section.heading}
                </h2>
              )}
              {(section.paragraphs || []).map((paragraph, paragraphIndex) => (
                <p key={`${sectionIndex}-${paragraphIndex}`} style={{ fontSize: '21px', fontFamily: 'Georgia, serif', lineHeight: '1.6', marginBottom: '14px' }}>
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Insert an ad after every 2nd section */}
            {ads.length > 0 && (sectionIndex + 1) % adsPerSection === 0 && (() => {
              const adIndex = Math.floor(sectionIndex / adsPerSection);
              const productId = ads[adIndex];
              if (!productId) return null;
              return (
                <div
                  key={`ad-${adIndex}`}
                  style={{
                    margin: '28px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <p style={{ fontSize: '12px', fontFamily: 'Open Sans, sans-serif', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 10px 0' }}>
                    Sponsored
                  </p>
                  <ProductComponent productid={productId} />
                </div>
              );
            })()}
          </div>
        ))}

        {/* Render any remaining ads that didn't fit between sections */}
        {ads.slice(Math.ceil(sections.length / adsPerSection)).map((productId, extraAdIndex) => (
          <div
            key={`ad-extra-${extraAdIndex}`}
            style={{
              margin: '28px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p style={{ fontSize: '12px', fontFamily: 'Open Sans, sans-serif', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 10px 0' }}>
              Sponsored
            </p>
            <ProductComponent productid={productId} />
          </div>
        ))}

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
