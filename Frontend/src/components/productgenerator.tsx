import { useEffect, useMemo, useState } from "react";

interface ProductComponentProps {
	productid?: number;
}

type ProductEntry = {
	productid: number;
	name: string;
	description: string;
	price: number;
	photo: string;
	link: string;
	affilatelinkstatement: string;
	imageUrl?: string;
	productAdvisory:string;
};

const API_ORIGIN = "https://moonshineconsultingbackend.onrender.com";
const PRODUCTS_API_URL = `${API_ORIGIN}/api/products`;
const DEFAULT_PRODUCT_IMAGE_URL = `${API_ORIGIN}/images/logo.PNG`;

let cachedProducts: ProductEntry[] | null = null;
let inFlightProductsRequest: Promise<ProductEntry[] | null> | null = null;

const normalizeProductImageUrl = (photoPath: string): string => {
	const normalizedPhotoPath = (photoPath || "")
		.replace(/^\.\//, "/")
		.replace(/^images\//i, "/images/")
		.replace(/^Images\//, "/images/");

	if (!normalizedPhotoPath) {
		return DEFAULT_PRODUCT_IMAGE_URL;
	}

	if (/^https?:\/\//i.test(normalizedPhotoPath)) {
		return normalizedPhotoPath;
	}

	if (normalizedPhotoPath.startsWith("/images/")) {
		return `${API_ORIGIN}${normalizedPhotoPath}`;
	}

	if (normalizedPhotoPath.startsWith("/")) {
		return `${API_ORIGIN}${normalizedPhotoPath}`;
	}

	return `${API_ORIGIN}/images/${normalizedPhotoPath}`;
};

const normalizeProductEntry = (product: Partial<ProductEntry>): ProductEntry => {
	const photo = product.photo || "";
	return {
		productid: Number(product.productid) || 0,
		name: product.name || "",
		description: product.description || "",
		price: typeof product.price === "number" ? product.price : 0,
		photo,
		link: product.link || "",
		affilatelinkstatement: product.affilatelinkstatement || "",
		productAdvisory: product.productAdvisory || "",
		imageUrl: normalizeProductImageUrl(photo),
	};
};

const fetchProductsFromApi = async (): Promise<ProductEntry[] | null> => {
	if (cachedProducts) {
		return cachedProducts;
	}

	if (inFlightProductsRequest) {
		return inFlightProductsRequest;
	}

	inFlightProductsRequest = (async () => {
		try {
			const response = await fetch(PRODUCTS_API_URL);
			if (!response.ok) {
				return null;
			}

			const payload = (await response.json()) as Partial<ProductEntry>[];
			if (!Array.isArray(payload)) {
				return null;
			}

			const normalizedProducts = payload.map(normalizeProductEntry);
			cachedProducts = normalizedProducts;
			return normalizedProducts;
		} catch {
			return null;
		} finally {
			inFlightProductsRequest = null;
		}
	})();

	return inFlightProductsRequest;
};

export const ProductComponent = ({ productid }: ProductComponentProps) => {
	const [liveProducts, setLiveProducts] = useState<ProductEntry[] | null>(cachedProducts);

	// Debug logging
	useEffect(() => {
		if (productid !== undefined) {
			console.log('[ProductComponent] Requested productid:', productid);
		}
	}, [productid]);

	useEffect(() => {
		let isMounted = true;

		const loadProducts = async () => {
			const products = await fetchProductsFromApi();
			if (!isMounted || !products) {
				return;
			}

			setLiveProducts(products);
			// Debug log loaded products
			console.log('[ProductComponent] Loaded products:', products);
		};

		loadProducts();

		return () => {
			isMounted = false;
		};
	}, []);

	const baseProducts = useMemo(() => {
		return liveProducts ?? [];
	}, [liveProducts]);

	let entries: ProductEntry[] = baseProducts;
	if (productid !== undefined) {
		const entry = baseProducts.find((product) => product.productid === productid);
		if (!entry) {
			console.warn('[ProductComponent] No product found for productid:', productid, 'Available IDs:', baseProducts.map(p => p.productid));
		}
		entries = entry ? [entry] : [];
	}
	if (entries.length === 0) {
		return <div>No product entries found for productid: {productid}</div>;
	}

		// Use product-card class for correct color styling
		return (
		<div className="product-card">
			{entries.map((entry) => {
				   // Larger, consistent font size for description, prevent overflow
				   const descFontSize = 18;
				   return (
					   <div key={entry.productid}>
						   <div className="position-relative" style={{ height: 180, overflow: 'hidden' }}>
							   <img
								   src={entry.imageUrl}
								   alt={entry.name}
								   className="logo card-img-top"
								   style={{ width: '100%', height: 180, objectFit: 'cover' }}
							   />
						   </div>
						   <div className="card-body d-flex flex-column">
							   <h3 className="Title card-title" style={{ color: '#fff', fontWeight: 'bold' }}>{entry.name}</h3>
							   <p className="Text card-text" style={{ color: '#fff', fontSize: descFontSize, fontWeight: 400, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}>{entry.description}</p>
							   <p className="text-center" style={{ color: '#ffd600', marginBottom: 12, fontStyle: 'italic', fontWeight: 400, fontSize: 14 }}>{entry.affilatelinkstatement}</p>
							   {entry.productAdvisory && (
								   <p className="text-center" style={{ color: '#ff4d4f', marginBottom: 10, fontStyle: 'italic', fontWeight: 400, fontSize: 13 }}>{entry.productAdvisory}</p>
							   )}
							   <div className="price-section mb-3 text-center">
								   <span style={{ fontWeight: 700, color: '#ffd600' }}>${entry.price}</span>
							   </div>
							   <a
								   href={entry.link}
								   className="btn senior-btn btn-sm mt-auto"
								   style={{ width: '100%', height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, borderRadius: 8, border: 'none', textDecoration: 'none', transition: 'all 0.3s ease' }}
							   >
								   View on Amazon
							   </a>
						   </div>
					   </div>
				   );
			})}
		</div>
	);
};

export default ProductComponent;