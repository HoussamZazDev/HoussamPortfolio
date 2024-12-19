import { Link } from "react-router-dom";
import '../styles/NavBar.css';


export default function NavBar(){
    return(
        <div className="NavContainer">
            <nav className="NavNav">
                <Link to='/'>Home</Link>
                <Link to='/todoapp'>TodoApp</Link>
                <Link to='/profileapplication'>profileapplication</Link>
                <Link to='/countriesapi'>countriesapi</Link>
                <Link to='/calculator'>calculator</Link>

            </nav>
        </div>
    )
}