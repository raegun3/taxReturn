import { Link } from "react-router-dom";

export default function Footer() {
    return (
        
        <div className="container bg-dark">
            <Link to="/" className="navbar-brand">Milestone Accountant</Link>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="Showcase1" className="nav-link">Tax Return</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="AccountingAdvisory" className="nav-link">Accounting & Advisory</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#instructors" className="nav-link">Helpful Resources</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="ContactMe" className="nav-link">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    
    );
}
