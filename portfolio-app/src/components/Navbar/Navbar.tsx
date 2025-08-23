import React, { useEffect, useState } from "react";
import { DEFAULT_THEME, SECTIONS, THEME_STORAGE_KEY } from "../../constants";
import "./Navbar.css";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        document.documentElement.setAttribute(
            "data-theme",
            newTheme ? "dark" : "light"
        );
        localStorage.setItem(THEME_STORAGE_KEY, newTheme ? "dark" : "light");
    };

    useEffect(() => {
        const savedTheme =
            localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;
        const prefersDark = savedTheme === "dark";
        setIsDarkMode(prefersDark);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollPosition = window.scrollY;
                    setIsScrolled(scrollPosition > 0);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <nav
            className={`navbar ${
                isScrolled ? "navbar-scrolled" : "navbar-transparent"
            }`}
        >
            <div className="navbar-container">
                <div className="navbar-brand">
                    <span className="navbar-name">Or Prager</span>
                </div>

                <div className="navbar-right">
                    <div className="navbar-links">
                        <button
                            className="nav-link"
                            onClick={() => scrollToSection(SECTIONS.HERO)}
                        >
                            <span className="nav-icon">🏠</span>
                            Home
                        </button>
                        <button
                            className="nav-link"
                            onClick={() => scrollToSection(SECTIONS.ABOUT)}
                        >
                            <span className="nav-icon">👤</span>
                            About Me
                        </button>
                        <button
                            className="nav-link"
                            onClick={() => scrollToSection(SECTIONS.PROJECTS)}
                        >
                            <span className="nav-icon">&lt;/&gt;</span>
                            Projects
                        </button>
                        <button
                            className="nav-link"
                            onClick={() => scrollToSection(SECTIONS.CONTACT)}
                        >
                            <span className="nav-icon">✉️</span>
                            Contact
                        </button>
                    </div>

                    <button className="cv-download-btn" onClick={downloadCV}>
                        <span className="cv-icon">⬇️</span>
                        View my CV
                    </button>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {isDarkMode ? "☀️" : "🌙"}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
