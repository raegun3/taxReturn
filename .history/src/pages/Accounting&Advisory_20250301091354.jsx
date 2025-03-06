import ContactForm from "../pages/TaxContactForm";
import { Link } from 'react-router-dom';

export default function AccountingAdvisory() {
   



    return (
        <>
            <section className=" text-dark pt-3 pb-2 text-center">
                <div className="row flex-column">
                    <div className="col-12">
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
                        </div>
                    
                    </div>
                    <div className="bg-light col-12 h-100">
                        <div className="row">
                            <div className="col-4 p-5 bg-info">
                                <img src="src\assets\Xero about-our-service.jpeg" alt="Small Business" style={{height: "400px"}}/>
                            </div>
                            <div className="col-2"></div>
                            <div className="col-5">
                                <div className="">
                                    <img src="src\assets\xero-certified-advisor-logo.jpg" alt=""  />
                                </div>
                                
                                <h2 className="text">Xero-Certified Small Business Bookkeepers</h2>
                                <p>Our Xero-certified bookkeepers specialise in helping small to medium businesses achieve a solid financial footing and grow into the long-term. With a Google rating of 4.7 and over 1200 reviews, we are trusted to provide reliable bookkeeping services Australia-wide. Take the stress out of your finances and give yourself more time to grow your business by reaching out for a free consultation today.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </section>
            
        
        </>
        
        
    );
}
