import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className=" container ">
            <div className="row">
                <div>
                    <ul>
                        
                        <li><Link to="/"> HOME</Link></li>
                        <li><Link to="/AccountingAdvisory"> ACCOUNTING & ADVISORY</Link></li>
                        <li><Link to="/ContactMe"> CONTACT US</li>
                        <li></li>
                    </ul>
                </div>

            </div>
        </div>        
    );
}
