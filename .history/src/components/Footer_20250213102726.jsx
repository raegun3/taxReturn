import { Link } from "react-router-dom";
import footerLogo from "../assets/footer_logo_01.png";
import security from "../assets/footer_logo_04.png";
import maxReturn from "../assets/maximum-refund-guarantee-logo.png";



export default function Footer() {
    return (
        
        <div className="bg-dark">
            <div className="container">
                <div className="row">
                </div>
                <div className="col-sm-6 align-self-center">
                    <div className="">
                        <div className="">
                            <ul className="">
                                <li>
                                <Link to="/" className="nav-link text-light">Milestone Accountant</Link>
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
                    <div className=" ">
                        <img src={footerLogo} alt="Cpa-Logo" width="100" />
                        <img src={security} alt="security-logo" width="100" />
                        <img src={maxReturn} alt="max-return-logo" width="80" />
                    </div>                
                </div>
                <div className="col-sm-6 bg-light">

                </div>
            </div>
        </div>
    
    );
}
