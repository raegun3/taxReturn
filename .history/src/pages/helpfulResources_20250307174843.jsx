import ContactForm from "./TaxContactForm";
import React, {useEffect, useState} from "react";


const API_URL = "https://api.anz/cds-au/v1/banking/products";

const HelpfulResources = () => {
  

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

export default HelpfulResources;
