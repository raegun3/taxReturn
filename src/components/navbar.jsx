
import { Link } from "react-router-dom"



function Navbar() {
  return (
    

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-1 fixed-top ">
            <div className="container-fluid bg-dark">
                <Link to="/" className="navbar-brand">Milestone Accountant</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto ">
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
export default Navbar