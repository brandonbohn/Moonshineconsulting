import { ProductData } from "./productdata.ts";

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

export const ProductComponent = ({ productid }: ProductComponentProps) => {
	let entries: ProductEntry[] = (ProductData || []).map(product => ({ ...product, productAdvisory: product.productAdvisory || "" }));
	if (productid !== undefined) {
		const entry = ProductData.find(product => product.productid === productid);
		if (entry) entries = [{ ...entry, imageUrl: entry.photo, productAdvisory: entry.productAdvisory || "" }];
	}
	if (entries.length === 0) {
		return <div>No product entries found.</div>;
	}

	return (
		<div className="product-card-container" style={{ width: "280px", height: "auto" }}>
			{entries.map((entry) => (
				<div 
					key={entry.productid} 
					className="card h-100 product-card-responsive" 
					style={{ 
						width: "280px",
						height: "480px",
						margin: "auto", 
						borderRadius: "15px", 
						boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
						border: "none",
						overflow: "hidden",
						backgroundColor: "#08023a",
						color: "#ffffff",
						transition: "transform 0.3s ease, box-shadow 0.3s ease",
						marginBottom: "30px"
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.transform = "translateY(-5px)";
						e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)";
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.transform = "translateY(0)";
						e.currentTarget.style.boxShadow = "0 6px 25px rgba(0,0,0,0.15)";
					}}
				>
					{/* Image Section */}
					<div className="position-relative" style={{ height: "180px", overflow: "hidden" }}>
						<img
							src={entry.imageUrl}
							alt={entry.name}
							className="card-img-top"
							style={{
								width: "100%",
								height: "180px",
								objectFit: "cover",
								transition: "transform 0.3s ease"
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = "scale(1.05)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = "scale(1)";
							}}
						/>
					</div>

					{/* Card Body */}
					<div className="card-body d-flex flex-column" style={{ padding: "15px", height: "300px" }}>
						{/* Title */}
						<h3 
							className="card-title"
							style={{
								fontSize: "18px",
								fontFamily: "Open Sans, sans-serif",
								fontWeight: "700",
								color: "#ffffff",
								marginBottom: "12px",
								lineHeight: "1.3"
							}}
						>
							{entry.name}
						</h3>

						{/* Description */}
						<p 
							className="card-text flex-grow-1"
							style={{
								fontSize: "16px",
								fontFamily: "Open Sans, sans-serif",
								color: "#ffffff",
								lineHeight: "1.5",
								marginBottom: "12px",
								overflow: "hidden",
								textOverflow: "ellipsis"
							}}
						>
							{entry.description}
						</p>

						{/* Affiliate Statement */}
						<p 
							className="text-center"
							style={{
								fontSize: "14px",
								fontFamily: "Open Sans, sans-serif",
								color: "#ffc107",
								marginBottom: "12px",
								fontStyle: "italic"
							}}
						>
							{entry.affilatelinkstatement}
						</p>

						{/* Price Section */}
						<div className="price-section mb-3 text-center">
							<span 
								style={{
									fontSize: "20px",
									fontFamily: "Open Sans, sans-serif",
									fontWeight: "700",
									color: "#ffc107"
								}}
							>
								${entry.price}
							</span>
						</div>

						{/* Action Button */}
						<a
							href={entry.link}
							className="btn btn-warning btn-sm mt-auto"
							style={{
								width: "100%",
								height: "44px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: "16px",
								fontFamily: "Open Sans, sans-serif",
								fontWeight: "600",
								borderRadius: "8px",
								border: "none",
								backgroundColor: "#ffc107",
								color: "#08023a",
								textDecoration: "none",
								transition: "all 0.3s ease"
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor = "#ffb000";
								e.currentTarget.style.transform = "translateY(-2px)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = "#ffc107";
								e.currentTarget.style.transform = "translateY(0)";
							}}
						>
							View on Amazon
						</a>
					</div>
				</div>
			))}

			{/* Responsive Styles */}
			<style>
				{`
					/* Tablet responsive - maintain senior-friendly sizes */
					@media (max-width: 991px) {
						.product-card-container {
							width: 280px !important;
						}
						
						.product-card-responsive {
							width: 280px !important;
							height: 420px !important;
						}
					}
					
					/* Mobile responsive - stack vertically but keep readable */
					@media (max-width: 767px) {
						.product-card-container {
							width: 100% !important;
							max-width: 320px !important;
							margin: 0 auto !important;
							display: flex !important;
							justify-content: center !important;
						}
						
						.product-card-responsive {
							width: 100% !important;
							max-width: 320px !important;
							height: 450px !important;
						}
					}
					
					/* Small mobile - ensure cards remain accessible */
					@media (max-width: 480px) {
						.product-card-container {
							width: 100% !important;
							max-width: 300px !important;
						}
						
						.product-card-responsive {
							width: 100% !important;
							max-width: 300px !important;
							height: 430px !important;
						}
					}
							height: auto !important;
							min-height: 450px !important;
							margin: 0 auto !important;
						}
						
						.product-card-responsive .card-title {
							font-size: 24px !important;
						}
						
						.product-card-responsive .card-text {
							font-size: 16px !important;
						}
					}
					
					/* Small mobile */
					@media (max-width: 576px) {
						.product-card-container {
							max-width: 300px !important;
							margin: 0 auto !important;
							display: flex !important;
							justify-content: center !important;
						}
						
						.product-card-responsive {
							max-width: 300px !important;
							min-height: 420px !important;
							margin: 0 auto !important;
						}
						
						.product-card-responsive .card-body {
							padding: 20px !important;
						}
						
						.product-card-responsive .card-title {
							font-size: 22px !important;
						}
					}
				`}
			</style>
		</div>
	);
};

export default ProductComponent;