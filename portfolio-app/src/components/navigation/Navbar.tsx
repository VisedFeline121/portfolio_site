import React from "react";
import { SECTIONS } from "../../constants";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useScrollToSection } from "../../hooks/useScrollToSection";
import { useTheme } from "../../hooks/useTheme";
import { Button } from "../ui/Button";
import { CVButton } from "../ui/CVButton";
import { NavLink } from "../ui/NavLink";
import "./Navbar.css";

const Navbar: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { isScrolled } = useScrollPosition();
    const { scrollToSection } = useScrollToSection();

    // Debug: Log scroll state
    console.log("Navbar isScrolled:", isScrolled, "ScrollY:", window.scrollY);

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
                        <NavLink
                            sectionId={SECTIONS.HERO}
                            icon="🏠"
                            label="Home"
                            onClick={scrollToSection}
                        />
                        <NavLink
                            sectionId={SECTIONS.ABOUT}
                            icon="👤"
                            label="About Me"
                            onClick={scrollToSection}
                        />
                        <NavLink
                            sectionId={SECTIONS.PROJECTS}
                            icon="&lt;/&gt;"
                            label="Projects"
                            onClick={scrollToSection}
                        />
                        <NavLink
                            sectionId={SECTIONS.CONTACT}
                            icon="✉️"
                            label="Contact"
                            onClick={scrollToSection}
                        />
                    </div>

                    <CVButton />
                    <Button className="theme-toggle" onClick={toggleTheme}>
                        {isDarkMode ? "☀️" : "🌙"}
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
