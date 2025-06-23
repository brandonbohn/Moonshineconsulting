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
	imageUrl?: string;
};

export const ProductComponent = ({ productid }: ProductComponentProps) => {
	let entries: ProductEntry[] = ProductData || [];
	if (productid !== undefined) {
		const entry = ProductData.find(product => product.productid === productid);
		if (entry) entries = [{ ...entry, imageUrl: entry.photo }];
	}
    const Productentry= ProductData?.find(product => product.productid === productid);
	if (entries.length === 0) {
		return <div>No product entries found.</div>;
	}

	return (
		<div>
			{entries.map((entry) => (
				<div key={entry.productid} className=" card mb-3" style={{ maxWidth: "400px", margin: "auto", height: "650px" }}>
					<p className="Title">{entry.name}</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<img
							src={entry.imageUrl}
							alt={entry.name}
							className="px-2"
							width={250}
							height={250}
						/>
					</div>
					<p className="body">{entry.description}</p>
					<p className="text-center">${entry.price}</p>
					<a
						href={entry.link}
						className="text-center mb-4 text-white btn btn-warning btn-block btn-lg mt-3"
					>
						View Product
					</a>
				</div>
			))}
		</div>
	);
};

export default ProductComponent;