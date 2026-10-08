import "./Style/Nav.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="header-wrapper">
      {/* Top Banner Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-info">
            <span className="top-badge">
              <FaShieldAlt className="top-icon" /> 100% गोपनीय एवं प्रमाणित उपचार
            </span>
            <span className="top-location hide-mobile">
              <FaMapMarkerAlt className="top-icon" /> चंद्र नगर, शाजापुर (म.प्र.)
            </span>
          </div>
          <div className="top-contact">
            <a href="tel:+919098530984" className="top-link phone">
              <FaPhoneAlt /> 24x7 हेल्पलाइन: +91 9098530984
            </a>
            <a
              href="https://wa.me/919098530984"
              target="_blank"
              rel="noreferrer"
              className="top-link whatsapp hide-mobile"
            >
              <FaWhatsapp /> WhatsApp परामर्श
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/images/logo.jpeg" alt="परिचय नशा मुक्ति केंद्र" />
            <div className="logo-text">
              <h1>परिचय <span>नशा मुक्ति</span></h1>
              <p>पुनर्वास एवं काउंसलिंग केंद्र</p>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className={menu ? "nav-links active" : "nav-links"}>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" onClick={closeMenu}>होम</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about" onClick={closeMenu}>हमारे बारे में</Link>
          </li>
          <li className={location.pathname === "/gallery" ? "active" : ""}>
            <Link to="/gallery" onClick={closeMenu}>गैलरी</Link>
          </li>
          <li className={location.pathname === "/blog" ? "active" : ""}>
            <Link to="/blog" onClick={closeMenu}>ब्लॉग</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact" onClick={closeMenu}>संपर्क</Link>
          </li>
          <li className="nav-cta-mobile">
            <a href="tel:+919098530984" className="nav-cta-btn">
              <FaPhoneAlt /> आपातकालीन मदद
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="tel:+919098530984" className="nav-cta-btn hide-mobile">
            <FaPhoneAlt /> 24x7 मदद लें
          </a>
          <div className="toggle" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">
            {menu ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;