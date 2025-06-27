import React from "react";
import "./Navbar.css";

const Navbar = ({ language, onLanguageChange }) => (
  <nav className="navbar">
    <div className="navbar-logo">MPX</div>
    <div className="navbar-menu">
      <button className="lang-switch" onClick={onLanguageChange}>
        {language === "en" ? "العربية" : "EN"}
      </button>
    </div>
  </nav>
);

export default Navbar;
