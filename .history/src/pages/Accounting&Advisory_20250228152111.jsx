import ContactForm from "../pages/TaxContactForm";
import { Link } from 'react-router-dom';

export default function AccountingAdvisory() {
   



    return (
        
            <section className=" text-dark pt-3 pb-2 text-center flex-column">
                <div className=" container d-flex justify-content-center">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="text-light">Affordable Bookkeeping Services for Small Businesses</h1>
                            <p className="text-light lead my-4">
                            Hassle-free, affordable bookkeeping services for small businesses by Xero-certified bookkeepers supervised by CPA-qualified accountants.
                            </p>
                            <div className=" container text-start text-light rounded">
                                <ul class="tick-style large-gap no-mar-bot">
                                    <li><span >No long-term contracts</span></li>
                                    <li><span >Fixed fee packages</span></li>
                                    <li><span >Xero-certified bookkeepers</span></li>
                                    <li><span >Over 40 years of combined experience</span></li>
                                    <li><span >Over 10,000 clients</span></li>
                                </ul>
                                <Link to="/OnSpotTaxReturn"><button className="btn btn-warning btn-lg">General Enquiry</button></Link>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                    <div className=" d-flex row align-items-center justify-content-center bg-danger">
                        <div className="col-lg-5">
                            <img src="../assets/Xero about-our-service " alt="" />
                        </div>
                        <div className="col-lg-5">
                        </div>
                    </div>
                </div>
                
                    
                

            </section>
        
        
    );
}
