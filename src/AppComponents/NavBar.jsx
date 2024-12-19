import { Link } from "react-router-dom";
import '../styles/NavBar.css';


export default function NavBar(){
    return(
        <div className="NavContainer">
            <nav className="NavNav">
                <ul className="NavUl">
                    
                    <li className="Navli"><Link to='/'>Home</Link></li>
                    <li className="Navli"><Link to='/todoapp'>TodoApp</Link></li>
                    <li className="Navli"> <Link to='/profileapplication'>profileapplication</Link></li>
                    <li className="Navli"><Link to='/countriesapi'>countriesapi</Link></li>
                    <li className="Navli"><Link to='/calculator'>calculator</Link></li>
                </ul>
            </nav>
        </div>
    )
}