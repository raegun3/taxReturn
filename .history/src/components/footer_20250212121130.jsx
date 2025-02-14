import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className=" container ">
            <div className="row">
                <div>
                    <ul>
                        
                        <li><Link to="/"> HOME</Link></li>
                        <li><Link to="/AccountingAdvisory"> Accounting & Advisory</Link></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

            </div>
        </div>        
    );
}
