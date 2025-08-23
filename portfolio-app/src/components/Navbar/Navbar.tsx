import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const downloadCV = () => {
        // TODO: Add actual CV download functionality
        console.log("Downloading CV...");
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <span className="navbar-name">Or Prager</span>
                </div>

                <div className="navbar-right">
                    <div className="navbar-links">
                        <button
                            className="nav-link"
                            onClick={() => scrollToSection("hero")}
                        >
                            <span className="nav-icon">🏠</span>
                            Home
                        </button>
                        <button
                            className="nav-link"
                            onClick={() => scrollToSection("about")}
                        >
                            <span className="nav-icon">👤</span>
                            About Me
                        </button>
                        <button
                            className="nav-link"
                            onClick={() => scrollToSection("projects")}
                        >
                            <span className="nav-icon">&lt;/&gt;</span>
                            Projects
                        </button>
                        <button
                            className="nav-link"
                            onClick={() => scrollToSection("contact")}
                        >
                            <span className="nav-icon">✉️</span>
                            Contact
                        </button>
                    </div>

                    <button className="cv-download-btn" onClick={downloadCV}>
                        <span className="cv-icon">⬇️</span>
                        View my CV
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
