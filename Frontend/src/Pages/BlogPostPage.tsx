
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductComponent from "../components/productgenerator";
import BlogNavigation from "../components/BlogNavigation";

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

type BlogEntry = {
  id: number;
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
  content?: any;
  adPlacements?: any[];
};

const API_ORIGIN = "https://moonshineconsultingbackend.onrender.com";
const BLOGS_API_URL = `${API_ORIGIN}/api/blogs`;
const PRODUCTS_API_URL = `${API_ORIGIN}/api/products`;


export default function BlogPostPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<BlogEntry | null>(null);
  const [products, setProducts] = useState<ProductEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const blogRes = await fetch(`${BLOGS_API_URL}?slug=${slug}`);
      const blogs = await blogRes.json();
      const blogData = Array.isArray(blogs) ? blogs[0] : blogs;
      setBlog(blogData as BlogEntry);
      const prodRes = await fetch(PRODUCTS_API_URL);
      setProducts((await prodRes.json()) as ProductEntry[]);
      setLoading(false);
    }
    fetchData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found.</div>;

  // Prepare adPlacements (up to 6), parse if string
  let adPlacements: any = blog.adPlacements;
  if (typeof adPlacements === 'string') {
    try { adPlacements = JSON.parse(adPlacements); } catch { adPlacements = []; }
  }
  adPlacements = Array.isArray(adPlacements) ? adPlacements.slice(0, 6) : [];
  // Prepare sections/paragraphs
  const sections = Array.isArray(blog.content?.sections)
    ? blog.content.sections
    : [{ heading: "", paragraphs: Array.isArray(blog.article) ? blog.article : [blog.article] }];

  // Build content with product cards injected
  type ContentItem =
    | { type: "heading"; text: string; key: string }
    | { type: "paragraph"; text: string; key: string }
    | { type: "product"; product: ProductEntry; key: string };
  const contentItems: ContentItem[] = [];
  sections.forEach((section: any, sectionIndex: number) => {
    if (section.heading) {
      contentItems.push({ type: "heading", text: section.heading, key: `heading-${sectionIndex}` });
    }
    (section.paragraphs || []).forEach((paragraph: string, pIndex: number) => {
      contentItems.push({ type: "paragraph", text: paragraph, key: `${sectionIndex}-${pIndex}` });
      // Insert product if adPlacement matches this paragraph
      const placement = adPlacements.find(
        (ap: any) => Number(ap.afterParagraph) === pIndex + 1
      );
      if (placement) {
        const product = products.find((prod) => prod.productid === placement.adProductId);
        if (product) {
          contentItems.push({ type: "product", product, key: `product-${sectionIndex}-${pIndex}` });
        }
      }
    });
  });

  // Render rows of up to 3 products
  const renderContent = () => {
    const rows = [];
    let buffer = [];
    for (let i = 0; i < contentItems.length; i++) {
      const item = contentItems[i];
      if (item.type === "product") {
        buffer.push(item);
        const next = contentItems[i + 1];
        if (buffer.length === 3 || !next || next.type !== "product") {
          rows.push(
            <div key={item.key + "-row"} style={{ display: "flex", gap: 24, justifyContent: "center", margin: "32px 0", padding: "20px 0", borderTop: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0" }}>
              {buffer.map((prodItem) => (
                <div key={prodItem.key} style={{ flex: 1, minWidth: 0 }}>
                  <ProductComponent productid={prodItem.product.productid} />
                </div>
              ))}
            </div>
          );
          buffer = [];
        }
      } else if (item.type === "heading") {
        if (buffer.length > 0) {
          rows.push(
            <div key={item.key + "-row"} style={{ display: "flex", gap: 24, justifyContent: "center", margin: "32px 0", padding: "20px 0", borderTop: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0" }}>
              {buffer.map((prodItem) => (
                <div key={prodItem.key} style={{ flex: 1, minWidth: 0 }}>
                  <ProductComponent productid={prodItem.product.productid} />
                </div>
              ))}
            </div>
          );
          buffer = [];
        }
        rows.push(
          <h2 key={item.key} style={{ fontSize: 27, fontFamily: "Open Sans, Arial, sans-serif", color: "#08023a", marginTop: 20, marginBottom: 12 }}>
            {item.text}
          </h2>
        );
      } else if (item.type === "paragraph") {
        if (buffer.length > 0) {
          rows.push(
            <div key={item.key + "-row"} style={{ display: "flex", gap: 24, justifyContent: "center", margin: "32px 0", padding: "20px 0", borderTop: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0" }}>
              {buffer.map((prodItem) => (
                <div key={prodItem.key} style={{ flex: 1, minWidth: 0 }}>
                  <ProductComponent productid={prodItem.product.productid} />
                </div>
              ))}
            </div>
          );
          buffer = [];
        }
        rows.push(
          <p key={item.key} style={{ fontSize: 21, fontFamily: "Georgia, serif", lineHeight: 1.6, marginBottom: 14 }}>
            {item.text}
          </p>
        );
      }
    }
    if (buffer.length > 0) {
      rows.push(
        <div key={"final-product-row"} style={{ display: "flex", gap: 24, justifyContent: "center", margin: "32px 0", padding: "20px 0", borderTop: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0" }}>
          {buffer.map((prodItem) => (
            <div key={prodItem.key} style={{ flex: 1, minWidth: 0 }}>
              <ProductComponent productid={prodItem.product.productid} />
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 32 }}>
      <BlogNavigation categoryName={blog.category || blog.NewsSection || "Blog"} categoryLink={"/mainblog"} />
      <h1 style={{ fontSize: 36, fontWeight: "bold", marginBottom: 16 }}>{blog.title}</h1>
      <div style={{ color: "#666", fontSize: 18, marginBottom: 24 }}>By {blog.author} | {blog.date && new Date(blog.date).toLocaleDateString()}</div>
      <img src={blog.image} alt={blog.title} style={{ maxWidth: 400, width: "100%", borderRadius: 8, marginBottom: 24 }} />
      <div style={{ background: "#fff", borderRadius: 10, padding: 32, fontSize: 21, fontFamily: "Georgia, serif" }}>
        {renderContent()}
      </div>
    </div>
  );
}
