import { Link } from "react-router-dom";
import footerLogo from "../assets/footer_logo_01.png";

export default function Footer() {
    return (
        
        <div className="bg-dark">
            <div className="container">
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
            <div className="text-center bg-light">
                <img src="{footerLogo}" alt="Cpa-Logo" width="100" />
            </div>
        </div>
    
    );
}
