import { useEffect, useMemo, useState } from 'react';
import BlogNavigation from './BlogNavigation';
import ProductComponent from './productgenerator';

const API_ORIGIN = 'https://moonshineconsultingbackend.onrender.com';
const BLOGS_API_URL = `${API_ORIGIN}/api/blogs`;
const PRODUCTS_API_URL = `${API_ORIGIN}/api/products`;

// ...existing type definitions from ReusableBlogEntry.tsx...

type BlogWithTargetedAdsProps = {
  entryKeys: string[];
};

function BlogWithTargetedAds({ entryKeys }: BlogWithTargetedAdsProps) {
  const [entries, setEntries] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const blogsRes = await fetch(BLOGS_API_URL);
      const blogs = blogsRes.ok ? await blogsRes.json() : [];
      setEntries(blogs);
      const productsRes = await fetch(PRODUCTS_API_URL);
      const products = productsRes.ok ? await productsRes.json() : [];
      setProducts(products);
    })();
  }, []);

  // ...existing logic to find the current blog entry by entryKeys...

  // ...existing logic to extract sections, intro, etc...

  // When rendering paragraphs, after each paragraph, filter products:
  // products.filter(p => p.blogEntryId === String(entry.id) && p.paragraphNumber === String(paragraphIndex+1))
  // and render those as ads after the paragraph.

  // ...existing rendering logic, but after each paragraph:
  // {adsForThisParagraph.map(product => <ProductComponent key={product.productid} {...product} />)}

  return null; // placeholder for full implementation
}

export default BlogWithTargetedAds;
