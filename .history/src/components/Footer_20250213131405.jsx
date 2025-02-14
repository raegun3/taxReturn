import { Link } from "react-router-dom";
import footerLogo from "../assets/footer_logo_01.png";
import security from "../assets/footer_logo_04.png";
import maxReturn from "../assets/maximum-refund-guarantee-logo.png";



export default function Footer() {
    return (
        
        <div className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-7 align-self-center">
                        <div className="">
                            <div className=" text-start">
                                <ul className="">
                                    <li className=" nav-link text-light lead">QUICK LINK</li>
                                    <li>
                                    <Link to="/" className="nav-link text-light">Home</Link>
                                    </li>
                                    <li className="">
                                        <Link to="Showcase1" className="nav-link text-light">Tax Return</Link>
                                    </li>
                                    <li className="">
                                        <Link to="AccountingAdvisory" className="nav-link text-light">Accounting & Advisory</Link>
                                    </li>
                                    <li className="">
                                        <Link to="#instructors" className="nav-link text-light">Helpful Resources</Link>
                                    </li>
                                    <li className="">
                                        <Link to="ContactMe" className="nav-link text-light">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" row">
                            <div className="col">
                                <img src={footerLogo} alt="Cpa-Logo" width="100" />
                            </div className="col">
                            <div>
                                <img src={security} alt="security-logo" width="100" />
                            </div>
                            <div>
                                <img src={maxReturn} alt="max-return-logo" width="80" />
                            </div>
                            
                        </div>                
                    </div>
                    <div className="col-sm-4">
                    <div className="row py-5 align-content-center ">
                                <div className="col-md-6 pt-5">
                                    <h1 className="text-center text-light">Contact Info</h1>
                                    <ul className="">
                                        <li className="nav-link text-light">
                                            <span className="">Main Location:</span> 134 Hill Rd Runcorn QLD {/* spell-checker: disable-line */}
                                        </li>
                                        <li className="nav-link text-light">
                                            <span className="">Mobile phone:</span> 0435 488 983
                                        </li>
                                        <li className="nav-link text-light">
                                            <span className="">Email:</span> excellentaccountant@outlook.com
                                        </li>
                                    </ul>                    
                                </div>
                                
                            </div>

                    </div>
                </div>
            </div>
        </div>
    
    );
}

