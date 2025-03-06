import ContactForm from "../TaxContactForm";
import { Link } from 'react-router-dom';

export default function AccountingAdvisory() {
   



    return (
        
            <section className=" text-dark pt-3 pb-2 text-center">
                <div className=" container d-flex justify-content-center">
                    <div className="">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="text-light">Affordable Bookkeeping Services for Small Businesses</h1>
                            <p className="text-light lead my-4">
                            Hassle-free, affordable bookkeeping services for small businesses by Xero-certified bookkeepers supervised by CPA-qualified accountants.
                            </p>
                            <div className=" container text-start text-light rounded">
                                <ul class="tick-style large-gap no-mar-bot">
                                    <li><span style="color: #ffffff;">No long-term contracts</span></li>
                                    <li><span style="color: #ffffff;">Fixed fee packages</span></li>
                                    <li><span style="color: #ffffff;">Xero-certified bookkeepers</span></li>
                                    <li><span style="color: #ffffff;">Over 40 years of combined experience</span></li>
                                    <li><span style="color: #ffffff;">Over 10,000 clients</span></li>
                                </ul>
                                
                                <Link to="/OnSpotTaxReturn"><button className="btn btn-primary btn-lg">Read More</button></Link> 

                            </div>
                            
                        </div>
                        <ContactForm />
                    </div>
                    </div>
                </div>
            </section>
        
        
    );
}
