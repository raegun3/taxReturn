import { Link } from "react-router-dom";
import footerLogo from "../assets/footer_logo_01.png";
import security from "../assets/footer_logo_04.png";
import maxReturn from "../assets/maximum-refund-guarantee-logo.png";
import { ulRef } from "../components/navbar";
import React from "react";


export default function Footer() {

    console.log(ulRef);
    
    
    return (
        
        <div className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 align-self-center">
                        <div className="row justify-content-evenly">
                            <div className=" col-lg-3 text-start">
                            <h6 className="text-light">QUICK LINK</h6>
                                <ul className="">
                                    
                                   
                                </ul>
                            </div>
                            <div className=" col-lg-3 text-start pt-3">
                                <ul className="">
                                    <li className="nav-link">
                                        <Link to="AccountingAdvisory" className="nav-link text-light">Accounting & Advisory</Link>
                                    </li>
                                    <li className="nav-link">
                                        <Link to="#instructors" className="nav-link text-light">Helpful Resources</Link>
                                    </li>
                                    <li className="nav-link">
                                        <Link to="ContactMe" className="nav-link text-light">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                            
                        
                                  
                    </div>
                    <div className="col-lg-4">
                    <div className="row">
                                <div className="col-sm text-start">                        
                                    <ul className="">
                                        <li className="nav-link text-light">
                                            <span className="lead">Contact Info</span>
                                        </li>
                                        <li className="nav-link text-light">
                                            <span className="">Main Location:</span> <br /> 134 Hill Rd Runcorn QLD {/* spell-checker: disable-line */}
                                        </li>
                                        <li className="nav-link text-light">
                                            <span className="">Mobile phone:</span> <br /> 0435 488 983
                                        </li>
                                        <li className="nav-link text-light">
                                            <span className="">Email:</span> <br /> excellentaccountant@outlook.com
                                        </li>
                                    </ul>                    
                                </div>
                                
                            </div>

                    </div>
                </div>
                <div>
                <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-2">
                                <img src={footerLogo} alt="Cpa-Logo" width="100" />
                            </div >
                            <div className="col-2">
                                <img src={security} alt="security-logo" width="100" />
                            </div>
                            <div className="col-2">
                                <img src={maxReturn} alt="max-return-logo" width="80" />
                            </div>
                            
                        </div>      
                </div>
            </div>
        </div>
    
    );
}

