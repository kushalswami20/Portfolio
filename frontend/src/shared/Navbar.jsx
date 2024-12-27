import React, { useState } from 'react';
import "../styles/Navbar.css";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <div>
            <header className="header" id="home">
                <div className="container">
                    <nav className="navbar">
                        <div
                            className="logo-container"
                            onClick={refreshPage}
                            style={{ cursor: 'pointer' }}
                        >
                            {/* Uncomment and use your logo */}
                            <img src="images/userAsset/adi-Photoroom.png" alt="Logo" className="nav-logo" />
                        </div>

                        <div
                            className={`nav-items ${isMobileMenuOpen ? 'active' : ''}`}
                            id="nav-menu"
                        >
                            <div>
                                <a href="#home">Home</a>
                            </div>
                            <div>
                                <a href="#projects">Projects</a>
                            </div>
                            <div>
                                <a href="#skills">Skills</a>
                            </div>
                            <div>
                                <a href="#contactMe">Contact Me</a>
                            </div>
                            <div className="theme-toggle">
                                {/* Example for theme toggle */}
                                {/* <i className="fa fa-moon-o" style={{ fontSize: '24px', cursor: 'pointer' }}></i> */}
                            </div>
                            <button
                                className="mobile-nav-toggle close-menu"
                                onClick={toggleMobileMenu}
                            >
                                {/* Close icon */}
                                <i className="bx bx-x" style={{ color: '#e7e2e4' }}></i>
                            </button>
                        </div>

                        <button
                            className="mobile-nav-toggle menu-btn"
                            onClick={toggleMobileMenu}
                        >
                            {/* Menu icon */}
                            <i className="bx bx-menu" style={{ color: '#000' }}></i>
                        </button>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
