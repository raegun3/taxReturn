import { Link } from "react-router-dom";

export default function Footer() {
    return (
        
        <div className="bg-dark">
            <div className="container">
                <div className="">
                    <ul className="text-light">
                        <li>
                        <Link to="/" className="">Milestone Accountant</Link>
                        </li>
                        <li className="">
                            <Link to="Showcase1" className="nav-link">Tax Return</Link>
                        </li>
                        <li className="">
                            <Link to="AccountingAdvisory" className="nav-link">Accounting & Advisory</Link>
                        </li>
                        <li className="">
                            <Link to="#instructors" className="nav-link">Helpful Resources</Link>
                        </li>
                        <li className="">
                            <Link to="ContactMe" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className=" bg-light">
                <image src="./assets/footer_logo_01.png"></image>
            </div>
        </div>
    
    );
}
