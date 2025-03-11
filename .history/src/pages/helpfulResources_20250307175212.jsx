import ContactForm from "./TaxContactForm";
import React, { useEffect, useState } from "react";

const API_URL = "https://api.anz/cds-au/v1/banking/products";

const HelpfulResources = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const headers = {
      "Accept": "application/json",
      "x-v": "3",  // Replace with actual version
      "x-min-v": "1" // Replace with actual minimum version
    };

    fetch(API_URL, { method: "GET", headers })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("API Response:", data); // Log full response for debugging
        setProducts(data.products || []); // Ensure correct property path
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Log products after state update
  useEffect(() => {
    console.log("Updated Products:", products);
  }, [products]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Banking Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.productId}>
            <strong>{product.name}</strong> - {product.description}
          </li>
        ))}
      </ul>

      {/* Import Contact Form */}
      <ContactForm />
    </div>
  );
};

export default HelpfulResources;