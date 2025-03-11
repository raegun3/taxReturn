import ContactForm from "./TaxContactForm";
import React, {useEffect, useState} from "react";
import axios from 'axios';

const API_URL = "https://api.anz/cds-au/v1/banking/products";

const FetchBankingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const headers = {
      "Accept": "application/json",
      "x-v": "string",  // Replace with actual version
      "x-min-v": "string" // Replace with actual minimum version
    };

    fetch(API_URL, { method: "GET", headers })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products || []); // Ensure correct property path
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

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
    </div>
  );
};


