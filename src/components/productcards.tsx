import React from "react";

type Product = {
    name: string;
    description: string;
    photo: string;
    price: number;
    link: string;
};

const products: Product[] = [
    {
        name: "Moonshine Tumbler",
        description: "A stylish tumbler for your favorite drinks.",
        photo: "/images/tumbler.jpg",
        price: 19.99,
        link: "https://example.com/tumbler",
    },
    {
        name: "Consulting Session",
        description: "One-hour professional consulting session.",
        photo: "/images/consulting.jpg",
        price: 99.99,
        link: "https://example.com/consulting",
    },
    {
        name: "Branded Hoodie",
        description: "Comfortable hoodie with our logo.",
        photo: "/images/hoodie.jpg",
        price: 49.99,
        link: "https://example.com/hoodie",
    },
];

function ProductCards() {
    return (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {products.map((product) => (
                <div
                    key={product.name}
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "16px",
                        width: "250px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                >
                    <img
                        src={product.photo}
                        alt={product.name}
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }}
                    />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p style={{ fontWeight: "bold" }}>${product.price.toFixed(2)}</p>
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                        <button style={{ padding: "8px 16px", cursor: "pointer" }}>View Product</button>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default ProductCards;