import ContactForm from "./TaxContactForm";
import React, {useEffect, useState} from "react";
import axios from 'axios';

const API_URL = "https://api.anz/cds-au/v1/banking/products"

export default function helpfulResources() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    axios.get('https://api.anz/cds-au/v1/banking/products')
.then(response => {
    console.log('Axios is working:', response.data);
})
.catch(error => {
    console.error('Error using Axios:', error);
});
    
    useEffect(() => {
        axios
        .get(API_URL, {
          headers: {
            "Accept": "application/json",
            "x-v": "1" // Some APIs require versioning headers
          }
        })
        .then((response) => {
          setProducts(response.data.products); // Ensure correct property path
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });

    },[]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    
    return (
    
                    <section className="helpfulResources">
                        <div className="container bg-light h-100 w-100">
                            <div className="row d-flex align-items-center justify-content-evenly flex-row-reverse">
                            <ContactForm /> 
                                <div className="col-lg-6 pt-5 order-lg-1">
                                    <h2>Fetched Data</h2>
                                    <ul>
                                        {data.slice(0, 5).map((product) => (
                                        <li key={product.id}>
                                            <strong>{product.title}</strong>
                                            <p>{product.body}</p>
                                        </li>
                                        ))}
                                    </ul>
                                    
                                </div>
                                              
                                
                            </div>                       
                        </div>
                    </section>
            
        
    );
};


