
import { Link } from "react-router-dom"



function Navbar() {
  return (
    <div className="container text-center">

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-1 fixed-top ">
            <div className="container">
                <Link to="/" className="navbar-brand">My First Homepage</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/Mains/Showcase1" className="nav-link">What I've learn</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="skills" className="nav-link">IT Skills interested to learn</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#instructors" className="nav-link">instructors</a>
                        </li>
                        <li className="nav-item">
                            <Link to="ContactMe" className="nav-link">contact me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}
export default Navbar