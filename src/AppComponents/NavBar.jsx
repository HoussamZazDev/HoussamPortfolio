import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const Navbar = ({applogoname}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="NavBar-header">
      <div className="NavBar-logo"><Link className="NavBar-link" style={{fontSize : "1.9rem"}} to="/" onClick={() => setIsOpen(false)}>
          {applogoname}
        </Link></div>
      <nav className={`NavBar-links ${isOpen ? "NavBar-links-active" : ""}`}>
        <Link className="NavBar-link" to="/todoapp" onClick={() => setIsOpen(false)}>
          TaskoPhobia
        </Link>
        <Link className="NavBar-link" to="/calculator" onClick={() => setIsOpen(false)}>
          Calculator
        </Link>
        <Link className="NavBar-link" to="/countriesapi" onClick={() => setIsOpen(false)}>
          CountriesApi
        </Link>
        <Link className="NavBar-link" to="/profileapplication" onClick={() => setIsOpen(false)}>
          Profile App
        </Link>
      </nav>
      <button className="NavBar-hamburger" onClick={toggleMenu}>
        <span className="NavBar-hamburger-line"></span>
        <span className="NavBar-hamburger-line"></span>
        <span className="NavBar-hamburger-line"></span>
      </button>
    </header>
  );
};

export default Navbar;
