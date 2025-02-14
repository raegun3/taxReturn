import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <nav className="navbar-dark py-1 ">
        <div className="container bg-dark">
            <Link to="/" className="navbar-brand">Milestone Accountant</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>

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
    </nav>      
    );
}
